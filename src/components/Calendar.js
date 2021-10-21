import React from 'react'
import '../styles/Calendar.css'
import CalenderHeader from './CalendarHeader'
import WeekTitles from './WeekTitles'
import useCalendar from '../costomHook/useCalendar'

const Calendar = () => {
  const { year, month }  = useCalendar();

  return (
    <div className="calendar-container">
      <CalenderHeader year={year} month={month}/>
      <WeekTitles />
    </div>
  )
}

export default Calendar