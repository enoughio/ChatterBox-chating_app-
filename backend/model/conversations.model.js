import mongoose from "mongoose";
import message from "./messege.model";

const conversationSchema = mongoose.Schema({

    participants : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],

    message : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "message",
            default : []
        }
    ]

}, {timestamps : true})

const conversation = mongoose.model("conversation", conversationSchema)

export default conversation;