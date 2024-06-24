import { useAuthContext } from "../../context/AuthContext.jsx";
import { extractTime } from "../../utils/extractTime.js";
import useConversation from "../../zustand/useConversations.js";

const Message = ({ message }) => {
	// console.log(message.shouldShake)
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilepicture = fromMe ? authUser.profilepicture : selectedConversation?.profilepicture;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilepicture} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};
export default Message;

// import React from 'react'
// import { useAuthContext } from '../../context/AuthContext'
// import useConversation from '../../zustand/useConversations';


// const Message = ( props ) => {
// 	const { authUser } = useAuthContext();
// 	const { selectedConversation } = useConversation();
// 	const fromMe = props.message.senderId === authUser._id;
// 	// const formattedTime = extractTime(message.createdAt);
// 	const chatClassName = fromMe ? "chat-end" : "chat-start";
// 	// const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
//   const profilepicture = !fromMe ? authUser.profilepicture : selectedConversation?.profilepicture;
// 	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

// 	// const shakeClass = message.shouldShake ? "shake" : "";

// 	return (
//     <div className={`chat ${chatClassName}`}>
//   <div className="chat-image avatar">
//     <div className="w-10 rounded-full">
//       <img alt="Tailwind CSS chat bubble component" src={profilepicture} />
//     </div>
//   </div>
//   <div className={`chat-bubble text-white ${bubbleBgColor}`}>{props.message.message}</div>
//   <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:00</div>
//    </div>
//   );
// };
// export default Message;


// const Message = (props) => {

//    const { authUser } = useAuthContext();
//    const { selectedConversation } = useConversation();  //selectedConversation
//    const forMe = authUser._id === selectedConversation?._id;
//    console.log( authUser, "and" , selectedConversation)
//    const chatClassName = forMe ? "chat-end" : "chat-start";
//    console.log(chatClassName)
// const profilepicture = forMe ? authUser.profilepicture : selectedConversation?.profilepicture;
//    const bubbleBgColor = forMe ? "bg-sky-500" : ""; 
  

//     // console.log(authUser, "and" , selectedConversation)
//     //  console.log(`Message: `, props.message);

  // return (
  //   <div className={`chat ${chatClassName}`}>
  // <div className="chat-image avatar">
  //   <div className="w-10 rounded-full">
  //     <img alt="Tailwind CSS chat bubble component" src={profilepicture} />
  //   </div>
  // </div>
  // <div className={`chat-bubble text-white ${bubbleBgColor}`}>{props.message.message}</div>
  // <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:00</div>
  //  </div>
  // )
// }

// export default Message;

