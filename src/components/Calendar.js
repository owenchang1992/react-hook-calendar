import React, { useState } from 'react'

import CalendarHeader from './CalendarHeader'
import WeekTitles from './WeekTitles'
import useCalendar from '../costomHook/useCalendar'
import CalendarDays from './CalendarDays'
import CalendarMonths from './CalendarMonths'
import CalendarYears from './CalendarYears'
import DatePicker from './DatePicker'

import { DATE_VIEW, SELECT_MONTH, SELECT_YEAR } from '../constant'
import { getDateViewTitle, getDecadeTitle } from '../utils'

import '../styles/Calendar.css'

const Calendar = () => {
  const {
    days,
    selectedDay,
    selectDay,
    year,
    yearForward,
    yearBackward,
    selectYear,
    month,
    monthForward,
    monthBackward,
    selectMonth,
    decadeCounter,
    decadeForward,
    decadeBackward,
    setSelectedDay,
  }  = useCalendar();

  const [view, setView] = useState(null)

  const getView = (view) => {
    switch (view) {
      case DATE_VIEW:
        return (
          <>
            <CalendarHeader
              title={getDateViewTitle(year, month)}
              onTitleClick={() => setView(SELECT_MONTH)}
              onBackClick={monthBackward}
              onForwardClick={monthForward}
            />
            <WeekTitles />
            <CalendarDays
              days={days}
              selectDay={(day) => {
                setView(null)
                selectDay(day)
              }}
            />
          </>
        )
      case SELECT_MONTH: 
        return (
          <>
            <CalendarHeader
              title={year}
              onTitleClick={() => setView(SELECT_YEAR)}
              onBackClick={yearBackward}
              onForwardClick={yearForward}
            />
            <CalendarMonths
              month={month}
              onClick={(month) => {
                setView(DATE_VIEW)
                selectMonth(month)
              }}
            />
          </>
        )
      case SELECT_YEAR: 
        return (
          <>
            <CalendarHeader
              title={`${getDecadeTitle(year, decadeCounter)}`}
              onTitleClick={() => setView(DATE_VIEW)}
              onBackClick={decadeBackward}
              onForwardClick={decadeForward}
            />
            <CalendarYears
              year={year}
              decadeCounter={decadeCounter}
              onClick={(year) => {
                setView(SELECT_MONTH)
                selectYear(year)
              }}
            />
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="calendar-container">
      <DatePicker
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        onInputClick={() => setView(DATE_VIEW)}
      />
      { getView(view) }
    </div>
  )
}

export default Calendar