import Message from "../model/messege.model.js";
import conversations from "../model/conversations.model.js";

const sendMessage = async (req, res)=> {
    console.log("message send");
    // res.send("message")

    try {
        const {message} = req.body;
        console.log(1)
        const { id: reciverId } = req.params
         const senderId = req.user._id;

        console.log(senderId)

        let conversation = await conversations.findOne({ 
            participants : { $all : [senderId, reciverId]}
        })

        if(!conversation)
            {
                conversation = await conversations.create({
                    participants : [senderId, reciverId],
                })
            }
        
        const newMessage = await new Message({
            senderId,
            reciverId,
            message,
        })

        if(newMessage)
            {
                conversation.content.push(newMessage._id)
            }

        res.status(201).json({ newMessage });


    } catch (error) {
        console.log("error in message controller route sendMessage", error.message)
        res.status(500).json({
            error : "innternal server error"
        })
    }

}

export default sendMessage;