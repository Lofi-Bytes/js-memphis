import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'


type NavigationProps = {
  location: Location
}

const Navigation: FC<NavigationProps> = ({
  location
}: NavigationProps) => {
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
      <nav className="items-center justify-between hidden nav sm:flex text-stone-50">
        {
          navigationData.allNavigationJson.edges.map((edge, index) => {
            const path = edge.node.path
            const title = edge.node.title

            const regex = new RegExp(path, 'g')

            return(
              <React.Fragment key={`item-${index}`}>
                <div className="ml-6">
                  {
                    location.pathname.match(regex)
                    ? (
                      <>
                        <Link
                          to={path}
                          className="p-1 text-base tracking-wider text-teal-100 duration-200 rounded hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer focus:outline-none focus:ring focus:ring-teal-200"
                        >
                          {title}
                        </Link>
                        <div className="border-b-2 border-pink-200 rounded" />
                      </>
                    )
                    : (
                      <>
                        <Link
                          to={path}
                          className="p-1 text-base tracking-wider text-teal-100 duration-200 rounded hover:text-pink-200 focus:text-pink-200 active:text-pink-300 hover:cursor-pointer focus:outline-none focus:ring focus:ring-teal-200"
                        >
                          {title}
                        </Link>
                        <div className="border-b-2 rounded" style={{ borderColor: 'transparent' }} />
                      </>
                    )
                  }
                </div>
              </React.Fragment>
            )
          })
        }
      </nav>
    </React.Fragment>
  )
}

export default Navigation
