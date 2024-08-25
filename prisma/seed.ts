import { PrismaClient } from '@prisma/client';
import { dataCategories } from './data/dataCategories';

const prisma = new PrismaClient();

async function main() {
  for (const category of dataCategories) {
    await prisma.category.create({
      data: category,
    });
  }

  console.log('Database has been seeded. 🌱');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
