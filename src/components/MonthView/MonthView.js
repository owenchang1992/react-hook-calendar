import React from 'react'
import CalendarHeader from '../CalendarHeader'
import CalendarMonths from './CalendarMonths'
import {  YEAR_VIEW, DATE_VIEW } from '../../constant'
import '../../styles/Calendar.css'

const MonthView = ({ calendarStore, setView }) => {
  const {
    year,
    yearBackward,
    yearForward,
    month,
    selectMonth,
  } = calendarStore

  return (
    <div className="normal-container calendar-container">
      <CalendarHeader
        title={year}
        onTitleClick={() => setView(YEAR_VIEW)}
        onBackClick={yearBackward}
        onForwardClick={yearForward}
      />
      <CalendarMonths
        month={month}
        onMonthSelected={(month) => {
          setView(DATE_VIEW)
          selectMonth(month)
        }}
      />
    </div>
  )
}

export default MonthView