"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorsManager = void 0;
const SQLManagerWithActive_1 = require("../manager/SQLManagerWithActive");
class ProfessorsManager extends SQLManagerWithActive_1.SQLManagerWithActive {
    constructor(options, tableName) {
        super(options, tableName);
    }
}
exports.ProfessorsManager = ProfessorsManager;
