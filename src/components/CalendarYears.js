import React from 'react'
import '../styles/Calendar.css'

const CalendarYears = ({ year, decadeCounter, onClick }) => {
  const getClass = (title, index) => {
    if (index === 0 || index === 11) return 'not-current-month'
    return year === title ? 'selected-item' : ''
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
    <div className="row">
      {
        getList(year).map((title, index) => <div
          key={title}
          className={`month-item ${getClass(title, index)}`}
          onClick={() => onClick(title)}
        >{title}</div>)
      }
    </div>
  )
}

export default CalendarYears