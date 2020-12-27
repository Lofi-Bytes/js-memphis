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
      <nav className="items-center justify-around hidden w-2/3 mx-auto mt-6 nav sm:flex text-gray-50 md:w-1/2">
        {
          navigationData.allNavigationJson.edges.map((edge, index) => {
            const path = edge.node.path
            const title = edge.node.title
            return(
              <React.Fragment key={`item-${index}`}>
                <Link
                  to={path}
                  className="px-2 py-1 text-base tracking-wider text-teal-100 duration-200 rounded hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer focus:outline-none focus:ring focus:ring-teal-200"
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
