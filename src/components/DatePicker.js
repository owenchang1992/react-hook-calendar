import React, { useState, useEffect } from 'react'
import Icon from './Icon'
import { date2ISOString } from '../utils'

const DatePicker = ({ selectedDay, onIconClick, setSelectedDay }) => {
  const [inputString, setInputString] = useState(date2ISOString(selectedDay))

  useEffect(() => {
    const input = document.getElementById('dateInput')
    const checkDate = (e) => {
      if (e.code === 'Enter') {
        const isValidDate = (date) => {
          return date instanceof Date && !isNaN(date)
        }

        const [year, month, day] = inputString.split('-')

        const newDate = new Date(year, month - 1, day)

        if (isValidDate(newDate)) {
          setSelectedDay(newDate)
        }
      }
    }

    input.addEventListener('keyup', checkDate)

    return () => input.removeEventListener('keyup', checkDate)
  }, [inputString])

  useEffect(() => {
    setInputString(date2ISOString(selectedDay))
  }, [selectedDay])

  return (
    <div className="date-picker-title">
      <Icon
        path={ 
          <path
            className="date-picker-icon"
            d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" 
          /> 
        }
        onClick={onIconClick}
      />
      <input
        id="dateInput"
        className="input"
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />
    </div>
  )
}

export default DatePicker