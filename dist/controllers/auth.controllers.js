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
exports.signup = exports.login = void 0;
const index_dao_1 = require("../database/dao/index.dao");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginUser = req.body;
        const foundUser = yield index_dao_1.usersManager.getByUsername(loginUser.username);
        if (!foundUser)
            throw new Error('username not found error');
        if (foundUser.password != loginUser.password)
            throw new Error('credentials error');
        const token = jsonwebtoken_1.default.sign({ username: foundUser.username, role: foundUser.role }, process.env.KEY || 'sdadas');
        res.json({ message: "login successfully", token: token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.login = login;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginUser = req.body;
        const foundUser = yield index_dao_1.usersManager.getByUsername(loginUser.username);
        if (foundUser)
            throw new Error('username already exist error');
        yield index_dao_1.usersManager.save(loginUser);
        // console.log(await usersManager.getAll())
        res.json({ message: "signup successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.signup = signup;
