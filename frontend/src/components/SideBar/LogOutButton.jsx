import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../Hooks/useLogout';

const LogOutButton = () => {

  const { loading, logout} =  useLogout();

  return (
    <div className='mt-auto'>
      { !loading ? (<BiLogOut onClick={logout} className='h-6 w-6 text-white cursor-pointer' />) : (<span className=' loading loading-spinner' ></span>)}
    </div>
  )
}

export default LogOutButton