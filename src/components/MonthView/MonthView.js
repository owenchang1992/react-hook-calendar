import React from 'react'
import CalendarHeader from '../CalendarHeader'
import CalendarMonths from './CalendarMonths'
import {  SELECT_YEAR, DATE_VIEW } from '../../constant'

const MonthView = ({ calendarStore, setView }) => {
  const {
    year,
    yearBackward,
    yearForward,
    month,
    selectMonth,
  } = calendarStore

  return (
    <div className="acontainer calendar-container">
      <CalendarHeader
        title={year}
        onTitleClick={() => setView(SELECT_YEAR)}
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