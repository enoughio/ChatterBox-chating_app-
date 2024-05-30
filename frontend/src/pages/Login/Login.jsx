import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../Hooks/useLogin.js';

const Login = () => {

  const {loading, login } = useLogin();

  const [username, setUsername ]   = useState("")
  const [password, setPassword ]   = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(username, password);

  }

  return (
    <div className='flex flex-col items-center justify-center max-w-auto min-w-96' >
      <div className="h-full p-6 w-full bg-blue-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100" >

          <h1 className='text-3xl font-semibold text-center text-gray-300'
>
            Login
            <span className='text-blue-500'> ChatApp</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>UserName</span>
              </label>
              <input type='text' placeholder='Enter Name' className='w-full input input-borderd h-10 '
                value={username}
                onChange={(e)=> setUsername(e.target.value) }
              ></input>
            </div>
            <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input type='password' placeholder='Enter Password' className='w-full input input-borderd h-10 ' 

                value={password}
                onChange={(e)=> setPassword(e.target.value) }
              ></input>
            </div>
            
            <Link to={"/signup"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block p-2' > Don't have an account</Link>
            
            <button className='btn btn-block btn-sm mt-2' 
              disabled={loading}
            >
              {!loading ? "Login" : <span className=' loading loading-spinner' ></span>}
              </button>
          </form>
      </div>
    </div>
  );
}

export default Login



// <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg" >
// <div />