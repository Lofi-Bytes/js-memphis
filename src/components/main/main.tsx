import React, { FC, ReactNode } from 'react'


type MainProps = {
  children: ReactNode
}

const Main: FC<ReactNode> = ({
  children
}: MainProps) => {
  return (
    <main className="min-h-screen max-w-screen-lg m-auto mb-20">
      {children}
    </main>
  )
}

export default Main
