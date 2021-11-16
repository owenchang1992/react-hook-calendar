import React from 'react'
import style from '../../styles/Calendar.css'
import { CURRENT_MONTH, SELECTEDDAY, TODAY } from '../../constant'
import { findTag } from '../../utils'

const CalendarDays = ({ getDays, onDateSelected }) => {
  const getClass = (day) => {
    if (findTag(day, SELECTEDDAY)) return style.selectedItem
    if (findTag(day, TODAY)) return style.today
    if (!findTag(day, CURRENT_MONTH)) return style.notCurrentTarget
    return ''
  }

  return (
    <div className={style.row}>
      {
        getDays().map((day) => (
          <div
            key={`${day.tags[0]} ${day.title}`}
            className={`${style.item} ${getClass(day)}`}
            onClick={() => onDateSelected(day)}
          >
            {day.title}
          </div>
        ))
      }
    </div>
  )
}

export default CalendarDays
