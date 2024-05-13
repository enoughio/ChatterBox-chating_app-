import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";

const routes = express.Router()


// main  auth routes 
routes.put("/login", login)

routes.put("/signup", signup)

routes.put("/logout", logout)


export default routes;