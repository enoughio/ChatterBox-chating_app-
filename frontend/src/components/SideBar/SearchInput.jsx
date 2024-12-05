import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversations';
import  useGetConversations from '../../Hooks/useGetConversations.js'


const SearchInput = () => {

  const [ search, setSearch ] = useState("")
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversations(); 

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!search) return;
      if(search.length < 3) 
        return toast.error("search input must be atleast 3 letter")

      const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()))

      if(conversation)
        {
          setSelectedConversation(conversation);
          setSearch('');
        }
      else toast.error("No Such User Found")
    }

   

  return (

    <form onSubmit={handleSubmit}  className='flex items-center gap-2'>        
        <input type="text" placeholder='Seacrh' className='input input-bordered rounded-full'  
          value={search}
          onChange={(e) => setSearch(e.target.value) }
        />
       
        <button type="submit"  className='btn btn-circle bg-sky-200 text-white'>
        <FaSearch />
        </button>
    </form>

  );
}

export default SearchInput




// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
// 	return (
// 		<form className='flex items-center gap-2'>
// 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// 				<IoSearchSharp className='w-6 h-6 outline-none' />
// 			</button>
// 		</form>
// 	);
// };
// export default SearchInput;