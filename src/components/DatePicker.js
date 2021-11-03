import React, { useState, useEffect, memo } from 'react'
import Icon from './Icon'
import { DATE_VIEW } from '../constant'
import { date2ISOString } from '../utils'
import style from '../styles/Calendar.css'

const DatePicker = memo(({ selectedDate, selectDate, setView }) => {
  const getTitle = (date) => date2ISOString(date).substring(0, 10)

  const [inputString, setInputString] = useState(getTitle(selectedDate))

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
            setView(null)
            selectDate(newDate)
        }
      }
    }

    input.addEventListener('keyup', checkDate)

    return () => input.removeEventListener('keyup', checkDate)
  }, [inputString])

  useEffect(() => {
    setInputString(getTitle(selectedDate))
  }, [selectedDate])

  return (
    <div 
      className={style.datePickerTitle}
      onClick={() => setView(DATE_VIEW)}
    >
      <Icon
        path={ 
          <path
            className={style.datePickerIcon}
            d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" 
          />
        }
      />
      <input
        id="dateInput"
        className={style.input}
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />
    </div>
  )
})

export default DatePicker