import useConversation from "../../zustand/useConversations";
import { useSocketContext } from "../../context/SocketContext.jsx";


const Conversation = ({ conversation, lastId, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	// console.log(selectedConversation);
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id)
	
	const isSelected = selectedConversation?._id === conversation._id;

	return (
		<>
			<div
				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
				onClick={() => setSelectedConversation(conversation) } // Fix: Pass a function reference
			>
				<div className={`avatar ${ isOnline ? "online" : "" } `}>
					<div className='w-12 rounded-full'>
						<img
							src={conversation.profilepicture}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation.fullname}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastId && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};

export default Conversation;




// import React from 'react'

// const Conversation = ({ conversation, lastIdx, emoji }) => {
//   return (
//     <>
//       <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//         <div className='avatar online'>
//           <div className='w-12 rounded-full'>
//             <img
//               src={conversation.profilepicture}
//               alt='user avatar'
//             />
//           </div>
//         </div>

//         <div className='flex flex-col flex-1'>
//           <div className='flex gap-3 justify-between'>
//             <p className='font-bold text-gray-200'>{conversation.fullname}</p>
//             <span className='text-xl'>{emoji}</span>
//           </div>
//         </div>
//       </div>

//       {!lastIdx && <div className='divider my-0 py-0 h-1' />}
//     </>
//   );
// };


