import React from 'react'
import '../styles/Calendar.css'

const Icon = ({path, onClick}) => (
  <svg 
    className="icon"
    viewBox="0 0 24 24"
    onClick={onClick}
  >
    {path}
  </svg>
)

export default Icon;