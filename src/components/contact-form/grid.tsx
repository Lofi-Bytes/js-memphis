import React, { ReactNode } from 'react'

import { formatClassList } from '../../utils/utils'


export type GridProps = {
  children: ReactNode
}

const GRID: string = `
  gap-4
  grid
  grid-cols-1
  mt-8
`

const Grid = ({children}: GridProps) => {
  const formattedGrid: string = formatClassList(GRID)

  return(
    <div className={formattedGrid}>{children}</div>
  )
}

export default Grid
