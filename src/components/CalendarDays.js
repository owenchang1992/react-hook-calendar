import React from 'react'
import '../styles/Calendar.css'

const CalendarDays = ({ days }) => {
  if (!days) return null;

  return (
    <div className="row">
      {
        days.dayList.map((day) => (
          <div className="item">
            {day}
          </div>
        ))
      }
    </div>
  )
}

export default CalendarDays;
