"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCreate = void 0;
const knex_1 = __importDefault(require("knex"));
const dbConfig_1 = require("../dbConfig");
const database = (0, knex_1.default)(dbConfig_1.dbConf.sqlite);
const tableName = 'users';
const defaultUsers = [
    { username: '11@11', password: '11', role: 'admin' },
    { username: '22@22', password: '22', role: 'user' }
];
const UsersCreate = () => __awaiter(void 0, void 0, void 0, function* () {
    const tableExists = yield database.schema.hasTable(tableName);
    ////create table
    if (tableExists) {
        yield database.schema.dropTable(tableName);
    }
    yield database.schema.createTable(tableName, (table) => {
        table.increments("id");
        table.string("username", 50);
        table.string("password", 50);
        table.string("role", 20).checkIn(['admin', 'user']).defaultTo('user');
        table.boolean("active").defaultTo(true);
    });
    yield database.from(tableName).insert(defaultUsers);
    //  console.log(await database.from(tableName).select('*'))
    database.destroy();
});
exports.UsersCreate = UsersCreate;
(0, exports.UsersCreate)();
