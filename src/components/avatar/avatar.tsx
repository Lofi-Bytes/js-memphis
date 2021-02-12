import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'


const Avatar: FC<ReactNode> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      Image01: file(relativePath: { eq: "BIfVQUcG_400x400.jpg" }) {
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
          className="relative flex flex-col items-center justify-between overflow-hidden bg-center bg-no-repeat bg-cover rounded-full shadow-xl w-28 h-28 -left-1/2"
          fluid={img}
          backgroundColor={`#040e18`}
        >
          <Img
            className="hidden bg-cover"
            fluid={img}
            alt="Jillian's avatar."
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full ring-4 ring-purple-300 ring-opacity-30 ring-inset"></div>
        </BackgroundImage>
      </div>
    </React.Fragment>
  )
}

export default Avatar
