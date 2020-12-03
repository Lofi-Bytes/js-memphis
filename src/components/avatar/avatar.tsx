import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'


const Avatar: FC<ReactNode> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      Image01: file(relativePath: { eq: "js.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const img = data.Image01.childImageSharp.fluid

  return (
    <React.Fragment>
      <div className="absolute -top-16 left-1/2">
        <BackgroundImage
          Tag="section"
          className="w-28 h-28 rounded-full overflow-hidden relative -left-1/2 shadow-xl flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat"
          fluid={img}
          backgroundColor={`#040e18`}
        >
          <Img
            className="bg-cover hidden"
            fluid={img}
          />
          <div className="w-full h-full absolute top-0 left-0 rounded-full ring-4 ring-purple-300 ring-opacity-30 ring-inset"></div>
        </BackgroundImage>
      </div>
    </React.Fragment>
  )
}

export default Avatar
