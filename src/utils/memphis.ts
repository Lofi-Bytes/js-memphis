import {
  randomIntFromInterval,
  getDocumentHeight
} from './utils'

export const squareSolid = {
  bordered: false,
  colors: [
    '#38BDF8' // sky 400
  ],
  degrees: 90,
  icon: false,
  innerClassArray: ['inner-square-solid'],
  innerElementType: 'div',
  max: 220,
  min: 60,
  outerClassArray: ['outer-square-solid'],
  outerElementType: 'div'
}

export const squareOutline = {
  bordered: true,
  colors: [
    '#5EEAD4', // teal 300
    '#FAFAF9' // warm stone 50
  ],
  icon: false,
  innerClassArray: ['inner-square-outline'],
  innerElementType: 'div',
  max: 120,
  min: 20,
  outerClassArray: ['outer-square-outline'],
  outerElementType: 'div'
}

export const heart = {
  bordered: false,
  colors: [
    '#FB7185', // rose 400
    '#F472B6', // pink 400
  ],
  icon: true,
  innerClassArray: ['inner-heart', `icon-heart-empty`],
  innerElementType: 'i',
  max: 60*1.25,
  min: 20*1.25,
  outerClassArray: ['outer-heart'],
  outerElementType: 'div'
}

export const triangle = {
  bordered: true,
  colors: [
    '#A78BFA', // violet 400
    '#38BDF8', // sky 400
  ],
  icon: true,
  innerClassArray: ['inner-triangle', `icon-triangle`],
  innerElementType: 'i',
  max: 100*1.5,
  min: 40*1.5,
  outerClassArray: ['outer-triangle'],
  outerElementType: 'div'
}

export const bolt = {
  bordered: true,
  colors: [
    '#FEF08A', // yellow 200
    '#67E8F9', // cyan 300
  ],
  icon: true,
  innerClassArray: ['inner-bolt', `icon-bolt`],
  innerElementType: 'i',
  max: 80*1.75,
  min: 40*1.75,
  outerClassArray: ['outer-bolt'],
  outerElementType: 'div'
}

export const wave = {
  bordered: true,
  colors: [
    '#FEF08A', // yellow 200
    '#1C1917' // warm stone 900
  ],
  icon: true,
  innerClassArray: ['inner-wave', `icon-wave`],
  innerElementType: 'i',
  max: 60*1.75,
  min: 20*1.75,
  outerClassArray: ['outer-wave'],
  outerElementType: 'div'
}

export interface ShapeElementParameters {
  bordered: boolean,
  colors: string[],
  degrees?: number,
  icon: boolean,
  innerClassArray: string[],
  innerElementType: string,
  max: number,
  min: number,
  outerClassArray: string[],
  outerElementType: string
}

export const createShapeElement = ({
  bordered,
  colors,
  degrees,
  icon,
  innerClassArray,
  innerElementType,
  max,
  min,
  outerClassArray,
  outerElementType
}: ShapeElementParameters) => {
  let height: number = getDocumentHeight()

  const canvas: HTMLElement | null = document.getElementById('canvas')

  const size: number = randomIntFromInterval(min, max)
  const bg: string = colors[Math.floor(Math.random() * colors.length)]

  const outerElement: HTMLElement = document.createElement(outerElementType)
  outerElement.classList.add(...outerClassArray)
  icon
    ? (
      outerElement.style.width = size + 'px',
      outerElement.style.height = size + 'px'
    )
    : (
      outerElement.style.width = size + 'px',
      outerElement.style.height = size + 'px'
    )

  const innerElement: HTMLElement = document.createElement(innerElementType)
  innerElement.classList.add(...innerClassArray)
  icon
    ? innerElement.style.fontSize = size + 'px'
    : (
      innerElement.style.width = size + 'px',
      innerElement.style.height = size + 'px'
    )
  innerElement.style.top = randomIntFromInterval(0, height).toString() + 'px'
  innerElement.style.left = randomIntFromInterval(0, innerWidth).toString() + 'px'

  degrees ? innerElement.style.transform = `rotate(${Math.floor(Math.random() * degrees)}deg)` : null

  icon
    ? innerElement.style.color = bg
    : bordered
      ? innerElement.style.borderColor = bg
      : innerElement.style.background = bg

  canvas.appendChild(outerElement)
  outerElement.appendChild(innerElement)
}
