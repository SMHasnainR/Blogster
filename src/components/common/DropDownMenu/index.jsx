import React from 'react'

function DropDownMenu(props) {
  return (
    <div className='user-dropdown-menu'>
      {props.children}
    </div>
  )
}

export default DropDownMenu;
