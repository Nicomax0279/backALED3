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
exports.putCourseById = exports.deleteCourseById = exports.postCourse = exports.getCourseById = exports.getCourses = void 0;
const index_dao_1 = require("../database/dao/index.dao");
const getCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield index_dao_1.coursesManager.getWithProfessors();
        res.json(response);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getCourses = getCourses;
const getCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const response = yield index_dao_1.coursesManager.getById(Number(id));
        res.json(response);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getCourseById = getCourseById;
const postCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCourse = req.body;
        const response = yield index_dao_1.coursesManager.save(newCourse);
        const course = yield index_dao_1.coursesManager.getAll();
        res.json(course);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.postCourse = postCourse;
const deleteCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const response = yield index_dao_1.coursesManager.deleteById(Number(id));
        const course = yield index_dao_1.coursesManager.getAll();
        res.json(course);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.deleteCourseById = deleteCourseById;
const putCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const putCourse = req.body;
        const id = req.params.id;
        const response = yield index_dao_1.coursesManager.putById(Number(id), putCourse);
        const course = yield index_dao_1.coursesManager.getAll();
        res.json(course);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.putCourseById = putCourseById;
