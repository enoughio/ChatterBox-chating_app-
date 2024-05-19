import React from 'react'

const SearchInput = () => {
  return (

    <form className='flex items-center gap-2 '>        
        <input type="text" placeholder='Seacrh' className='input input-bordered rounded-full'  />
       
        <button type="submit"  className='btn btn-circle bg-sky-200 text-white'>
            icon
        </button>
    </form>

  );
}

export default SearchInput