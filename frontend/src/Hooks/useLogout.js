import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";


const useLogout =  () => {

    const { setAuthUser } = useAuthContext()
    const [loading, setLoading]= useState(false);

    const logout = async() => {

        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
            });
            
            const data = res.json()
            
            if(data.error)
                throw new Error(data.error)
            
        setAuthUser(null);
        localStorage.removeItem("user-info");

        } catch (error) {
            console.log("got error in useLogout: ", error)
            toast.error(error)
            
        } finally {
            setLoading(false)
        }
    }

        return { loading, logout}
    }

export default useLogout;