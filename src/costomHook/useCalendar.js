import { useReducer, useEffect, useState } from 'react'
import calendarReducer from './calendarReducer'

import {
  MONTH_FORWARD,
  MONTH_BACKWARD,
  YEAR_FORWARD,
  YEAR_BACKWARD,
  DECADE_FORWARD,
  DECADE_BACKWARD,
  SELECT_DAY,
  SELECT_DATE,
  SELECT_MONTH,
  SELECT_YEAR,
  PREVIOUS_MONTH,
  NEXT_MONTH,
  CURRENT_MONTH,
  SELECTEDDAY,
  TODAY,
} from '../constant'

const INITIAL_DATE = {
  displayDate: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    decadeCounter: 0
  },
  selectedDate: new Date(),
}

const useCalendar = () => {
  const [calendar, dispatchCalendar] = useReducer(calendarReducer, INITIAL_DATE)
  const [days, setDays] = useState([])

  const monthForward = () => {
    dispatchCalendar({
      type: MONTH_FORWARD
    })
  }

  const monthBackward = () => {
    dispatchCalendar({
      type: MONTH_BACKWARD
    })
  }

  const yearForward = () => {
    dispatchCalendar({
      type: YEAR_FORWARD
    })
  }
  
  const yearBackward = () => {
    dispatchCalendar({
      type: YEAR_BACKWARD
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

  const selectDay = (day) => {
    dispatchCalendar({
      type: SELECT_DAY,
      payload: day
    })
  }

  const selectDate = (date) => {
    dispatchCalendar({
      type: SELECT_DATE,
      payload: date
    })
  }

  const selectMonth = (month) => {
    dispatchCalendar({
      type: SELECT_MONTH,
      payload: month
    })
  }

  const selectYear = (year) => {
    dispatchCalendar({
      type: SELECT_YEAR,
      payload: year
    })
  }

  const getDays = (calendar) => {
    const { year, month} = calendar?.displayDate
    // calculate days in current mouth
    const daysInMonth = 32 - new Date(year, month, 32).getDate()

    // calculate the index of the first day of the current month
    const firstDayIndex = new Date(year, month).getDay()

    // calculate the value of index 0 of day list
    const firstDayOfList = new Date(year, month, -firstDayIndex).getDate() + 1

    // calculate the index of the last day of current month
    const lastDayIndex = daysInMonth + firstDayIndex - 1
    const newDays = []

    // Add Selected tag for selected day
    const addSelectedTag = (tags, options) => {
      if (
        calendar.selectedDate
        && options.monthState === CURRENT_MONTH
        && options.date.getTime() === new Date(calendar.selectedDate.getTime()).setHours(0, 0, 0, 0)
      ) return [...tags, SELECTEDDAY]
      return tags
    }

    // Add tag PREVIOUS_MONTH, NEXT_MONTH, CURRENT_MONTH
    const addMonthTag = (tags, options) => {
      if (options?.monthState) return [...tags, options.monthState]
      return tags
    }

    // Add Today tag
    const addCurrentDayTag = (tags, options) => {
      if (
        options.date.getTime() === new Date().setHours(0, 0, 0, 0)
        && options.monthState === CURRENT_MONTH
      ) return [...tags, TODAY]
      return tags
    }

    const addDays = (days, initDay, length, options) => {
      const addTags = (options) => {
        const precesses = [
          addMonthTag,
          addSelectedTag,
          addCurrentDayTag
        ]

        return precesses.reduce((acc, currentStep) => {
          return currentStep(acc, options)
        }, [])
      }

      for(let i=initDay; i < initDay + length; i++) {
        days.push({
          title: i,
          tags: addTags({
            ...options,
            date: new Date(year, month, i)
          }),
        })
      }

      return days
    }

    // add days of previous month to newDays
    addDays(newDays, firstDayOfList, firstDayIndex, { monthState: PREVIOUS_MONTH })

    // add days of current month to newDays
    addDays(newDays, 1, daysInMonth, { monthState: CURRENT_MONTH } )

    // add days of next month to newDays
    addDays(newDays, 1, 41 - lastDayIndex, { monthState: NEXT_MONTH })

    setDays(newDays)
  }

  useEffect(() => {
    getDays(calendar)
  }, [calendar])

  return {
    days,
    selectedDate: calendar.selectedDate,
    selectDate,
    selectDay,
    year: calendar.displayDate.year,
    yearForward,
    yearBackward,
    selectYear,
    month: calendar.displayDate.month,
    monthForward,
    monthBackward,
    selectMonth,
    decadeCounter: calendar.displayDate.decadeCounter,
    decadeForward,
    decadeBackward,
  }
}

export default useCalendar