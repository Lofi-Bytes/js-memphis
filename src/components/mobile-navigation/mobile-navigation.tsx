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
      <nav className="nav fixed bottom-0 w-full flex sm:hidden items-center justify-around text-gray-50 bg-indigo-700 h-16 z-20">
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

export default MobileNavigation
