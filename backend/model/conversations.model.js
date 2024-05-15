import mongoose from "mongoose";
import message from "./messege.model.js";

const conversationSchema = mongoose.Schema({

    participants : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],

    messages : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "message",
            default : []
        }
    ]

}, {timestamps : true})

const conversation = mongoose.model("conversation", conversationSchema)

export default conversation;