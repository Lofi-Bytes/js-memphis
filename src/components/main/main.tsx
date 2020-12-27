import React, { FC, ReactNode } from 'react'


type MainProps = {
  children: ReactNode
}

const Main: FC<MainProps> = ({
  children
}: MainProps) => {
  return (
    <main className="max-w-screen-lg min-h-screen m-auto mb-20">
      {children}
    </main>
  )
}

export default Main
