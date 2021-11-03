import React, { useState, useCallback, useRef, useEffect } from 'react'

import useCalendar from '../costomHook/useCalendar'

import DatePicker from './DatePicker'
import DateView from './DateView/DateView'
import MonthView from './MonthView/MonthView'
import YearView from './YearView/YearView'

import { DATE_VIEW, MONTH_VIEW, YEAR_VIEW } from '../constant'

import style from '../styles/Calendar.css'

const Calendar = () => {
  const {
    getDays,
    calendar: {
      selectedDate,
      displayDate: {
        year,
        month,
        decadeCounter,
      }
    },
    dispatchCalendar,
  } = useCalendar()

  const [view, setView] = useState(null)

  const getView = (view) => {
    switch (view) {
      case DATE_VIEW:
        return (
          <DateView
            getDays={getDays}
            month={month}
            year={year}
            dispatchCalendar={dispatchCalendar}
            setView={setView}
          />
        )
      case MONTH_VIEW: 
        return (
          <MonthView 
            year={year}
            month={month}
            dispatchCalendar={dispatchCalendar}
            setView={setView}
          />
        )
      case YEAR_VIEW: 
        return (
          <YearView
            year={year}
            decadeCounter={decadeCounter}
            dispatchCalendar={dispatchCalendar}
            setView={setView}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={style.normalContainer}>
      <DatePicker
        selectedDate={selectedDate}
        setView={setView}
        dispatchCalendar={dispatchCalendar}
      />
      { getView(view) }
    </div>
  )
}

export default Calendar