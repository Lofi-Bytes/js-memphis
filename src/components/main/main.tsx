import * as React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type MainProps = {
  children: React.ReactNode,
  className?: string
}

const MAIN = formatClassList([
  'm-auto',
  'max-w-screen-lg',
  'mb-20',
  'min-h-screen'
])

const Main = ({
  children,
  className
}: MainProps) => {

  return (
    <main
      className={
        className
          ? joinStrings(' ', MAIN, className)
          : MAIN
      }
    >
      {children}
    </main>
  )
}

export default Main
