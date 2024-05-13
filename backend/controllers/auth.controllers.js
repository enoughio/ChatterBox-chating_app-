import bcrypt from "bcryptjs"
import mongoose from "mongoose";

import User from "../model/user.model.js";
import createTokensAndsetCookies from "../utils/generateTokens.js";


export const signup =  async (req, res)=>{
   try {
        console.log("signin route");

        console.log(req.body)
        const { fullname, username, password, confirmPassword, gender} = req.body; 
       
        // console.log({
        //     fullname : req.body.fullname,
        //     fullname : req.body.username,
        //     username : req.body.confirmPassword,
        //     gender : req.body.gender,
        //     profilepicture : req.body.profilepicture,
        // })

        if (password !== confirmPassword ) {
            return res.status(400).json({ error : "password does not match" })
        }

        const user = await User.findOne({username}) //checking for unique username

        if(user)
        {
            console.log("user already exist")
            return  res.status(400).json({error : "user already exist"});
        }
        
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedpassword =  await bcrypt.hash(password, salt);


        //avatar image
        const boyprofilepictur = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlprofilepictur = `https://avatar.iran.liara.run/public/girl?username=${username}`


        // creating new user in database
        const newuser = new User({
            fullname,
            username,
            password : hashedpassword,
            gender,
            profilepicture : gender === "male" ? boyprofilepictur : girlprofilepictur,  
        })

        if (newuser)
            {
                // generrate JWT token
                 createTokensAndsetCookies(newuser.id, res)
                
                // for successful user assignation of new user in database
            await newuser.save(); 
            console.log("new user ccreated")

            res.status(201).json({
                _id: newuser.id,
                fullname : newuser.fullname,
                username : newuser.username,
                profilepicture : newuser.profilepicture,
            })

        } else {
            //user is not created
            res.status(400).json({error: "invalid user data"})
        }

   } catch (error) {

    console.log("error in signup controller", error.message )
    res.status(500).json({error: "internal server error"})

   }
    // res.send("login routes")
}


export const login = async (req, res)=>{
    console.log("login route");
    try {

        const { username, password } = req.body; //get user data

        const user =  await User.findOne({username}); //check if user exist 
        const ispasswordcorrect = await bcrypt.compare(password, user.password || "")  // check if password is true

        if( !user || !ispasswordcorrect )
            {
               return res.status(400).json({error : "incorrect usename or password"})
            }

        console.log(`sucessfully log in user ${user.username}`)
       
        res.status(200).json({
            _id: user._id,
            fullname : user.fullname,
            username : user.username,
            gender : user.gender,
            profilepicture : user.profilepicture,
        })

    } catch (error) {

        console.log("error in login controller", error.message )
        res.status(500).json({error: "internal server error"})  

    }
}

export const logout = async (req, res)=>{
    console.log("logout route");

    try {
        res.cookie('jwt', '' , {maxAge: 0})
        res.status(200).json({message : "loged-out succesfully"})
    } catch (error) {
        console.log("error in logout route" , error.message)
        res.status(500).json({error : "internal server error"})
    }
}
