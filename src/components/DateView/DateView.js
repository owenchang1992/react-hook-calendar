import React from 'react'
import CalendarHeader from '../CalendarHeader'
import WeekTitles from './WeekTitles'
import CalendarDays from './CalendarDays'
import {
  MONTH_VIEW,
  MONTH_FORWARD,
  MONTH_BACKWARD,
  SELECT_DAY,
  monthTitles,
} from '../../constant'
import style from '../../styles/Calendar.css'

const DateView = ({
  days,
  year,
  month,
  setView,
  dispatchCalendar
}) => {
  const getDateViewTitle = (year, month) => {
    return `${monthTitles[month]} ${year}`
  }

  const monthBackward = () => {
    dispatchCalendar({ type: MONTH_BACKWARD })
  }

  const monthForward = () => {
    dispatchCalendar({ type: MONTH_FORWARD })
  }

  const selectDay = (day) => {
    dispatchCalendar({
      type: SELECT_DAY,
      payload: day
    })
  }

  return (
    <div className={`${style.normalContainer} ${style.calendarContainer}`}>
      <CalendarHeader
        title={getDateViewTitle(year, month)}
        onTitleClick={() => setView(MONTH_VIEW)}
        onBackClick={monthBackward}
        onForwardClick={monthForward}
      />
      <WeekTitles />
      <CalendarDays
        days={days}
        onDateSelected={(day) => {
          setView(null)
          selectDay(day)
        }}
      />
    </div>
  )
}

export default DateView