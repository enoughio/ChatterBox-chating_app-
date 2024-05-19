import React from 'react';

const GenderCheckBox = () => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label htmlFor='male' className='label gap-2 cursor-pointer'>
          <span className='label-text'>Male</span>
        </label>
        <input id='male' type='checkbox' className='checkbox border-slate-900' />
      </div>

      <div className='form-control'>
        <label htmlFor='female' className='label gap-2 cursor-pointer'>
          <span className='label-text'>Female</span>
        </label>
        <input id='female' type='checkbox' className='checkbox border-slate-900' />
      </div>
    </div>
  );
};

export default GenderCheckBox;
