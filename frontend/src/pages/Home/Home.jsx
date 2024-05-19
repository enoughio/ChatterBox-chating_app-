import React from 'react'
import SideBar from '../../components/SideBar/SideBar';

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' > 
      
      <SideBar />
      <h1 >Hello</h1>
      {/* <MessageContainer /> */}

    </div>
  )
}

export default Home;