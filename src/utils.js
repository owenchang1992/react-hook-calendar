export const findTag = (day, targetTag) => day.tags.findIndex((tag) => tag === targetTag) > -1

export const date2ISOString = (date) => {
  const tzOffset = new Date().getTimezoneOffset() * 60000

  return new Date(date.getTime() - tzOffset).toISOString()
}