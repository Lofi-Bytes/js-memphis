import * as React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'

type MainProps = {
  children: React.ReactNode,
  className?: string
}

const MAIN = `
  m-auto
  max-w-screen-lg
  mb-20
  min-h-screen
`

const Main = ({
  children,
  className
}: MainProps) => {
  const formattedJumbotronWrapper = formatClassList(MAIN)
  const formattedClassList = className
                              ? joinStrings(' ', formattedJumbotronWrapper, className)
                              : formattedJumbotronWrapper

  return (
    <main className={formattedClassList}>
      {children}
    </main>
  )
}

export default Main
