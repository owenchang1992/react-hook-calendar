import { monthTitles } from './constant'

export const findTag = (day, targetTag) => day.tags.findIndex((tag) => tag === targetTag) > -1

export const getDateViewTitle = (year, month) => {
  return `${monthTitles[month]} ${year}`
}

export const getDecadeTitle = (year, decadeCounter) => {
  const focusYear = year + decadeCounter * 10
  let firstYear = focusYear.toString().substring(0, 3) + 0
  let lastYear = focusYear.toString().substring(0, 3) + 9

  return `${firstYear}-${lastYear}`
}