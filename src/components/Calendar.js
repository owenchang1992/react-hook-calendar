import React from 'react'
import '../styles/Calendar.css'
import CalenderHeader from './CalendarHeader'

const Calendar = () => {
  const title = "May 2018"

  return (
    <div className="container">
      <CalenderHeader title={title}/>
    </div>
  )
}

export default Calendar