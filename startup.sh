#!/bin/sh
set -e

# Create the data directory if it doesn't exist
mkdir -p /app/prisma/data

# Flag to track if this is a new database
DB_INITIALIZED=false

# Check if dev.db exists, if not initialize it
if [ ! -f /app/prisma/data/dev.db ]; then
    echo "Database file not found, initializing..."
    # Touch the file to create it
    touch /app/prisma/data/dev.db
    # Set permissions to allow read/write
    chmod 666 /app/prisma/data/dev.db
    # Set flag to indicate we need to seed the database
    DB_INITIALIZED=true
fi

# Set proper permissions for the data directory
chmod 777 /app/prisma/data

# Generate Prisma client (to be safe)
echo "Generating Prisma client..."
npx prisma generate

# Run Prisma migrations to initialize the schema
echo "Running database migrations..."
npx prisma migrate deploy

npm install bcryptjs

# Run the seed if this is a new database
if [ "$DB_INITIALIZED" = true ]; then
    echo "New database detected, running seed..."
    npm run seed
fi

# Start the application
echo "Starting the application..."
exec node server.js
