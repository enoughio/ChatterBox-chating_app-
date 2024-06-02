import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
		const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/signup", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullname : fullName, username, password, confirmPassword, gender }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			
			// console.log("in useSignUp" ,data)

			setAuthUser(data);
			localStorage.setItem("user-info", JSON.stringify(data));
			toast("succesfully signup")
			// context
			

		} catch (error) {
			toast.error(error.message);
		} finally { 
			setLoading(false);
		}

	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
	if (!fullName || !username || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
    console.log("Please fill all the fields")
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
    console.log("Password do not match")
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
    console.log("password must be atleast of 6 character")

		return false;
	}

	return true;
}