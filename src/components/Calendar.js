import React, { useState } from 'react'

import CalenderHeader from './CalendarHeader'
import WeekTitles from './WeekTitles'
import useCalendar from '../costomHook/useCalendar'
import CalendarDays from './CalendarDays'

import { DATE_VIEW, SELECT_MONTH } from '../constant'
import { getDateViewTitle } from '../utils'

import '../styles/Calendar.css'

const Calendar = () => {
  const {
    year,
    month,
    days,
    selectDay,
    monthForward,
    monthBackward,
    yearForward,
    yearBackward,
  }  = useCalendar();

  const [view, setView] = useState(DATE_VIEW)

  const getView = (view) => {
    switch (view) {
      case SELECT_MONTH: 
        return (
          <>
            <CalenderHeader
              title={year}
              onTitleClick={() => setView(SELECT_MONTH)}
              onBackClick={yearBackward}
              onForwardClick={yearForward}
            />
          </>
        )         
      default:
        return (
          <>
            <CalenderHeader
              title={getDateViewTitle(year, month)}
              onTitleClick={() => setView(SELECT_MONTH)}
              onBackClick={monthBackward}
              onForwardClick={monthForward}
            />
            <WeekTitles />
            <CalendarDays
              days={days}
              selectDay={selectDay}
            />
          </>
        )
    }
  }

  return (
    <div className="calendar-container">
      { getView(view) }
    </div>
  )
}

export default Calendar