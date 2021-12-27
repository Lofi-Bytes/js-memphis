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

type MobileNavigationProps = {
  className?: string,
  location: Location
}

const NAVIGATION = `
  bg-indigo-700
  border
  border-indigo-700
  bottom-0
  fixed
  flex
  items-center
  justify-around
  left-0
  mb-3
  mx-auto
  nav
  overflow-hidden
  right-0
  rounded-xl
  sm:hidden
  text-stone-50
  w-11/12
  z-20
`

const LINK_GROUP = `
  focus:outline-none
  group
`

const LINK_INDICATOR_ACTIVE = `
  -mt-1
  border-b-8
  border-pink-200
  rounded-sm
`

const LINK_INDICATOR_INACTIVE = `
  -mt-1
  border-b-8
  border-indigo-700
  group-focus:border-pink-200
  group-hover:border-pink-200
  rounded-sm
`

const LINK_ICON_CONTAINER = `
  duration-200
  flex
  flex-col
  group-focus:text-pink-200
  group-hover:text-pink-200
  hover:cursor-pointer
  items-center
  justify-center
  py-3
  text-teal-100
  tracking-wider
`

const LINK_ICON = `
  text-xl
`

const MobileNavigation = ({
  className,
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

  const formattedNavigation = formatClassList(NAVIGATION)
  const formattedClassList = className
                              ? joinStrings(' ', formattedNavigation, className)
                              : formattedNavigation
  const formattedLinkGroup = formatClassList(LINK_GROUP)
  const formattedLinkIndicatorActive = formatClassList(LINK_INDICATOR_ACTIVE)
  const formattedLinkIndicatorInactive = formatClassList(LINK_INDICATOR_INACTIVE)
  const formattedLinkIconContainer = formatClassList(LINK_ICON_CONTAINER)


  return (
    <nav className={formattedClassList}>
      {
        navigationData.allNavigationJson.edges.map((edge, index) => {
          const path = edge.node.path
          const title = edge.node.title
          const iconClass = edge.node.iconClass
          const formattedLinkIcon = iconClass
                                    ? joinStrings(' ', iconClass, formatClassList(LINK_ICON))
                                    : ""

          const regex = new RegExp(path, 'g')

          return(
            <Link
              className={formattedLinkGroup}
              key={`item-${index}`}
              to={path}
            >
              {
                location.pathname.match(regex)
                ? <div className={formattedLinkIndicatorActive} />
                : <div className={formattedLinkIndicatorInactive} />
              }
              <div className={formattedLinkIconContainer}>
                <i className={formattedLinkIcon} />
                <span className="mt-2 text-xs">{title}</span>
              </div>
            </Link>
          )
        })
      }
    </nav>
  )
}

export default MobileNavigation
