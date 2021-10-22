export const findTag = (day, targetTag) => day.tags.findIndex((tag) => tag === targetTag) > -1

export const getDateViewTitle = (year, month) => {
  const monthTitles = [
    'January',
    'Febrnary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  return `${monthTitles[month]} ${year}`
}