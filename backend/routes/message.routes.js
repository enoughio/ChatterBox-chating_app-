import expres from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middelware/protect.route.js";


const routes =  expres.Router();


routes.post("/send/:id", sendMessage);



export default routes;