import React from 'react'
import CalendarHeader from '../CalendarHeader'
import WeekTitles from './WeekTitles'
import CalendarDays from './CalendarDays'
import { SELECT_MONTH, monthTitles } from '../../constant'

const DateView = ({ calendarStore, setView }) => {
  const {
    monthBackward,
    monthForward,
    days,
    selectDay,
    year,
    month,
  } = calendarStore

  const getDateViewTitle = (year, month) => {
    return `${monthTitles[month]} ${year}`
  }

  return (
    <div className="acontainer calendar-container">
      <CalendarHeader
        title={getDateViewTitle(year, month)}
        onTitleClick={() => setView(SELECT_MONTH)}
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