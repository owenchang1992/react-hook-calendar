import React from 'react'
import '../styles/Calendar.css'
import { findTag } from '../utils'

const CalendarDays = ({ days }) => {
  if (!days) return null;

  const getClass = (day) => {
    if (!findTag(day, CURRENT_MONTH)) return 'not-current-month'
  }

  return (
    <div className="row">
      {
        days.map((day) => (
          <div
            key={`${day.tags[0]} ${day.title}`}
            className={`item ${getClass(day)}`}
          >
            {day.title}
          </div>
        ))
      }
    </div>
  )
}

export default CalendarDays;
