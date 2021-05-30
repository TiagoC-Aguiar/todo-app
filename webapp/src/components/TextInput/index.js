import React from 'react';

const TextInput = ({ type = 'text', placeholder, value, change, required = false, focus = false }) => {
  return <input 
          type={type} 
          placeholder={placeholder}  
          value={value}
          onChange={change}          
          required={required}
          autoFocus={focus}
        />
};

export default TextInput;
