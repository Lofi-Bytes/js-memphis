import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'


const Navigation: FC<ReactNode> = ({}: ReactNode) => {
  const navigationData = useStaticQuery(graphql`
    query NavigationQuery {
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
      <nav className="nav hidden sm:flex items-center justify-between text-gray-50">
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
    </React.Fragment>
  )
}

export default Navigation
