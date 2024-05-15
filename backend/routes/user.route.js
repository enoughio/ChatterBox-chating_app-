import express from "express";
import{ getUserForSidePart }from "../controllers/user.controller.js"
import protectRoute from "../middleware/proctect.Routes.js";

const route = express.Router();

route.get("/", protectRoute, getUserForSidePart);


export default route;