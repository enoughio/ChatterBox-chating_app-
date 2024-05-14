import express from "express";
import mongoose from "mongoose";



export const sendMessage = (req, res ) => {
    console.log ("msesssage  send", req.params.id);
    try {
        // const { messsage } = req.body;
        // const { id } = req.params;
        // const senderId = req.User._id;


        console.log(2)
        
    } catch (error) {
        console.log(error.message);
        
        res.status(500).jso({
            error : "internal server error",
        })
    }
}
