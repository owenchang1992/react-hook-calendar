import React from 'react'
import style from '../styles/Calendar.css'

const Icon = ({path, onClick}) => (
  <svg
    className={style.icon}
    viewBox="0 0 24 24"
    onClick={onClick}
  >
    {path}
  </svg>
)

export default Icon