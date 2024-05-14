import express from "express";
import dotenv from "dotenv";
import  bodyParser  from "body-parser";
import cookieParser from "cookie-parser";

import connectToMongodb from "./bd/connectToMongodb.js";
import authroutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.routes.js";


dotenv.config();

const port = process.env.PORT || 5000; 
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authroutes)  // authentication routes
app.use("/api/message", messageRoutes)  //message routes 

app.get("/" , (req,res)=>{
    console.log("working")
    res.send("hello world");
})



app.listen(port, ()=>{
    connectToMongodb();
    console.log(`ont the go ${port}`);
})

