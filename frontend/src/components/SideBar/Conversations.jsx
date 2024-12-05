//complete
import useGetConversations from "../../Hooks/useGetConversations.js";
import { getRandomEmoji } from "../../utils/getEmojis.js"
import Conversation from "./Conv.jsx";


const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};


export default Conversations






// import useGetConversations from '../../Hooks/useGetConversations.js'
// import Conversation from './Conv.jsx'
// import React from 'react'
// import getEmoji from "../../utils/getEmojis.js"
// // import fs from "fs"



// const Conversations = () => {

//   const {loading, conversations} = useGetConversations();

//   // console.log("call from 1", conversations[0])
  
// // const content = conversations;
// // fs.writeFile('conversations.txt', content, err => {
// //   if (err) {
// //     console.error(err);
// //   } else {
// //     console.log("file was written");
// //   }
// // });

  
//   return (
//     <div className='py-0 flex flex-col overflow-auto'>
    
//       {loading ? <span className='loading loading-spinner ' ></span> : null }

//     { conversations.map((conversation, index) => (
//          <Conversation 
//             key={conversation._id}
//             conversation={conversation}
//             // emoji={getEmoji()}
//             lastIdx={index === conversations.length - 1}
//             // fullname={conversation.fullname}
//           />
//       ))}
  
//    </div>
//   )
// }





// // import Conversation from "./Conversation";

// // const Conversations = () => {
// // 	return (
// // 		<div className='py-2 flex flex-col overflow-auto'>
// // 			<Conversation />
// // 			<Conversation />
// // 			<Conversation />
// // 			<Conversation />
// // 			<Conversation />
// // 			<Conversation />
// // 		</div>
// // 	);
// // };
// // export default Conversations;