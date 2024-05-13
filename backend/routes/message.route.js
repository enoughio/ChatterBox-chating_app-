import express from "express";
import proctectRoute from "../middleware/proctect.Routes.js";
import sendMessage from "../controllers/message.controller.js";

const routes = express.Router();

routes.post("/send/:id", proctectRoute, sendMessage);

export default routes;