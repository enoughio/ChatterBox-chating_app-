import express from "express";
import{ getUsersForSidebar }from "../controllers/user.controller.js"
import protectRoute from "../middleware/proctect.Routes.js";

const route = express.Router();

route.get("/", protectRoute, getUsersForSidebar);


export default route;