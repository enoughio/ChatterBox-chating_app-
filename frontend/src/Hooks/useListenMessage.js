import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversations'
import Notification from '../assets/sounds/f.mp3'

const useListenMessage = () => {
 
    const {socket} = useSocketContext()
    const {messages, setMessages} = useConversation()

    useEffect(() => {
      socket?.on("newMessage", (newMessage) => {
        newMessage.shouldShake = true;
        const sound = new Audio(Notification)
        sound.play()
        setMessages([...messages, newMessage])
      })
    
      return () => {
        socket?.off("newMessage")
      }
    }, [socket, setMessages, messages])
}

export default useListenMessage