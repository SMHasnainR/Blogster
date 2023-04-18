import React from 'react'
import './style.css'

function Chip({label, color}) {
  return (
    <p className={`chip ${color}`}>
        {label}
    </p>
  )
}

export default Chip