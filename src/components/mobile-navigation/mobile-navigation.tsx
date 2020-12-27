import React, { FC } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { joinStrings } from '../../utils/utils'


type MobileNavigationProps = {
  location: Location
}

const MobileNavigation: FC<MobileNavigationProps> = ({
  location
}: MobileNavigationProps) => {
  const navigationData = useStaticQuery(graphql`
    query MobileNavigationQuery {
      allNavigationJson {
        edges {
          node {
            title
            path
            iconClass
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <nav className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around w-11/12 mx-auto mb-3 bg-indigo-700 rounded-xl nav sm:hidden text-gray-50 pt-0.5">
        {
          navigationData.allNavigationJson.edges.map((edge, index) => {
            const path = edge.node.path
            const title = edge.node.title
            const iconClass = edge.node.iconClass

            const regex = new RegExp(path, 'g')

            return(
              <React.Fragment key={`item-${index}`}>
                <Link to={path}>
                  {
                    location.pathname.match(regex)
                    ? <div className="border-b-4 border-pink-200 rounded" />
                    : <div className="border-b-4 border-indigo-700 rounded" />
                  }
                  <div className="flex flex-col items-center justify-center py-3 tracking-wider text-teal-100 duration-200 hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer">
                    <i className={
                      iconClass
                        ? joinStrings(' ', iconClass, "text-xl")
                        : ""
                    } />
                    <span className="mt-2 text-xs">{title}</span>
                  </div>
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
