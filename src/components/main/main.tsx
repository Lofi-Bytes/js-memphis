import * as React from 'react'


type MainProps = {
  children: React.ReactNode
}

const Main = ({
  children
}: MainProps) => {
  return (
    <main className="max-w-screen-lg min-h-screen m-auto mb-20">
      {children}
    </main>
  )
}

export default Main
