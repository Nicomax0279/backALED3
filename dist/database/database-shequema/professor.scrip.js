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
exports.ProfessorCreate = void 0;
const knex_1 = __importDefault(require("knex"));
const dbConfig_1 = require("../dbConfig");
const defaultProfessor = [
    { name: "carlos", surname: "marias", description: "" },
    { name: "pedro", surname: "posadas", description: "" },
    { name: "marcos", surname: "marias", description: "" },
    { name: "maria", surname: "lolita", description: "" },
    { name: "martin", surname: "perez", description: "" },
];
const database = (0, knex_1.default)(dbConfig_1.dbConf.sqlite);
const ProfessorCreate = () => __awaiter(void 0, void 0, void 0, function* () {
    const tableExists = yield database.schema.hasTable("professors");
    ////create table
    if (tableExists) {
        yield database.schema.dropTable("professors");
    }
    yield database.schema.createTable("professors", (table) => {
        table.increments("id");
        table.string("name", 50);
        table.string("surname", 500);
        table.string("description", 500);
        table.boolean("active").defaultTo(true);
    });
    yield database.from("professors").insert(defaultProfessor);
    database.destroy();
});
exports.ProfessorCreate = ProfessorCreate;
(0, exports.ProfessorCreate)();
