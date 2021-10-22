import React, { useState } from 'react'

import CalenderHeader from './CalendarHeader'
import WeekTitles from './WeekTitles'
import useCalendar from '../costomHook/useCalendar'
import CalendarDays from './CalendarDays'

import { DATE_VIEW } from '../constant'
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
  }  = useCalendar();

  const [view, setView] = useState(DATE_VIEW)

  const getView = (view) => {
    switch (view) {
      default:
        return (
          <>
            <CalenderHeader
              title={getDateViewTitle(year, month)}
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