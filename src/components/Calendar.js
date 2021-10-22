import React from 'react'
import '../styles/Calendar.css'
import CalenderHeader from './CalendarHeader'
import WeekTitles from './WeekTitles'
import useCalendar from '../costomHook/useCalendar'
import CalendarDays from './CalendarDays'

const Calendar = () => {
  const {
    year,
    month,
    days,
    selectDay,
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
      <CalendarDays
        days={days}
        selectDay={selectDay}
      />
    </div>
  )
}

export default Calendar