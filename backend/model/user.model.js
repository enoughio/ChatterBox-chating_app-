import mongoose from "mongoose";


const userschema = new mongoose.Schema({
    
    fullname : {
        type : String,
        require : true,
    },
    username : {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true,
        minlength : 6,
    },
    gender : {
        type : String,
        require : true,
        enum : ["male", "female"],
    },
    profilepicture : {
        type : String,
        default : ""
    }
}, {timestamps : true})

const User = mongoose.model("User", userschema);


export default User;