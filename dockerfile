FROM node:18-alpine AS base

WORKDIR /app

# ---- Dependencies ----
FROM base AS deps
# Copy package.json and lock file
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY prisma ./prisma

RUN npm ci

# ---- Builder ----
FROM base AS builder
ARG RESEND_API_KEY_BUILD
ENV RESEND_API_KEY=$RESEND_API_KEY_BUILD
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/prisma ./prisma
COPY . .

RUN npm run build

# ---- Runner ----
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create a directory for Prisma data and ensure it exists
RUN mkdir -p /app/prisma/data && chmod 777 /app/prisma/data

# Copy Prisma from builder
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Copy the startup script
COPY --from=builder /app/startup.sh ./startup.sh
RUN chmod +x ./startup.sh

# Copy standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose the port
EXPOSE 3000

# Set the environment variables
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Important: Run as root to ensure we can create the database file
# The startup script will handle database initialization
ENTRYPOINT ["./startup.sh"]
