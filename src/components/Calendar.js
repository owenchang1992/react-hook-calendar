import React from 'react'
import '../styles/Calendar.css'
import CalenderHeader from './CalendarHeader'
import WeekTitles from './WeekTitles'

const Calendar = () => {
  const title = "May 2018"

  return (
    <div className="calendar-container">
      <CalenderHeader title={title}/>
      <WeekTitles />
    </div>
  )
}

export default Calendar