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
export function getWindowInnerHeight() {
  return typeof window !== `undefined` ? window.innerHeight : 0
}
/*
  Window object doesn't exist outside of the window!
*/
export function getWindowInnerWidth() {
  return typeof window !== `undefined` ? window.innerHeight : 0
}
