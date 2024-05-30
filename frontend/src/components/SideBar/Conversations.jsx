import useGetConversations from '../../Hooks/useGetConversations.js'
import Conversation from './Conv.jsx'
import React from 'react'


const Conversations = () => {

const {loading, conversations} = useGetConversations();
console.log("CONVER", conversations);

  return (
    <div className='py-0 flex flex-col overflow-auto'>
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
  
   </div>
  )
}

export default Conversations




// import Conversation from "./Conversation";

// const Conversations = () => {
// 	return (
// 		<div className='py-2 flex flex-col overflow-auto'>
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 		</div>
// 	);
// };
// export default Conversations;