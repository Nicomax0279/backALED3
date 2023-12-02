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
exports.putStudentById = exports.deleteStudentById = exports.postStudent = exports.getStudentById = exports.getStudents = void 0;
const index_dao_1 = require("../database/dao/index.dao");
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield index_dao_1.studentsManger.getActives();
        res.json(response);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getStudents = getStudents;
const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const response = yield index_dao_1.studentsManger.getById(Number(id));
        res.json(response);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getStudentById = getStudentById;
const postStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newStudent = req.body;
        const response = yield index_dao_1.studentsManger.save(newStudent);
        res.json(response);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.postStudent = postStudent;
const deleteStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const response = yield index_dao_1.studentsManger.deleteById(Number(id));
        res.json(response);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.deleteStudentById = deleteStudentById;
const putStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const putStudent = req.body;
        const id = req.params.id;
        const response = yield index_dao_1.studentsManger.putById(Number(id), putStudent);
        res.json(response);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.putStudentById = putStudentById;
