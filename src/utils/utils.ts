/*
  Get a random integer between two input numbers
*/
export const randomIntFromInterval = (
  min: number,
  max: number
): number => { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
/*
  Invoke to remove all elements of a given className from the DOM
*/
export const removeElementsByClass = (
  className: string
): any => {
  let elements
  typeof document !== `undefined`
    ? elements = document.getElementsByClassName(className)
    : null

  while(elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0])
  }
}
/*
  Window object doesn't exist outside of the window!
*/
export const getDocumentHeight = (): number | null => {
  let body
  typeof document !== `undefined`
    ? body = document.body
    : null

  let html
  typeof document !== `undefined`
    ? html = document.documentElement
    : null

  return typeof document !== `undefined`
    ? Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
    : null
}
/*
  Window object doesn't exist outside of the window!
*/
export const getWindowInnerWidth = (): number => {
  return typeof window !== `undefined`
    ? window.innerWidth
    : 0
}
/*
  Utilities for making tailwind classes cleaner to work with
*/
export const formatClassList = (
  classList: string
): string => {
  return classList
        .replace(/\n/g, '')
        .replace(/[\s]+/g, ' ')
        .trim()
}

export const joinStrings = (
  join: string,
  ...strings: string[]
): string => {
  return strings.join(join)
}
/*
  React Hook Form
*/
export const encode = (
  data: any
): any => {
  return Object.keys(data)
    .map((key) =>
      encodeURIComponent(key) +
      '=' +
      encodeURIComponent(data[key])
    ).join('&')
}

/*
  Format the date
*/
export const formatDate = (date: string) => {
  const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const datetime: Date = new Date(date)
  const formatted_date: string = `${months[datetime.getMonth()]} ${datetime.getDate()}, ${datetime.getFullYear()}`

  return formatted_date
}
