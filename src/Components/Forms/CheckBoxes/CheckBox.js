
import React from 'react';
import PropTypes from 'prop-types';

export const CheckBox = ({ type = 'checkbox', description, checked = false, onChange }) => (
    <input 
        type={type} 
        name={description} 
        checked={checked} 
        value={description}
        onChange={(e)=>onChange(e)} 
    />
);

CheckBox.propTypes = {
  type: PropTypes.string,
  description: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

