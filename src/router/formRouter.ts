import { Router } from "express";
import formController from "./../controller/formController"
class routerLogin {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        //this.router.[post]
        this.router.get("/" ,formController.cargarIndex);
        this.router.post("/", formController.procesarFormulario);
      }
}
export default new routerLogin().router