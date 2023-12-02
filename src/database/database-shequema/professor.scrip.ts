
import knex from "knex";
import { dbConf } from "../dbConfig";

const defaultProfessor = [
  { name: "carlos", surname: "marias", description: "" },
  { name: "pedro", surname: "posadas", description: "" },
  { name: "marcos", surname: "marias", description: "" },
  { name: "maria", surname: "lolita", description: "" },
  { name: "martin", surname: "perez", description: "" },
];
const database = knex(dbConf.sqlite);

export const ProfessorCreate = async () => {
  const tableExists = await database.schema.hasTable("professors");
  ////create table
  if (tableExists) {
    await database.schema.dropTable("professors");
  }
  await database.schema.createTable("professors", (table) => {
    table.increments("id");
    table.string("name", 50);
    table.string("surname", 500);
    table.string("description", 500);
    table.boolean("active").defaultTo(true);
  });
  await database.from("professors").insert(defaultProfessor);

  database.destroy();
};
ProfessorCreate();
