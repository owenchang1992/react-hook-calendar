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
    selectedDate,
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
    setSelectedDate,
  }  = useCalendar();

  const [view, setView] = useState(null)

  const getView = (view) => {
    switch (view) {
      case DATE_VIEW:
        return (
          <div className="acontainer calendar-container">
            <CalendarHeader
              title={getDateViewTitle(year, month)}
              onTitleClick={() => setView(SELECT_MONTH)}
              onBackClick={monthBackward}
              onForwardClick={monthForward}
            />
            <WeekTitles />
            <CalendarDays
              days={days}
              onDateSelected={(day) => {
                setView(null)
                selectDay(day)
              }}
            />
          </div>
        )
      case SELECT_MONTH: 
        return (
          <div className="acontainer calendar-container">
            <CalendarHeader
              title={year}
              onTitleClick={() => setView(SELECT_YEAR)}
              onBackClick={yearBackward}
              onForwardClick={yearForward}
            />
            <CalendarMonths
              month={month}
              onMonthSelected={(month) => {
                setView(DATE_VIEW)
                selectMonth(month)
              }}
            />
          </div>
        )
      case SELECT_YEAR: 
        return (
          <div className="acontainer calendar-container">
            <CalendarHeader
              title={`${getDecadeTitle(year, decadeCounter)}`}
              onTitleClick={() => setView(DATE_VIEW)}
              onBackClick={decadeBackward}
              onForwardClick={decadeForward}
            />
            <CalendarYears
              year={year}
              decadeCounter={decadeCounter}
              onYearSelected={(year) => {
                setView(SELECT_MONTH)
                selectYear(year)
              }}
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="acontainer">
      <DatePicker
        selectedDate={selectedDate}
        onDateComfirm={(date) => {
          setView(null)
          setSelectedDate(date)}
        }
        onInputClick={() => setView(DATE_VIEW)}
      />
      { getView(view) }
    </div>
  )
}

export default Calendar