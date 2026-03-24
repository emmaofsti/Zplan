import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Zplan database...');

  // Clear existing data
  await prisma.shiftSwapRequest.deleteMany();
  await prisma.shiftAssignment.deleteMany();
  await prisma.shift.deleteMany();
  await prisma.pushSubscription.deleteMany();
  await prisma.user.deleteMany();

  // Create default admin user
  const hashedPassword = await bcrypt.hash('admin', 10);

  await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@zplan.no',
      password: hashedPassword,
      role: 'ADMIN',
      active: true,
    },
  });

  console.log('Created admin user (admin@zplan.no / admin)');
  console.log('');
  console.log('Zplan seed complete! Database is ready.');
  console.log('Change the admin password after first login.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
