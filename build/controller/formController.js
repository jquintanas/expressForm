"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class formController {
    cargarIndex(req, res) {
        res.render("form");
    }
    procesarFormulario(req, res) {
        let data = req.body;
        console.log("Email: " + data.email);
        console.log("Clave: " + data.pass);
        console.log("Ciudad: " + data.ciudad);
        console.log("Color: " + data.optradio);
        if (data.politicas) {
            console.log("Acepto las políticas de uso");
        }
        else {
            console.log("No acepto las políticas de uso");
        }
        res.json(data);
    }
}
exports.default = new formController();
