import React from 'react'

function DropDownItem(props) {
  return (
    <div className='user-dropdown-menu'>
      {props.children}
    </div>
  )
}

export default DropDownItem;
