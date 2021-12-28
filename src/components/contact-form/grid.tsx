import React, { ReactNode } from 'react'

import { formatClassList } from '../../utils/utils'


export type GridProps = {
  children: ReactNode
}

const GRID = formatClassList([
  'gap-4',
  'grid',
  'grid-cols-1',
  'mt-8'
])

const Grid = ({children}: GridProps) => {
  return(
    <div className={GRID}>{children}</div>
  )
}

export default Grid
