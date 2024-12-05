import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    senderId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true,
    },
    reciverId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true,
    },
    message : {
        type : String,
        require : true,
    }
},{ timestamps : true });


const message = mongoose.model("message", messageSchema);

export default message;