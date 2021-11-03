import React from 'react'
import CalendarHeader from '../CalendarHeader'
import CalendarMonths from './CalendarMonths'
import {
  YEAR_VIEW,
  DATE_VIEW,
  YEAR_FORWARD,
  YEAR_BACKWARD,
  SELECT_MONTH,
} from '../../constant'
import style from '../../styles/Calendar.css'

const MonthView = ({
  year,
  month,
  setView,
  dispatchCalendar
}) => {
  const yearBackward = () => {
    dispatchCalendar({ type: YEAR_BACKWARD })
  }

  const yearForward = () => {
    dispatchCalendar({ type: YEAR_FORWARD })
  }

  const selectMonth = (month) => {
    dispatchCalendar({
      type: SELECT_MONTH,
      payload: month
    })
  }

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