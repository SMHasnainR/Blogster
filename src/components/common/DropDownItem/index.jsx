import React from 'react'
import './style.css';

function DropDownItem(props) {
  
  return (
    <div className='dropdown-item' onClick={props.func}>
      {props.children}
    </div>
  )
}

export default DropDownItem;
