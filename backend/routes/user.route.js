import express from "express";
import{ getUserForSidebar }from "../controllers/user.controller.js"
import protectRoute from "../middleware/proctect.Routes.js";

const route = express.Router();

route.get("/", protectRoute, getUserForSidebar);


export default route;