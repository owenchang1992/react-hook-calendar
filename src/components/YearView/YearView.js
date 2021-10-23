import React from 'react'

import CalendarHeader from '../CalendarHeader'
import CalendarYears from './CalendarYears'

import { MONTH_VIEW, DATE_VIEW } from '../../constant'

import '../../styles/Calendar.css'

const YearView = ({ calendarStore, setView }) => {
  const {
    year,
    selectYear,
    decadeCounter,
    decadeBackward,
    decadeForward
  } = calendarStore

  const getDecadeTitle = (year, decadeCounter) => {
    const focusYear = year + decadeCounter * 10

    const getYear = (year) => {
      let yearString = year.toString()
      return yearString.substring(0, yearString.length - 1)
    }

    let firstYear = getYear(focusYear) + 0
    let lastYear = getYear(focusYear) + 9

    return `${firstYear}-${lastYear}`
  }

  return  (
    <div className="normal-container calendar-container">
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
          setView(MONTH_VIEW)
          selectYear(year)
        }}
      />
    </div>
  )
}

export default YearView