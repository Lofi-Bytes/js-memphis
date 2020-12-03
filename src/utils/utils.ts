/*
  Get a random integer between two input numbers
*/
export function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/*
  Invoke to remove all elements of a given className from the DOM
*/
export function removeElementsByClass(className){
  var elements = document.getElementsByClassName(className);
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
}
/*
  Window object doesn't exist outside of the window!
*/
export function getDocumentHeight() {
  let body = document.body,
      html = document.documentElement
  return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
}
/*
  Window object doesn't exist outside of the window!
*/
export function getWindowInnerWidth() {
  return typeof window !== `undefined` ? window.innerWidth : 0
}
/*
  Utilities for making tailwind classes cleaner to work with
*/
export const formatClassList = (classList:string): string => {
  return classList
    .replace(/\n/g, '')
    .replace(/[\s]+/g, ' ')
    .trim()
}

export const joinStrings = (join: string, ...strings: string[]): string => {
  return strings.join(join)
}
/*
  React Hook Form
*/
export function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
