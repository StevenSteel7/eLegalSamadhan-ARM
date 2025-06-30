// prisma/seed.js

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

// Embedded password utilities
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@vikram.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'password123'; // In production, secure this via secrets management

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await hashPassword(adminPassword);
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Admin User',
        password: hashedPassword,
        role: 'admin',
        emailVerified: new Date(),
      },
    });
    console.log(`Admin user ${adminEmail} created successfully.`);
  } else {
    console.log(`Admin user ${adminEmail} already exists. No action taken.`);
  }

  // Future-proofing: Seed additional data below if necessary
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Prisma client disconnected.');
  });

