import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (username, password) => {
		const success = handleInputErrors(username, password);
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch( "/api/auth/login", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password})
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}











// import  { useState } from 'react'
// import toast from 'react-hot-toast';
// import {useAuthContext} from '../context/AuthContext.jsx'

// const useLogin = () => {

//     const [loading, setLoading] = useState(false);
//     const { setAuthUser } = useAuthContext()


//     const login = async ( username, password ) => {
        
//         // console.log("USE: ", username, "password", password);
//         const success = handleInputErrors({ username, password });
// 		if (!success) return;

//         setLoading(true)
//         try {
//             const res = await fetch( "/api/auth/login", {
//                 method: "PUT",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ username, password})
//             });

//             const data = await res.json();            

//         if(data.error){
//             throw new Error(data.error);
//         }
//         console.log("useLogin", data)

// 			setAuthUser(data);
// 			localStorage.setItem("user-info", JSON.stringify(data));
// 			toast("succesfully signup");
 
//         } catch (error) {
//             console.log(error)
//             toast.error(error)
//         } finally {
//             setLoading(false);
//         }
//     }
    
//     return { login, loading }
// }

// export default useLogin;



// function handleInputErrors({ username, password }) {
// 	if ( !username || !password ) {
// 		toast.error("Please fill in all fields");
//     console.log("Please fill all the fields")
// 		return false;
// 	}
 
// 	return true;
// }