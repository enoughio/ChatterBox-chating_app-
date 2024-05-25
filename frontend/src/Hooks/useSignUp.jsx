import React, { useState } from 'react'
import { toast} from "react-hot-toast"

const useSignUp = () => {
 
  const [loading, setLoading ] = useState(false);
  
  const SignUp = async ({fullName, username, password, confirmPassword, gender }) => {

    const success = handleErrorInput({fullName, username, password, confirmPassword, gender});

    if(!success)
      return;

    try {
       const res = await fetch ("http://localhost:3000/api/auth/signup")

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
    

  }


}

export default useSignUp;



function handleErrorInput({fullName, username, password, confirmPassword, gender}) {
    if( !fullName || !username || !password  || !confirmPassword || !gender )
      {
        toast.error("Please fill all the fields");
        return false;
      }

    if( password != confirmPassword )
      {
        toast.error("Password do not match")
        return false;
      }

    if( password.length < 6)
      {
        toast.error("password must be atleast of 6 character");
        return false;
      }

      return true;

}