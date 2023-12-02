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
exports.SQLManager = void 0;
const knex_1 = __importDefault(require("knex"));
class SQLManager {
    constructor(options, tableName) {
        this.tableName = "";
        this.tableName = tableName;
        this.database = (0, knex_1.default)(options);
        this.test();
    }
    test() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.database.from(this.tableName).select("id").limit(1);
            }
            catch (error) {
                throw error;
            }
        });
    }
    save(object) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.database.from(this.tableName).insert(object);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.database.from(this.tableName).select("*");
                const parseResult = result.map((elm) => (Object.assign({}, elm)));
                return parseResult;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.database.from(this.tableName).select("*").where("id", id);
                const parseResult = result.map((elm) => (Object.assign({}, elm)))[0];
                return parseResult;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.database.from(this.tableName).del().where("id", id);
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.database.from(this.tableName).del();
            }
            catch (error) {
                throw error;
            }
        });
    }
    putById(id, object) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.database.from(this.tableName).update(object).where("id", id);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getBy(by, value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.database.from(this.tableName).select("*").where(`${by}`, value);
                const parseResult = result.map((elm) => (Object.assign({}, elm)));
                return parseResult;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.SQLManager = SQLManager;
