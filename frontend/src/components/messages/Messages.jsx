import { useEffect, useRef } from "react";
import useGetMessages from "../../Hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import Message from "./Message";
// import useListenMessages from "../../Hooks/useListenMessages.js";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	// useListenMessages();
	// const lastMessageRef = useRef();

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
	// 	}, 100);
	// }, [messages]);

/*
ref={lastMessageRef}>
*/

	let count = 0;
	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (count++,
					<div key={count}  >
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;

// STARTER CODE SNIPPET
// import Message from "./Message";

// const Messages = () => {
// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 		</div>
// 	);
// };
// export default Messages;



// import React from 'react';
// import Message from './Message.jsx';
// import useGetMessages from "../../Hooks/useGetMessages.js";
// import MessageSkeleton from '../skeleton/MessageSkeleton.jsx';

// // import { useEffect, useRef } from "react";
// // import useGetMessages from "../../hooks/useGetMessages";
// // import MessageSkeleton from "../skeletons/MessageSkeleton";
// // import Message from "./Message";
// // import useListenMessages from "../../hooks/useListenMessages";

// const Messages = () => {
// 	const { messages, loading } = useGetMessages();
// 	// useListenMessages();
// 	// const lastMessageRef = useRef();

// 	// useEffect(() => {
// 	// 	setTimeout(() => {
// 	// 		lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
// 	// 	}, 100);
// 	// }, [messages]);
//   let count = 0;



// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// 			{!loading &&
// 				messages.length > 0 && 
// 				messages.map((message) => ( ++count,
// 					<div key={count} >  
// 						<Message message={message} />
// 					</div>
// 				))}

// 			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
// 			{!loading && messages.length === 0 && (
// 				<p className='text-center'>Send a message to start the conversation</p>
// 			)}
// 		</div>
// 	);
// };
// export default Messages;


// // const Messages = () => {
// //   const { loading, messages } = useGetMessages();
// //   // messages = messages.message;
// //   console.log("messages:",  messages);

// //   return (
// //     <div className='p-4 flex-1 overflow-auto'>
// //       {!loading && messages.length > 0 && messages.map((msg) => ( ++count,
// //         <Message key={count} message={msg} />
// //       ))}

// //       {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

// //       {!loading && messages.length === 0 && (
// //         <p className='text-center'>Send a message to start the conversation</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default Messages;
