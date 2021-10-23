import React from 'react'
import '../../styles/Calendar.css'

import { monthTitles } from '../../constant'

const CalendarMonths = ({ month, onMonthSelected }) => {
  const getClass = (index) => {
    return month === index ? 'selected-item' : ''
  }

  return (
    <div className="row">
      {
        monthTitles.map((title, index) => <div
          key={title}
          className={`month-item ${getClass(index)}`}
          onClick={() => onMonthSelected(index)}
        >{title}</div>)
      }
    </div>
  )
}

export default CalendarMonths
