import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import connectToMongodb from "./bd/connectToMongodb.js";
import authroutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import usersRoutes from './routes/user.route.js'
import { app, server } from "./socket/socket.js"

dotenv.config();

const port = process.env.PORT || 5000;

app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authroutes)  // authentication routes
app.use("/api/message", messageRoutes)  //message routes 
app.use("/api/users", usersRoutes); // users for side bar


app.get("/", (req, res) => {
    console.log("working")
    res.send("hello world");
})


server.listen(port, async () => {
    await connectToMongodb();
    console.log(`http://localhost:${port}/`);
})

