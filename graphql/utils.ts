import { timeFormat } from 'd3-time-format'

export const formatTimeToDash = timeFormat('%Y-%m-%d')

export const sortByDate = (a: any, b: any) => {
  const dateA = new Date(a.date)
  const dateB = new Date(b.date)
  if (dateA < dateB) return -1
  return 1
}
