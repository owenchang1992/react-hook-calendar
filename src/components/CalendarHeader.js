import React from 'react'
import '../styles/Calendar.css'
import Icon from './Icon'

const CalendarHeader = ({ title, onBackClick, onForwardClick, onTitleClick }) => {
  return (
    <div className="header">
      <Icon
        path={ <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" /> }
        onClick={onBackClick}
      />
      <div className="header-title" onClick={onTitleClick}>{title}</div>
      <Icon 
        path={ <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /> }
        onClick={onForwardClick}
      />
    </div>
  )
}

export default CalendarHeader