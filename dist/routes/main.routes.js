"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
const students_routes_1 = __importDefault(require("./api/students.routes"));
const courses_routes_1 = __importDefault(require("./api/courses.routes"));
const auth_routes_1 = __importDefault(require("./api/auth.routes"));
const professor_routes_1 = __importDefault(require("./api/professor.routes"));
const mainRouter = (0, express_1.Router)();
exports.mainRouter = mainRouter;
mainRouter.use('/api/students', students_routes_1.default);
mainRouter.use('/api/courses', courses_routes_1.default);
mainRouter.use('/api/auth', auth_routes_1.default);
mainRouter.use('/api/professors', professor_routes_1.default);
