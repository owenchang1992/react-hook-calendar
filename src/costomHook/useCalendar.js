import { useReducer, useEffect, useState, useCallback } from 'react'
import calendarReducer from './calendarReducer'

import {
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

  const getDays = () => {
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

    return newDays
  }

  return {
    getDays,
    calendar,
    dispatchCalendar,
  }
}

export default useCalendar