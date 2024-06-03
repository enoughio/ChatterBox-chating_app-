import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversations.js";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {

				const res = await fetch(`/api/message/${selectedConversation._id}`)
				            const data = await res.json();
				
				            if(data.error) throw new Error(data.error);
				            setMessages(data);

			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;





// import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast';
// import useConversation from '../zustand/useConversations';


// const useGetMessages = () => {

//     const [loading, setLoading] = useState(false);
//     const {messages, setMessages, selectedConversation} = useConversation();
// //   console.log("messaages 2 : ", messages);


//     useEffect(() => {
      
//     const getMessages = async () => {
//         console.log("called");
//         setLoading(true)
        
//         try {
//             const res = await fetch(`/api/message/${selectedConversation._id}`)
//             const data = await res.json();

//             if(data.error) throw new Error(data.error);
//             setMessages(data);

//         } catch (error) {
//             console.log('error in useGetmessage' ,error )
//             toast.error("error")
//         } finally {
//             setLoading(false)
//         }
//     }

//     if(selectedConversation?._id) getMessages()
      
//     }, [selectedConversation?._id, setMessages])

//     return { loading, messages };

// }

// export default useGetMessages