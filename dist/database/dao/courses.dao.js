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
exports.CoursesManager = void 0;
const SQLManagerWithActive_1 = require("../manager/SQLManagerWithActive");
class CoursesManager extends SQLManagerWithActive_1.SQLManagerWithActive {
    constructor(options, tableName) {
        super(options, tableName);
    }
    getWithProfessors() {
        return __awaiter(this, void 0, void 0, function* () {
            // return await this.database.from(this.tableName).select('*').innerJoin('professors','professors.id',`${this.tableName}.professorId`)
            try {
                return yield this.database.from(this.tableName).select(`${this.tableName}.* `, "professors.name AS professorName ", "professors.surname AS professorSurname ").innerJoin('professors', 'professors.id', `${this.tableName}.professorId`)
                    .where(`${this.tableName}.active`, true).where(`professors.active`, true);
            }
            catch (error) {
                //@ts-ignore
                console.log(error.message);
                throw error;
            }
        });
    }
}
exports.CoursesManager = CoursesManager;
