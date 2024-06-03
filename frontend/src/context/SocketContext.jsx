import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
		if (authUser) {
      const socket = io("http://localhost:3000",{
        query : {
          userId : authUser._id,
        }
      })
        setSocket(socket);
      

			// socket.on() is used to listen to the events. can be used both on client and server side
			socket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authUser]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};



// import io from "socket.io-client";
// import React, {  createContext, useState, useEffect } from 'react'
// import { useAuthContext } from "./AuthContext";

// const SocketContext = createContext()

//   export const SocketContextProvider = ({Children}) => {

//     const [onlineUsers, setOnlineUsers] = useState();
//     const [socket, setSocket] = useState()
//     const { authUser } = useAuthContext();

//     useEffect(() => {
//       if(authUser)
//         {
//             const socket = io("http://localhost:3000")
//             setSocket(socket);

//             return () => {
//               socket.close() }
//             }else {
//                 if(socket)
//                     {
//                         socket.close()
//                         setSocket(null)
//                     }
//       }
//     }, [])
    
//     return  <SocketContext.Provider value={{socket,onlineUsers}}> {Children} </SocketContext.Provider >
// }

// export default SocketContext