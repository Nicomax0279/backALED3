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
exports.StudentsCreate = void 0;
const knex_1 = __importDefault(require("knex"));
const dbConfig_1 = require("../dbConfig");
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
const database = (0, knex_1.default)(dbConfig_1.dbConf.sqlite);
const StudentsCreate = () => __awaiter(void 0, void 0, void 0, function* () {
    const tableExists = yield database.schema.hasTable("students");
    ////create table
    if (tableExists) {
        yield database.schema.dropTable("students");
    }
    yield database.schema.createTable("students", (table) => {
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
    yield database.from("students").insert(defaultStudents);
    database.destroy();
});
exports.StudentsCreate = StudentsCreate;
(0, exports.StudentsCreate)();
