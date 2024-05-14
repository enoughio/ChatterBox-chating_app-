import express from "express";
import jwt from 'jsonwebtoken';
import User from "../model/user.model.js";


const protectRoute = async (req, res, next) => {
    console.log(1);
    
    try {
        const token = req.cookies.jwt;

        if(!token)
            {
                res.status(401).json({
                    error : "unauthorised user ,  no  token provided",
                })
            }
        
        const decoded = jwt.verify(token, process.env.SECRET);

        if(!decoded)
            {
                res.status(401).json({
                    error : "unauthorised user ,  invalid token",
                })
            }
        
        const user = await User.findById(decoded.Userid).select("-password");

        if(!user)
            {
                res.status(404).json({
                    error : "user not found ",
                })
            }

        req.user = user;

        next()
        
    } catch (error) {
        console.log("error in protect middelware", error.message)
        res.status(500).json({
            error : "internal server error",
        })
    }

}


export default protectRoute;