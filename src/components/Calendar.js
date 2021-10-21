import React from 'react'
import '../styles/Calendar.css'
import CalenderHeader from './CalendarHeader'
import WeekTitles from './WeekTitles'
import useCalendar from '../costomHook/useCalendar'

const Calendar = () => {
  const {
    year,
    month,
    monthForward,
    monthBackward,
  }  = useCalendar();

  return (
    <div className="calendar-container">
      <CalenderHeader
        year={year}
        month={month}
        onBackClick={monthBackward}
        onForwardClick={monthForward}
      />
      <WeekTitles />
    </div>
  )
}

export default Calendar