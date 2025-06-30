// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const judgements = [];

  for (let i = 1; i <= 50; i++) {
    judgements.push({
      title: `Sample Judgement ${i}`,
      caseNumber: `CASE-${2024}-${i.toString().padStart(3, '0')}`,
      court: i % 2 === 0 ? "Supreme Court of India" : "High Court of Delhi",
      date: `2024-05-${(i % 28 + 1).toString().padStart(2, '0')}`, // Day 01 to 28
      summary: `This is a summary for sample judgement ${i}.`,
      fullContent: `This is the full content of the sample judgement number ${i}.`,
    });
  }

  await prisma.judgement.createMany({
    data: judgements,
  });

  console.log('✅ 50 sample judgements seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
