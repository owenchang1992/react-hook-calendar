import { useState, useEffect } from 'react'
import { PREVIOUS_MONTH, NEXT_MONTH, CURRENT_MONTH, SELECTEDDAY } from '../constant'
import { findTag } from '../utils'

const useCalendar = () => {
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const [days, setDays] = useState(null)
  const [selectedDay, setSelectedDay] = useState();

  const monthForward = () => {
    if (month === 11) {
      setMonth(0)
      setYear(year + 1)

      return
    }

    setMonth(month + 1)
  }

  const monthBackward = () => {
    if (month === 0) {
      setMonth(11)
      setYear(year - 1)

      return
    }

    setMonth(month - 1)
  }

  const selectDay = (day, index) => {
    const updateSelectedDay = (day) => {
      // create new date object
      if (findTag(day, CURRENT_MONTH)) {
        setSelectedDay(new Date(year, month, day.title))
      }
    }

    updateSelectedDay(day, index)
  }

  const getDays = () => {
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
    const addSelectedTag = (tags, day) => {
      if (selectedDay && day.getTime() === selectedDay.getTime()) return [...tags, SELECTEDDAY]
      return tags
    }

    // Add tag PREVIOUS_MONTH, NEXT_MONTH, CURRENT_MONTH
    const addOptionTag = (options) => {
      if (options && options.tag) return [options.tag]
    }

    const addDays = (days, initDay, length, options) => {
      let tags = addOptionTag(options)

      for(let i=initDay; i < initDay + length; i++) {
        let newTag = tags
        if (options.tag === CURRENT_MONTH) {
          newTag = addSelectedTag(
            newTag,
            new Date(year, month, i)
          )
        }

        days.push({
          title: i,
          tags: newTag,
        })
      }

      return days
    }

    // add days of previous month to newDays
    addDays(newDays, firstDayOfList, firstDayIndex, { tag: PREVIOUS_MONTH })

    // add days of current month to newDays
    addDays(newDays, 1, daysInMonth, { tag: CURRENT_MONTH } )

    // add days of next month to newDays
    addDays(newDays, 1, 41 - lastDayIndex, { tag: NEXT_MONTH })

    setDays(newDays)
  }

  useEffect(() => {
    getDays()
  }, [year, month, selectedDay])

  return {
    month,
    year,
    days,
    selectDay,
    monthForward,
    monthBackward,
  }
}

export default useCalendar;