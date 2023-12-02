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
exports.putProfessorById = exports.deleteProfessorById = exports.postProfessor = exports.getProfessorById = exports.getProfessors = void 0;
const index_dao_1 = require("../database/dao/index.dao");
const getProfessors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const professors = yield index_dao_1.professorsManager.getActives();
        res.json(professors);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getProfessors = getProfessors;
const getProfessorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const professor = yield index_dao_1.professorsManager.getById(Number(id));
        res.json(professor);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getProfessorById = getProfessorById;
const postProfessor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProfessor = req.body;
        const response = yield index_dao_1.professorsManager.save(newProfessor);
        res.json(response);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.postProfessor = postProfessor;
const deleteProfessorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const response = yield index_dao_1.professorsManager.deleteById(Number(id));
        res.json(response);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.deleteProfessorById = deleteProfessorById;
const putProfessorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const putProfessor = req.body;
        const id = req.params.id;
        const response = yield index_dao_1.professorsManager.putById(Number(id), putProfessor);
        res.json(response);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.putProfessorById = putProfessorById;
