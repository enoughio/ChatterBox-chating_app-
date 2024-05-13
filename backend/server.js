
import express from "express";
import dotenv from "dotenv";
import  bodyParser  from "body-parser";

import connectToMongodb from "./bd/connectToMongodb.js";
import authroutes from "./routes/auth.route.js"
import messageRoute from "./routes/message.route.js";

dotenv.config();

const port = process.env.PORT || 5000; 
const app = express();


// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use("/api/auth", authroutes)  // authentication routes
app.use("/api/message", messageRoute)

app.get("/" , (req,res)=>{
    console.log("working")
    res.send("hello world");
})



app.listen(port, ()=>{
    connectToMongodb();
    console.log(`ont the go ${port}`);
})

