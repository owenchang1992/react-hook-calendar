import React from 'react'

import CalendarHeader from './CalendarHeader'
import CalendarYears from './CalendarYears'

import { SELECT_MONTH, DATE_VIEW } from '../constant'

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
    let firstYear = focusYear.toString().substring(0, 3) + 0
    let lastYear = focusYear.toString().substring(0, 3) + 9

    return `${firstYear}-${lastYear}`
  }

  return  (
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
}

export default YearView