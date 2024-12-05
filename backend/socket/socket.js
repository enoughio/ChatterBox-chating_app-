import {Server} from "socket.io";
import http from "http"
import express from "express"
import { Socket } from "dgram";

const app = express()
const server = http.createServer(app);
const io = new Server(server, {
    cors : {
        origin : ["http://localhost:5173"],
        methods : ["GET", "PUT"]
    }
})

const userSocketMap = []; // userId : socketId

export const getReceiverSocketId = (reciverId) => {
    return userSocketMap[reciverId]
}

io.on('connection' , (socket) => {
    console.log("a user connected", socket.id)

    const userId = socket.handshake.query.userId;

    if(userId != "undefined") userSocketMap[userId] = socket.id;
    io.emit("getOnlineUsers", Object.keys(userSocketMap))  //it is used to send an event to all connected users

    socket.on("disconnected", ()=>{
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId];xx
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})


export { app, server, io };