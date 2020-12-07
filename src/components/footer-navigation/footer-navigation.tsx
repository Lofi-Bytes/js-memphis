import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'


const FooterNavigation: FC<ReactNode> = ({}: ReactNode) => {
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
      <nav className="nav hidden sm:flex items-center justify-around text-gray-50 w-2/3 md:w-1/2 mx-auto mt-6">
        {
          navigationData.allNavigationJson.edges.map((edge, index) => {
            const path = edge.node.path
            const title = edge.node.title
            return(
              <React.Fragment key={`item-${index}`}>
                <Link
                  to={path}
                  className="text-base tracking-wider text-teal-100 hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer duration-200 focus:outline-none focus:ring focus:ring-teal-200 rounded py-1 px-2"
                >
                  {title}
                </Link>
              </React.Fragment>
            )
          })
        }
      </nav>
    </React.Fragment>
  )
}

export default FooterNavigation
