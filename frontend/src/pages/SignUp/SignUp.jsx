import React from 'react'
import GenderCheckBox from "./GenderCheckBox.jsx"


const SignUp = () => {
  return (
   
    <div className='flex flex-col items-center justify-center max-w-auto min-w-96' >
    <div className="h-full p-6 w-full bg-blue-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100" >

        <h1 className='text-3xl font-semibold text-center text-gray-300'
>
          Login
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form action="./submit">
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='Harry Potter' className='w-full input input-borderd h-10 ' ></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>UserName</span>
            </label>
            <input type='text' placeholder='harrypotter' className='w-full input input-borderd h-10 ' ></input>
          </div>

          <div>
          <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='passwword' placeholder='Enter Password' className='w-full input input-borderd h-10 ' ></input>
          </div>

          <div>
          <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='passwword' placeholder='Confirm password' className='w-full input input-borderd h-10' ></input>
          </div>

          {/* {//grndet chaeckbox} */}
          <GenderCheckBox className="p-2" />
          
          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block p-2' > Already have an account</a>
          
          <button className='btn btn-block btn-sm mt-2'> SignUp </button>
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