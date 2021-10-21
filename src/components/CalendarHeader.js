import React from 'react'
import '../styles/Calendar.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const CalenderHeader = ({ title, onBackClick, onForwardClick, onTitleClick }) => {
  return (
    <div className="header">
      <ArrowBackIosIcon onClick={onBackClick}/>
      <h5 onClick={onTitleClick}>{title}</h5>
      <ArrowForwardIosIcon onClick={onForwardClick}/>
    </div>
  )
}

export default CalenderHeader