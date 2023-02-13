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
): void => {
  if (typeof document === `undefined`) return

  const elements = document.getElementsByClassName(className)

  while (elements.length > 0) {
    const element = elements[0]
    element.parentNode.removeChild(element)
  }
}

/*
  Window object doesn't exist outside of the window!
*/
export const getDocumentHeight = (): number | null => {
  if (typeof document === `undefined`) return null

  const body = document.body
  const html = document.documentElement

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  )
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
  classList: string[]
): string => {
  return classList.join(' ')
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
  const months: string[] = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const datetime: Date = new Date(date)

  let formatted_date: string = `${months[datetime.getMonth()]} ${datetime.getDate()}, ${datetime.getFullYear()}`

  if (formatted_date === 'undefined NaN, NaN') formatted_date = date

  return formatted_date
}
