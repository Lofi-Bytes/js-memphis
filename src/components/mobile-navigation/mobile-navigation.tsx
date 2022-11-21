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

const NAVIGATION = formatClassList([
  'bg-indigo-700',
  'border',
  'border-indigo-700',
  'bottom-0',
  'fixed',
  'flex',
  'items-center',
  'justify-around',
  'left-0',
  'mb-3',
  'mx-auto',
  'nav',
  'overflow-hidden',
  'right-0',
  'rounded-xl',
  'sm:hidden',
  'text-stone-50',
  'w-11/12',
  'z-20'
])

const LINK_GROUP = formatClassList([
  'focus:outline-none',
  'group'
])

const LINK_INDICATOR_ACTIVE = formatClassList([
  '-mt-1',
  'border-b-8',
  'border-pink-200',
  'rounded-sm'
])

const LINK_INDICATOR_INACTIVE = formatClassList([
  '-mt-1',
  'border-b-8',
  'border-indigo-700',
  'group-focus:border-pink-200',
  'group-hover:border-pink-200',
  'rounded-sm'
])

const LINK_ICON_CONTAINER = formatClassList([
  'duration-200',
  'flex',
  'flex-col',
  'group-focus:text-pink-200',
  'group-hover:text-pink-200',
  'hover:cursor-pointer',
  'items-center',
  'justify-center',
  'py-3',
  'text-teal-100',
  'tracking-wider'
])

const LINK_ICON = formatClassList([
  'text-xl'
])

const RAINBOWSHADOW = formatClassList([
  'rainbow-shadow-mobile'
])

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

  return (
    <nav
      className={
        className
          ? joinStrings(' ', NAVIGATION, className)
          : NAVIGATION
      }
    >
      {
        navigationData.allNavigationJson.edges.map((edge, index) => {
          const path = edge.node.path
          const title = edge.node.title
          const iconClass = edge.node.iconClass
          const formattedLinkIcon = iconClass
                                    ? joinStrings(' ', iconClass, LINK_ICON)
                                    : ""

          const regex = new RegExp(path, 'g')

          return(
          <React.Fragment key={`item-${index}`}>
            {path === '/donate/'
              ?
                <div className={RAINBOWSHADOW} style={{ height: '95%' }}>
                  <Link
                    className={LINK_GROUP}
                    to={path}
                  >
                    {
                      location.pathname.match(regex)
                      ? <div className={LINK_INDICATOR_ACTIVE} />
                      : <div className={LINK_INDICATOR_INACTIVE} />
                    }
                    <div className={LINK_ICON_CONTAINER}>
                      <i className={formattedLinkIcon} />
                      <span className="mt-2 text-xs">{title}</span>
                    </div>
                  </Link>
                </div>
              :
                <Link
                  className={LINK_GROUP}
                  to={path}
                >
                  {
                    location.pathname.match(regex)
                    ? <div className={LINK_INDICATOR_ACTIVE} />
                    : <div className={LINK_INDICATOR_INACTIVE} />
                  }
                  <div className={LINK_ICON_CONTAINER}>
                    <i className={formattedLinkIcon} />
                    <span className="mt-2 text-xs">{title}</span>
                  </div>
                </Link>
            }
          </React.Fragment>
          )
        })
      }
    </nav>
  )
}

export default MobileNavigation
