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
  NEXT_MONTH
} from '../constant'

import { findTag } from '../utils';

const monthForward = (state) => {
  const { year, month } = state?.displayDate

  if (month === 11) {
    return {
      ...state.displayDate,
      year: year + 1,
      month: 0
    }
  }

  return {
    ...state.displayDate,
    month: month + 1
  }
}

const monthBackward = (state) => {
  const { year, month } = state?.displayDate

  if (month === 0) {
    return {
      ...state.displayDate,
      year: year - 1,
      month: 11
    }
  }

  return {
    ...state.displayDate,
    month: month - 1
  }
}

const yearForward = (state) => ({
  ...state.displayDate,
  year: state.displayDate.year + 1
})

const yearBackward = (state) => ({
  ...state.displayDate,
  year: state.displayDate.year - 1
})

const decadeForward = (state) => ({
  ...state.displayDate,
  decadeCounter: state.displayDate.decadeCounter + 1
})

const decadeBackward = (state) => ({
  ...state.displayDate,
  decadeCounter: state.displayDate.decadeCounter - 1
})

const selectDay = (state, day) => {
  let { month: selectedMonth, year } = state.displayDate

  if (findTag(day, PREVIOUS_MONTH)) selectedMonth = month - 1
  else if (findTag(day, NEXT_MONTH)) selectedMonth = month + 1

  return {
    ...state,
    selectedDate: new Date(year, selectedMonth, day.title)
  }
}

const selectDate = (state, date) => ({
  displayDate: {
    ...state.displayDate,
    year: date.getFullYear(),
    month: date.getMonth(),
  },
  selectedDate: date,
})

const selectMonth = (state, month) => ({
  ...state.displayDate,
  month,
})

const selectYear = (state, year) => ({
  ...state.displayDate,
  year,
})

const calendarReducer = (state, action) => {
  switch(action.type) {
    case MONTH_FORWARD:
      return {
        ...state,
        displayDate: monthForward(state),
      }
    case MONTH_BACKWARD:
      return {
        ...state,
        displayDate: monthBackward(state),
      }
    case YEAR_FORWARD:
      return {
        ...state,
        displayDate: yearForward(state),
      }
    case YEAR_BACKWARD:
      return {
        ...state,
        displayDate: yearBackward(state),
      }
    case DECADE_FORWARD:
      return {
        ...state,
        displayDate: decadeForward(state),
      }
    case DECADE_BACKWARD:
      return {
        ...state,
        displayDate: decadeBackward(state),
      }
    case SELECT_DAY:
      return selectDay(state, action.payload)
    case SELECT_DATE:
      return selectDate(state, action.payload)
    case SELECT_MONTH:
      return {
        ...state,
        displayDate: selectMonth(state, action.payload),
      }
    case SELECT_YEAR:
      return {
        ...state,
        displayDate: selectYear(state, action.payload),
      }
    default:
      console.log('invalid event')
      return state
  }
}

export default calendarReducer