"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const bodyParser = require("body-parser");
const path = require("path");
const cors_1 = __importDefault(require("cors"));
const formRouter_1 = __importDefault(require("./router/formRouter"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.router();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(cors_1.default());
        //static files
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');
        this.app.use(express_1.default.static(path.join(__dirname, '/public')));
        this.app.use(morgan_1.default("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    router() {
        this.app.use("/form", formRouter_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("server on port: ", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
