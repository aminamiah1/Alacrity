const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const people = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
    { name: "Carol", age: 30 },
    { name: "Dave", age: 35 },
  ];

  // Insert the people into the Person table
  for (const person of people) {
    await prisma.person.create({
      data: person,
    });
  }

  console.log('Inserted people into the database');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });