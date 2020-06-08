"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formController_1 = __importDefault(require("./../controller/formController"));
class routerLogin {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.[post]
        this.router.get("/", formController_1.default.cargarIndex);
        this.router.post("/", formController_1.default.procesarFormulario);
    }
}
exports.default = new routerLogin().router;
