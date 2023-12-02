"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConf = void 0;
const path_1 = __importDefault(require("path"));
let filenames = path_1.default.join(__dirname, "../database/db.sqlite");
exports.dbConf = {
    sqlite: {
        client: "sqlite",
        connection: {
            filename: filenames,
        },
    },
};
