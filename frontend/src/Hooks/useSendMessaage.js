import { useState } from "react";
import useConversation from "../zustand/useConversations.js";
import toast from "react-hot-toast";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	const sendMessage = async (message) => {
		setLoading(true);
		try {
				// console.log("message to send is", message);
	
				const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
					method : "POST",
					headers : {
						'Content-Type' : 'application/json'
					},
					body: JSON.stringify({message})
				})
			const data = await res.json();
			if (data.error) throw new Error(data.error);

			setMessages([...messages, data]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;










// import { useState } from "react";
// import useConversation from "../zustand/useConversations.js";
// import toast from "react-hot-toast";

// const useSendMessaage = () => {
	
// 	const [ loading , setLoading ] = useState(false);
// 	const {selectedConversation, messages, setMessages} = useConversation()
	
// 	const sendMessage = async (message)=>{
		
// 		setLoading(true);
// 		try {
// 			console.log("message to send is", message);

// 			const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
// 				method : "POST",
// 				headers : {
// 					'Content-Type' : 'application/json'
// 				},
// 				body: JSON.stringify({message})
// 			})

// 		// const data = await res.json();

// 			if(data.error)
// 				throw new Error(data.error);

// 			console.log("Before", data)

// 			setMessages([...messages, data])

// 			console.log("after", messages)


// 		} catch (error) {
// 			toast.error(error.message)
// 			console.log("error in useSendMessages", error)
// 		} finally {
// 			setLoading(false);
// 		}
// 	}
// 	return { sendMessage, loading};
// }

// export default useSendMessaage;





// // const useSendMessage = () => {
// // 	const [loading, setLoading] = useState(false);
// // 	const { messages, setMessages, selectedConversation } = useConversation();
// // 	// messages = messages.message;//convering messaages from object to array data type
	 
// // 	const sendMessage = async (message) => {
// // 		setLoading(true);
// // 		try {
// // 			const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
// // 				method: "POST",
// // 				headers: {
// // 					"Content-Type": "application/json",
// // 				},
// // 				body: JSON.stringify( {message} ),
// // 			})

			
// // 			const data = await res.json();
// // 			console.log(data)
// // 			if (data.error) throw new Error(data.error);

// // 			setMessages([...messages, data]);
// // 		} catch (error) {
// // 			// console.log(error)
// // 			toast.error(error.message);
// // 		} finally {
// // 			setLoading(false);
// // 		}
// // 	};

// // 	return { sendMessage, loading };
// // };

// // export default useSendMessage;






// // import React, { useState } from 'react'
// // import useConversation from '../zustand/useConversations'
// // import toast from 'react-hot-toast'
