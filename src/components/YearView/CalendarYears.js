import React from 'react'
import style from '../../styles/Calendar.css'

const CalendarYears = ({ year, decadeCounter, onYearSelected }) => {
  const getClass = (title, index) => {
    if (index === 0 || index === 11) return style.notCurrentTarget
    return year === title ? style.selectedItem : ''
  }

  const getList = (year) => {
    let yearList = []
    const focusYear = year + decadeCounter * 10
  
    let firstYear = parseInt(focusYear.toString().substring(0, 3) + 0, 10)
    if (isNaN(firstYear)) return yearList;

    for (let i=firstYear - 1; i < firstYear + 11; i++) {
      yearList.push(i)
    }

    return yearList
  }

  return (
    <div className={style.row}>
      {
        getList(year).map((title, index) => <div
          key={title}
          className={`${style.monthItem} ${getClass(title, index)}`}
          onClick={() => onYearSelected(title)}
        >{title}</div>)
      }
    </div>
  )
}

export default CalendarYears