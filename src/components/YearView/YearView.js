import React from 'react'

import CalendarHeader from '../CalendarHeader'
import CalendarYears from './CalendarYears'

import {
  MONTH_VIEW,
  DATE_VIEW,
  SELECT_YEAR,
  DECADE_FORWARD,
  DECADE_BACKWARD,
} from '../../constant'

import style from '../../styles/Calendar.css'

const YearView = ({ variable, setView, dispatchCalendar }) => {
  const {
    year,
    decadeCounter,
  } = variable

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

  const selectYear = (year) => {
    dispatchCalendar({
      type: SELECT_YEAR,
      payload: year
    })
  }

  const decadeForward = () => {
    dispatchCalendar({
      type: DECADE_FORWARD
    })
  }


  const decadeBackward = () => {
    dispatchCalendar({
      type: DECADE_BACKWARD
    })
  }

  return  (
    <div className={`${style.normalContainer} ${style.calendarContainer}`}>
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