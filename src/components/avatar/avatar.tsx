import React, { Fragment } from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Avatar = ({

}) => {
  const data = useStaticQuery(graphql`
    query {
      Image01: file(relativePath: { eq: "BIfVQUcG_400x400.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const img = data.Image01.childImageSharp.fluid

  return (
    <Fragment>
      <div className="absolute -top-16 left-1/2">
        <div className="relative overflow-hidden rounded-full shadow-xl w-28 h-28 -left-1/2">
          {/* <StaticImage
            src="../../images/BIfVQUcG_400x400.jpg"
            placeholder="blurred"
            layout="constrained"
            width={300}
            formats={["auto", "webp", "avif"]}
            alt="Jillian's avatar."
          /> */}
          <Img
            fluid={img}
            alt="Jillian's avatar."
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full ring-4 ring-purple-300 ring-opacity-30 ring-inset"></div>
        </div>
      </div>
    </Fragment>
  )
}

export default Avatar
