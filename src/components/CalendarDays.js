import React from 'react'
import '../styles/Calendar.css'
import { CURRENT_MONTH } from '../constant'

const CalendarDays = ({ days }) => {
  if (!days) return null;

  const getColor = (day) => 
    day.tags.findIndex((tag) => tag === CURRENT_MONTH) === -1 ? 'not-current-month' : ''

  return (
    <div className="row">
      {
        days.map((day) => (
          <div
            key={`${day.tags[0]} ${day.title}`}
            className={`item ${getColor(day)}`}
          >
            {day.title}
          </div>
        ))
      }
    </div>
  )
}

export default CalendarDays;
