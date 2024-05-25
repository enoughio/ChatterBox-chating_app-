import mongoose from "mongoose";  
import User from "./user.model.js";
import message from "./message.model.js";

const conversationSchema = new mongoose({
    participants: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],
    messages : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "message",
            default : [], 
        }
    ]
}, {timestamps : true});

const conversation = mongoose.model( "conversation", conversationSchema);

export default conversation;