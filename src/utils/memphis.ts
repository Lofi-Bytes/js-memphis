import {
  randomIntFromInterval,
  getDocumentHeight
} from './utils'

/*
  Create the set of solid squares
*/
export const createSquaresSolid = (): any => {
  let height: number = getDocumentHeight()

  const colors: string[] = [
    '#FB7185', // rose 400
    '#F472B6', // pink 400
    '#38BDF8' // light blue 400
  ]
  const canvas: HTMLElement | null = document.getElementById('canvas')

  const size: number = randomIntFromInterval(60, 220)
  const bg: string = colors[Math.floor(Math.random() * colors.length)]

  const outerSquareSolid: HTMLElement = document.createElement('div')
  outerSquareSolid.classList.add('outer-square-solid')
  outerSquareSolid.style.width = size + 'px'
  outerSquareSolid.style.height = size + 'px'

  const innerSquareSolid: HTMLElement = document.createElement('div')
  innerSquareSolid.classList.add('inner-square-solid')
  innerSquareSolid.style.width = size + 'px'
  innerSquareSolid.style.height = size + 'px'
  innerSquareSolid.style.top = randomIntFromInterval(0, height).toString() + 'px'
  innerSquareSolid.style.left = randomIntFromInterval(0, innerWidth).toString() + 'px'
  innerSquareSolid.style.transform = `rotate(${Math.floor(Math.random() * 90)}deg)`
  innerSquareSolid.style.background = bg

  canvas.appendChild(outerSquareSolid)
  outerSquareSolid.appendChild(innerSquareSolid)
}
/*
  Create the set of outline squares
*/
export const createSquaresOutline = (): any => {
  let height: number = getDocumentHeight()

  const colors: string[] = [
    '#5EEAD4', // teal 300
    '#FAFAF9' // warm gray 50
  ]
  const canvas: HTMLElement | null = document.getElementById('canvas')

  const size: number = randomIntFromInterval(20, 120)
  const bg: string = colors[Math.floor(Math.random() * colors.length)]

  const outerSquareOutline: HTMLElement = document.createElement('div')
  outerSquareOutline.classList.add('outer-square-outline')
  outerSquareOutline.style.width = size + 'px'
  outerSquareOutline.style.height = size + 'px'

  const innerSquareOutline: HTMLElement = document.createElement('div')
  innerSquareOutline.classList.add('inner-square-outline')
  innerSquareOutline.style.width = size + 'px'
  innerSquareOutline.style.height = size + 'px'
  innerSquareOutline.style.top = randomIntFromInterval(0, height).toString() + 'px'
  innerSquareOutline.style.left = randomIntFromInterval(0, innerWidth).toString() + 'px'
  innerSquareOutline.style.borderColor = bg

  canvas.appendChild(outerSquareOutline)
  outerSquareOutline.appendChild(innerSquareOutline)
}
/*
  Create the set of triangles
*/
export const createTriangles = (): any => {
  let height: number = getDocumentHeight()

  const colors: string[] = [
    '#A78BFA', // violet 400
    '#38BDF8', // light blue 400
  ]
  const canvas: HTMLElement | null = document.getElementById('canvas')

  const size: number = randomIntFromInterval(40, 100)
  const bg: string = colors[Math.floor(Math.random() * colors.length)]

  const outerTriangle: HTMLElement = document.createElement('div')
  outerTriangle.classList.add('outer-triangle')
  outerTriangle.style.fontSize = size + 'px'

  const innerTriangle: HTMLElement = document.createElement('i')
  innerTriangle.classList.add(`inner-triangle`, `fal`, `fa-triangle`)
  innerTriangle.style.fontSize = size + 'px'
  innerTriangle.style.top = randomIntFromInterval(0, height).toString() + 'px'
  innerTriangle.style.left = randomIntFromInterval(0, innerWidth).toString() + 'px'
  innerTriangle.style.color = bg

  canvas.appendChild(outerTriangle)
  outerTriangle.appendChild(innerTriangle)
}
/*
  Create the set of bolts
*/
export const createBolts = (): any => {
  let height: number = getDocumentHeight()

  const colors: string[] = [
    '#FEF08A', // yellow 200
    '#67E8F9', // cyan 300
  ]
  const canvas: HTMLElement | null = document.getElementById('canvas')

  const size: number = randomIntFromInterval(40, 80)
  const bg: string = colors[Math.floor(Math.random() * colors.length)]

  const outerBolt: HTMLElement = document.createElement('div')
  outerBolt.classList.add('outer-bolt')
  outerBolt.style.fontSize = size + 'px'

  const innerBolt: HTMLElement = document.createElement('i')
  innerBolt.classList.add(`inner-bolt`, `fal`, `fa-bolt`)
  innerBolt.style.fontSize = size + 'px'
  innerBolt.style.top = randomIntFromInterval(0, height).toString() + 'px'
  innerBolt.style.left = randomIntFromInterval(0, innerWidth).toString() + 'px'
  // innerBolt.style.transform = `rotate(25deg)`
  innerBolt.style.color = bg

  canvas.appendChild(outerBolt)
  outerBolt.appendChild(innerBolt)
}
/*
  Create the set of wave triangle
*/
export const createWave = (): any => {
  let height: number = getDocumentHeight()

  const colors: string[] = [
    // '#F472B6' // pink 400
    '#1C1917'
  ]
  const canvas: HTMLElement | null = document.getElementById('canvas')

  const size: number = randomIntFromInterval(20, 60)
  const bg: string = colors[Math.floor(Math.random() * colors.length)]

  const outerWave: HTMLElement = document.createElement('div')
  outerWave.classList.add('outer-wave')
  outerWave.style.fontSize = size + 'px'

  const innerWave: HTMLElement = document.createElement('i')
  innerWave.classList.add(`inner-wave`, `fal`, `fa-water`)
  innerWave.style.fontSize = size + 'px'
  innerWave.style.top = randomIntFromInterval(0, height).toString() + 'px'
  innerWave.style.left = randomIntFromInterval(0, innerWidth).toString() + 'px'
  innerWave.style.color = bg

  canvas.appendChild(outerWave)
  outerWave.appendChild(innerWave)
}
