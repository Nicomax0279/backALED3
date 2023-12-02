import knex from "knex";
import { dbConf } from "../dbConfig";

const defaultStudents = [
  {
    id: 1,
    name: 'Juan',
    surname: 'Pérez',
    career: 'analista de sistemas',
    year: 3,
    birthdate: new Date(1998, 5, 15),
    email: 'juan@example.com',
    phoneNumber: '123-456-7890',
    address: 'Calle Principal 123',
    active: true,
  },
  {
    id: 2,
    name: 'María',
    surname: 'García',
    career: 'radiología',
    year: 2,
    birthdate: new Date(1999, 8, 10),
    email: 'maria@example.com',
    phoneNumber: '987-654-3210',
    address: 'Avenida Secundaria 456',
    active: true,
  },
  {
    id: 3,
    name: 'Carlos',
    surname: 'López',
    career: 'administración de empresas',
    year: 4,
    birthdate: new Date(1997, 3, 25),
    email: 'carlos@example.com',
    phoneNumber: '555-123-4567',
    address: 'Plaza Central 789',
    active: false,
  },
  {
    id: 4,
    name: 'Laura',
    surname: 'Martínez',
    career: 'radiología',
    year: 1,
    birthdate: new Date(2000, 1, 5),
    email: 'laura@example.com',
    phoneNumber: '999-888-7777',
    address: 'Callejón Tranquilo 42',
    active: true,
  },
  {
    id: 5,
    name: 'Andrés',
    surname: 'Rodríguez',
    career: 'analista de sistemas',
    year: 2,
    birthdate: new Date(1999, 10, 20),
    email: 'andres@example.com',
    phoneNumber: '444-333-2222',
    address: 'Avenida Moderna 555',
    active: true,
  },
  // Agrega más usuarios aquí
];
const database = knex(dbConf.sqlite);

 export const StudentsCreate = async () => {
  const tableExists = await database.schema.hasTable("students");
  ////create table
  if (tableExists) {
    await database.schema.dropTable("students");
  }
  await database.schema.createTable("students", (table) => {
    table.increments("id");
    table.string("name", 50);
    table.string("surname", 50);
    table
      .string("career", 50)
      .checkIn([
        "analista de sistemas",
        "radiología",
        "administración de empresas",
      ]);
    table.integer("year");
    table.date("birthdate");
    table.string("email", 50);
    table.string("phoneNumber", 50);
    table.string("address", 50);
    table.boolean("active").defaultTo(true);
  });
  await database.from("students").insert(defaultStudents)

  database.destroy();
};
StudentsCreate();
