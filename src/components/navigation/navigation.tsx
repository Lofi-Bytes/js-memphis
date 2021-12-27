import * as React from 'react'
import {
  graphql,
  Link,
  useStaticQuery
} from 'gatsby'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type NavigationProps = {
  className?: string,
  location: Location
}

const NAVIGATION = `
  hidden
  items-center
  justify-between
  nav
  sm:flex
  text-stone-50
`

const LINK = `
  active:text-pink-300
  duration-200
  focus:outline-none
  focus:ring
  focus:ring-teal-200
  focus:text-pink-200
  hover:cursor-pointer
  hover:text-pink-200
  p-1
  rounded
  text-base
  text-teal-100
  tracking-wider
`

const LINK_BORDER = `
  border-b-2
  rounded
`

const LINK_BORDER_ACTIVE = `
  ${LINK_BORDER}
  border-pink-200
`

const Navigation = ({
  className,
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

  const formattedNavigation = formatClassList(NAVIGATION)
  const formattedClassList = className
                              ? joinStrings(' ', formattedNavigation, className)
                              : formattedNavigation
  const formattedLink = formatClassList(LINK)
  const formattedLinkBorder = formatClassList(LINK_BORDER)
  const formattedLinkBorderActive = formatClassList(LINK_BORDER_ACTIVE)

  return (
    <nav className={formattedClassList}>
      {
        navigationData.allNavigationJson.edges.map((edge, index) => {
          const path = edge.node.path
          const title = edge.node.title

          const regex = new RegExp(path, 'g')

          return(
            <div className="ml-6" key={`item-${index}`}>
              <Link
                to={path}
                className={formattedLink}
              >
                {title}
              </Link>
              <div
                className={
                  location.pathname.match(regex)
                    ? formattedLinkBorderActive
                    : formattedLinkBorder
                }
              />
            </div>
          )
        })
      }
    </nav>
  )
}

export default Navigation
