import React, { useState, useEffect } from 'react'

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

    const addDays = (days, initDay, length) => {
      for(let i=initDay; i < initDay + length; i++) {
        days.push(i)
      }

      return days
    }

    // add days of previous month to newDays
    addDays(newDays, firstDayOfList, firstDayIndex)

    // add days of current month to newDays
    addDays(newDays, 1, daysInMonth)

    // add days of next month to newDays
    addDays(newDays, 1, 41 - lastDayIndex)

    setDays({
      firstDayIndex,
      lastDayIndex,
      dayList: newDays
    })
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