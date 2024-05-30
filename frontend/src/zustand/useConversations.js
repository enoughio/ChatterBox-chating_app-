import { set } from "mongoose"
import { create } from "zustand"

 const useConversations = create((set) => ({
    
    selectedConversations : null,
    setSelectedConversations : (selectedConversations) => set({selectedConversations}),
    message : [],
    setMessage : (message) => set({message})
 }))


 export default useConversations;