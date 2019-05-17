
import React from 'react';
import PropTypes from 'prop-types';
import EldersignSvg from '../../DashBoard/SVGs/EldersignSvg';
import './CheckBox.css';

const animateElder = {
  animation: 'dash 2.5s linear forwards'
}

const removeElder={
  animation:'remove 2.5s linear forwards'
}

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
  <span className="check-toggle"><EldersignSvg style={ checked ? animateElder:removeElder}width={'15px'} height={'15px'} /></span>
</label>
  )
}

// export const CheckBox = ({ type = 'checkbox', description, checked = false, onChange }) => (
//     <input 
//         type={type} 
//         name={description} 
//         checked={checked} 
//         value={description}
//         onChange={(e)=>onChange(e)} 
//     />
// );

CheckBox.propTypes = {
  type: PropTypes.string,
  description: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

