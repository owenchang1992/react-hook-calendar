import { useState, useEffect } from 'react'
import { PREVIOUS_MONTH, NEXT_MONTH, CURRENT_MONTH } from '../constant'

const useCalendar = () => {
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const [days, setDays] = useState(null)

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

  const getDays = () => {
    const daysInMonth = 32 - new Date(year, month, 32).getDate()
    const firstDayIndex = new Date(year, month).getDay()
    const firstDayOfList = new Date(year, month, -firstDayIndex).getDate() + 1
    const lastDayIndex = daysInMonth + firstDayIndex - 1
    const newDays = []

    const addDays = (days, initDay, length, options) => {
      const tags = [];
      if (options && options.tag) tags.push(options.tag)

      for(let i=initDay; i < initDay + length; i++) {
        days.push({
          title: i,
          tags
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
  }, [year, month])

  return {
    month,
    year,
    days,
    monthForward,
    monthBackward,
  }
}

export default useCalendar;