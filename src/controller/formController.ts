import { Request, Response } from "express";
class formController {
    public cargarIndex(req: Request, res: Response) {
        res.render("form")
    }

    public procesarFormulario(req: Request, res: Response) {
        let data = req.body
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

export default new formController();