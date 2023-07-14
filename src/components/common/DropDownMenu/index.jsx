import React from 'react'
import './style.css'

function DropDownMenu(props) {
  return (
    <div className='usr-dropdown-menu'>
      {props.children}
    </div>
  )
}

export default DropDownMenu;
