
import React from 'react';
import PropTypes from 'prop-types';
import './CheckBox.css';


export const CheckBox=({type= 'checkbox',description,checked=false,onChange})=>{
  return(
<label>
  {description}
  <input type="checkbox" 
          className="check-custom" 
          name={description} 
          checked={checked} 
          value={description} 
          onChange={e=>onChange(e)}
    />
  <span className="check-toggle"></span>
</label>
  )
}


CheckBox.propTypes = {
  type: PropTypes.string,
  description: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

