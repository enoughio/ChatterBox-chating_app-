import React from 'react'
import SearchInput from './SearchInput'
// import Conversations from './Conversations.jsx'
// import LogOutButton from "./LogOutButton.jsx";

const SideBar = () => {
  return (
    <div>

        <SearchInput />
        <div className='divider px-3 ' ></div>
        
        {/* <Conversations />
        <LogOutButton />  */}
        
    </div>
  )
}

export default SideBar