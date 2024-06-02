//complete 
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch("/api/users/");
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setConversations(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations };
};
export default useGetConversations;



// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const useGetConversations = () => {
//     const [loading, setLoading] = useState(false);
//     const [conversations, setConversations] = useState([]);

//     useEffect(() => {
//         const getConversations = async () => {
//             setLoading(true);
//             try {
//                 const res = await fetch("/api/users/"); 
//                 const data = await res.json();
//                 if (data.error) {
//                     throw new Error(data.error);
//                 }
//                 setConversations(data);
//             } catch (error) {
//                 toast.error(error.message);
//                 console.log("Error in useGetConversations:", error);

//             } finally {
//                 setLoading(false);
//             }
//         };

//         getConversations();
//     }, []);

//     return { loading, conversations };
// };
// export default useGetConversations;




// import { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';

// const useGetConversations = () => {
//     const [loading, setLoading] = useState(false);
//     const [conversations, setConversations] = useState([]);

//     useEffect(() => {
//         const getConversations = async () => {
//             setLoading(true);
//             try {
//                 console.log('Fetching conversations...');
//                 const res = await fetch("/api/users/");  // Added await here
//                 // console.log(res);

                
//                 const data = await res.json();
//                 // console.log("data is", data.filteruser);

//                 if (data.error) {
//                     throw new Error(data.error);
//                 }

//                 setConversations(data);
//             } catch (error) {
//                 toast.error(error.message);
//                 console.log("Error in useGetConversations:", error);
//             } finally {
//                 console.log('Fetch complete');
//                 setLoading(false);
//             }
//         };

//         getConversations();
//     }, []);

//     console.log('Returning state');
//     return { loading, conversations };
// };

// export default useGetConversations;


