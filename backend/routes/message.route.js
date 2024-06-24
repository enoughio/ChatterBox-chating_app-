import express from "express";
import proctectRoute from "../middleware/proctect.Routes.js";
import { sendMessage, getMessages } from "../controllers/message.controller.js";

const routes = express.Router();

routes.get("/:id", proctectRoute, getMessages);
routes.post("/send/:id", proctectRoute, sendMessage);

export default routes;