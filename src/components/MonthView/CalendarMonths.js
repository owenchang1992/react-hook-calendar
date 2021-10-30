import React from 'react'
import style from '../../styles/Calendar.css'

import { monthTitles } from '../../constant'

const CalendarMonths = ({ month, onMonthSelected }) => {
  const getClass = (index) => {
    return month === index ? style.selectedItem : ''
  }

  return (
    <div className={style.row}>
      {
        monthTitles.map((title, index) => <div
          key={title}
          className={`${style.monthItem} ${getClass(index)}`}
          onClick={() => onMonthSelected(index)}
        >{title}</div>)
      }
    </div>
  )
}

export default CalendarMonths
