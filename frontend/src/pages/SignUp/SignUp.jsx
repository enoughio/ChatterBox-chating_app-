import toast from 'react-hot-toast';
import { useState } from 'react';
import GenderCheckBox from "./GenderCheckBox.jsx"
import { Link } from 'react-router-dom';
import useSignUp from '../../Hooks/useSignUp.js';



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
      console.log(inputs)
  }


 return (
  
    <div className='flex flex-col items-center justify-center max-w-auto min-w-96' >
    <div className="h-full p-6 w-full bg-blue-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100" >

        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form onSubmit={ handleSubmit} >

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='Harry Potter' className='w-full input input-borderd h-10' 
                value={inputs.fullName}
                onChange={ (e) => setInputs({...inputs, fullName : e.target.value })}
                />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>UserName</span>
            </label>
            <input type='text' placeholder='harrypotter' className='w-full input input-borderd h-10 '
             value={inputs.username}
             onChange={ (e) => { console.log(inputs.gender)
              setInputs({...inputs, username : e.target.value })}}
              />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-borderd h-10 ' 
             value={inputs.password }
             onChange={ (e) => setInputs({...inputs, password : e.target.value })}/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>ConfirmPassword</span>
            </label>
            <input type='password' placeholder='Confirm password' className='w-full input input-borderd h-10' 
                value={inputs.confirmPasssword}
                onChange={ (e) => setInputs({...inputs, confirmPassword : e.target.value })}/>
          </div>

          {/* {//grndet chaeckbox} */}
          
          <GenderCheckBox className="p-2" onCheckBoxChange={handleCheckBoxChange} selectGender={inputs.gender} />
          
          <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block p-2' > Already have an account </Link>
          
          <button type='submit' className='btn btn-block btn-sm mt-2'> SignUp  </button>
        </form>
    </div>
  </div>
  );
}

export default SignUp;


//  <div className='flex flex-col items-center justify-center max-w-auto min-w-96' >
//       <div className="h-full p-6 w-full bg-blue-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100" >

//           <h1 className='text-3xl font-semibold text-center text-gray-300'
// >
//             Login
//             <span className='text-blue-500'> ChatApp</span>
//           </h1>

//           <form action="./submit">
//             <div>
//               <label className='label p-2'>
//                 <span className='text-base label-text'>UserName</span>
//               </label>
//               <input type='text' placeholder='Enter Name' className='w-full input input-borderd h-10 ' ></input>
//             </div>
//             <div>
//             <label className='label p-2'>
//                 <span className='text-base label-text'>Password</span>
//               </label>
//               <input type='passwword' placeholder='Enter Password' className='w-full input input-borderd h-10 ' ></input>
//             </div>
            
//             <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block p-2' > Don't have an account</a>
            
//             <button className='btn btn-block btn-sm mt-2' >Login</button>
//           </form>
//       </div>
//     </div>