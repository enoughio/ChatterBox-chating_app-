import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conv'
import Conversations from './Conversations'
// import Conversations from './Conversations.jsx'
import LogOutButton from "./LogOutButton.jsx";

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 " > 

        <SearchInput />
        <div className='divider px-3' ></div>
        
        <Conversations />
        
        < LogOutButton />
        
    </div>
  )
}

export default SideBar






// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;