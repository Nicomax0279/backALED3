import knex from "knex";
import { dbConf } from "../dbConfig";

const database = knex(dbConf.sqlite);
const tableName = 'users'
const defaultUsers =  [
    {username:'11@11',password:'11' , role:'admin'},  
    {username:'22@22',password:'22' , role:'user'}
  ]
export  const UsersCreate = async () => {
    const tableExists = await database.schema.hasTable(tableName);
    ////create table
    if (tableExists) {
      await database.schema.dropTable(tableName);
    }
    await database.schema.createTable(tableName, (table) => {
      table.increments("id");
      table.string("username", 50);
      table.string("password", 50);
      table.string("role", 20).checkIn(['admin','user']).defaultTo('user');
      table.boolean("active").defaultTo(true);
    });
     await database.from(tableName).insert(defaultUsers)
    //  console.log(await database.from(tableName).select('*'))
    database.destroy();
  };
UsersCreate();