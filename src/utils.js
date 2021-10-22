import { monthTitles } from './constant'

export const findTag = (day, targetTag) => day.tags.findIndex((tag) => tag === targetTag) > -1

export const getDateViewTitle = (year, month) => {
  return `${monthTitles[month]} ${year}`
}