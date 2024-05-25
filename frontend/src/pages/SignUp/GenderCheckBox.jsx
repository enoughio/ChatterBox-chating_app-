import React from 'react';



const GenderCheckBox = ({onCheckBoxChange, selectGender}) => {

  return (
    <div className='flex'>
      <div className='form-control'>
        <label  className={`label gap-2 cursor-pointer ${selectGender == "male" ? "selected" : ''}` }>
          <span className='label-text'>Male</span>
        </label>
        <input id='male' type='checkbox' className='checkbox border-slate-900' 
          checked = { selectGender == "male"}
          onChange={() => onCheckBoxChange("male")}
        />
      </div>
      
 
      <div className='form-control'>
        <label  className={`label gap-2 cursor-pointer ${selectGender == "female" ? "selected" : ''}`}>
          <span className='label-text'>Female</span>
        </label>
        <input id='female' type='checkbox' className='checkbox border-slate-900'
          checked = { selectGender == "female"}
          onChange={() => onCheckBoxChange("female")}
        />
      </div>
    </div>
  );
};


export default GenderCheckBox;