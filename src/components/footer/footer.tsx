import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import MobileNavigation from '../mobile-navigation'


const Footer: FC<ReactNode> = ({}: ReactNode) => {
  const navigationData = useStaticQuery(graphql`
    query FooterNavigationQuery {
      allNavigationJson {
        edges {
          node {
            title
            path
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <footer className="flex flex-col justify-center items-center bg-indigo-700 bg-opacity-70 w-full h-40 mb-8 sm:mb-0">
        <div className="flex justify-center items-center relative">
          <a
            href="https://twitter.com/LofiBytes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-teal-100 hover:text-pink-200 focus:text-pink-200 active:text-pink-300 text-3xl hover:cursor-pointer duration-200"></i>
          </a>
          <a
            href="https://github.com/JSNickerson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-teal-100 hover:text-pink-200 focus:text-pink-200 active:text-pink-300 text-3xl ml-6 hover:cursor-pointer duration-200"></i>
          </a>
        </div>
        <nav className="nav hidden sm:flex items-center justify-around text-gray-50 w-2/3 md:w-1/2 mx-auto mt-6">
          {
            navigationData.allNavigationJson.edges.map((edge, index) => {
              const path = edge.node.path
              const title = edge.node.title
              return(
                <React.Fragment key={`item-${index}`}>
                  <Link
                    to={path}
                  >
                    <span className="text-base tracking-wider text-teal-100 hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer duration-200 ml-6">{title}</span>
                  </Link>
                </React.Fragment>
              )
            })
          }
        </nav>
      </footer>
      <MobileNavigation />
    </React.Fragment>
  )
}

export default Footer
