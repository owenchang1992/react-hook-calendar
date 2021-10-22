import React from 'react'
import '../styles/Calendar.css'
import { CURRENT_MONTH, SELECTEDDAY, TODAY } from '../constant'
import { findTag } from '../utils'

const CalendarDays = ({ days, selectDay }) => {
  if (!days) return null;

  const getClass = (day) => {
    if (findTag(day, SELECTEDDAY)) return 'selected-item'
    if (findTag(day, TODAY)) return 'today'
    if (!findTag(day, CURRENT_MONTH)) return 'not-current-month'
  }

  console.log(days);

  return (
    <div className="row">
      {
        days.map((day, index) => (
          <div
            key={`${day.tags[0]} ${day.title}`}
            className={`item ${getClass(day)}`}
            onClick={() => selectDay(day, index)}
          >
            {day.title}
          </div>
        ))
      }
    </div>
  )
}

export default CalendarDays;
