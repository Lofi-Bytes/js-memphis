import React, { FC, ReactNode } from 'react'


type SectionProps = {
  children: ReactNode
}

const Section: FC<ReactNode> = ({
  children
}: SectionProps) => {
  return (
    <section className="bg-gray-100 rounded-xl p-8 w-11/12 sm:w-3/4 mx-auto -mt-12 mb-8 sm:mb-10 shadow-xl relative">
      {children}
    </section>
  )
}

export default Section
