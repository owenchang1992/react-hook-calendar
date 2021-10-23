import React, { useState } from 'react'

import useCalendar from '../costomHook/useCalendar'

import DatePicker from './DatePicker'
import DateView from './DateView/DateView'
import MonthView from './MonthView/MonthView'
import YearView from './YearView/YearView'

import { DATE_VIEW, MONTH_VIEW, YEAR_VIEW } from '../constant'

import '../styles/Calendar.css'

const Calendar = () => {
  const calendarStore = useCalendar()

  const [view, setView] = useState(null)

  const getView = (view) => {
    switch (view) {
      case DATE_VIEW:
        return <DateView calendarStore={calendarStore} setView={setView}/>
      case MONTH_VIEW: 
        return <MonthView calendarStore={calendarStore} setView={setView}/>
      case YEAR_VIEW: 
        return <YearView calendarStore={calendarStore} setView={setView}/>
      default:
        return null
    }
  }

  return (
    <div className="normal-container">
      <DatePicker calendarStore={calendarStore} setView={setView}/>
      { getView(view) }
    </div>
  )
}

export default Calendar