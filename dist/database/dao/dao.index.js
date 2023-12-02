"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsManger = void 0;
const dbConfig_1 = require("../dbConfig");
const students_dao_1 = require("./students.dao");
exports.studentsManger = new students_dao_1.StudentsManager(dbConfig_1.dbConf.sqlite, 'students');
