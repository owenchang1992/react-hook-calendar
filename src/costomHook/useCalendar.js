import React, { useState } from 'react'

const useCalendar = () => {
  const [today, setToday] = useState(new Date())
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())

  return {
    today,
    month,
    year
  }
}

export default useCalendar;