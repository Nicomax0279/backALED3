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
Object.defineProperty(exports, "__esModule", { value: true });
const courses_scrip_1 = require("./courses.scrip");
const students_scrip_1 = require("./students.scrip");
const professor_scrip_1 = require("./professor.scrip");
const users_scrip_1 = require("./users.scrip");
const op = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, students_scrip_1.StudentsCreate)();
    console.log("students creada correctamente");
    yield (0, professor_scrip_1.ProfessorCreate)();
    console.log("professors creada correctamente");
    yield (0, users_scrip_1.UsersCreate)();
    console.log("users creada correctamente");
    yield (0, courses_scrip_1.CoursesCreate)();
    console.log("tabla course creada correctamente");
    console.log("db creada correctamente");
});
op();
