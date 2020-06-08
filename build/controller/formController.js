"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class formController {
    cargarIndex(req, res) {
        res.render("form");
    }
    procesarFormulario(req, res) {
        let data = req.body;
        res.json(data);
    }
}
exports.default = new formController();
