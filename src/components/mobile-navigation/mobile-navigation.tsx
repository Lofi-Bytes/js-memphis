import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'


const MobileNavigation: FC<ReactNode> = ({}: ReactNode) => {
  const navigationData = useStaticQuery(graphql`
    query MobileNavigationQuery {
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
      <nav className="fixed bottom-0 z-20 flex items-center justify-around w-full h-16 bg-indigo-700 nav sm:hidden text-gray-50">
        {
          navigationData.allNavigationJson.edges.map((edge, index) => {
            const path = edge.node.path
            const title = edge.node.title
            return(
              <React.Fragment key={`item-${index}`}>
                <Link
                  to={path}
                >
                  <span className="text-base tracking-wider text-teal-100 duration-200 hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer">{title}</span>
                </Link>
              </React.Fragment>
            )
          })
        }
      </nav>
    </React.Fragment>
  )
}

export default MobileNavigation
