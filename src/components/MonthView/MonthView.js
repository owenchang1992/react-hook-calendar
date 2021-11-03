import React from 'react'
import CalendarHeader from '../CalendarHeader'
import CalendarMonths from './CalendarMonths'
import { YEAR_VIEW, DATE_VIEW } from '../../constant'
import style from '../../styles/Calendar.css'

const MonthView = ({ variable, setView }) => {
  const {
    year,
    yearBackward,
    yearForward,
    month,
    selectMonth,
  } = variable

  return (
    <div className={`${style.normalContainer} ${style.calendarContainer}`}>
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