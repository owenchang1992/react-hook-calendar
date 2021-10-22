import { monthTitles } from './constant'

export const findTag = (day, targetTag) => day.tags.findIndex((tag) => tag === targetTag) > -1

export const getDateViewTitle = (year, month) => {
  return `${monthTitles[month]} ${year}`
}

export const getDecadeTitle = (year) => {
  let firstYear = year.toString().substring(0, 3) + 0
  let lastYear = year.toString().substring(0, 3) + 9

  return `${firstYear}-${lastYear}`
}