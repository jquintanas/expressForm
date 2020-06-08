import { Request, Response } from "express";
class formController {
    public cargarIndex(req: Request, res: Response){
        res.render("form")
    }

    public procesarFormulario(req:Request, res: Response){
        let data = req.body
        res.json(data);
    }
    
}

export default new formController();