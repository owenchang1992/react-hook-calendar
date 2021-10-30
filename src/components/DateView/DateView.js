import React from 'react'
import CalendarHeader from '../CalendarHeader'
import WeekTitles from './WeekTitles'
import CalendarDays from './CalendarDays'
import { MONTH_VIEW, monthTitles } from '../../constant'
import style from '../../styles/Calendar.css'

const DateView = ({ calendarStore, setView }) => {
  const {
    monthBackward,
    monthForward,
    selectDay,
    days,
    year,
    month,
  } = calendarStore

  const getDateViewTitle = (year, month) => {
    return `${monthTitles[month]} ${year}`
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