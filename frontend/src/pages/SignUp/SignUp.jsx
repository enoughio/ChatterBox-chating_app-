import toast from 'react-hot-toast';
import { useState } from 'react';
import GenderCheckBox from "./GenderCheckBox.jsx"
import { Link } from 'react-router-dom';
import useSignUp from '../../Hooks/useSignUp';



const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName : '',
    username : '',
    password : '',
    confirmPassword : '',
    gender : ''
  })

  const { loading, signup } = useSignUp();

  const handleCheckBoxChange = (gender) => {
    setInputs({...inputs, gender});
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    await signup(inputs)
  }


 return (
  
    <div className='flex flex-col items-center justify-center max-w-auto min-w-96' >
    <div className="h-full p-6 w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100" >

        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp 
          <span className='text-blue-500'> ChitChat</span>
        </h1>

        <form onSubmit={ handleSubmit} >

          <div>
            <label className='label p-2'>
              <span className='text-black label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='Name' className='w-full input input-borderd h-10' 
                value={inputs.fullName}
                onChange={ (e) => setInputs({...inputs, fullName : e.target.value })}
                />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-black label-text'>UserName</span>
            </label>
            <input type='text' placeholder='Username' className='w-full input input-borderd h-10 '
             value={inputs.username}
             onChange={ (e) => {
              setInputs({...inputs, username : e.target.value })}}
              />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-black label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-borderd h-10 ' 
             value={inputs.password }
             onChange={ (e) => setInputs({...inputs, password : e.target.value })}/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-black label-text'>ConfirmPassword</span>
            </label>
            <input type='password' placeholder='Confirm password' className='w-full input input-borderd h-10' 
                value={inputs.confirmPassword}
                onChange={ (e) => setInputs({...inputs, confirmPassword : e.target.value })}/>
          </div>

          {/* {//grndet chaeckbox} */}
          
          <GenderCheckBox className="text-black p-2" onCheckBoxChange={handleCheckBoxChange} selectGender={inputs.gender} />
          
          <Link to={"/login"} className='text-sm hover:underline text-black hover:text-black-600 mt-2 inline-block p-2' > Already have an account </Link>
          
          <button type='submit' className='btn btn-block btn-sm mt-2' disabled={loading}> 
            { loading ? (<span className=' loading loading-spinner' ></span>) : "Sign Up"}

            </button>
        </form>
    </div>
  </div>
  );
}

export default SignUp;

