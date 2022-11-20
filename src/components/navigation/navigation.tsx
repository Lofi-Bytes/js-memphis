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

const NAVIGATION = formatClassList([
  'hidden',
  'items-center',
  'justify-between',
  'nav',
  'sm:flex',
  'text-stone-50',
])

const LINK = formatClassList([
  'active:text-pink-300',
  'duration-200',
  'focus:outline-none',
  'focus:ring',
  'focus:ring-teal-200',
  'focus:text-pink-200',
  'hover:cursor-pointer',
  'hover:text-pink-200',
  'p-1',
  'rounded',
  'text-base',
  'text-teal-100',
  'tracking-wider'
])


const LINK_BORDER = formatClassList([
  'border-b-2',
  'border-transparent',
  'rounded'
])

const LINK_BORDER_ACTIVE = formatClassList([
  LINK_BORDER,
  'border-pink-200'
])

const RAINBOWSHADOW = formatClassList([
  'rainbow-shadow'
])

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

          const regex = new RegExp(path, 'g')

          return(
            <div className="ml-6" key={`item-${index}`}>
            {path === '/donate/'
              ?
                <>
                  <div className={RAINBOWSHADOW}>
                    <Link
                      to={path}
                      className={LINK}
                    >
                      {title}
                    </Link>
                    <div
                      className={
                        location.pathname.match(regex)
                          ? LINK_BORDER_ACTIVE
                          : LINK_BORDER
                      }
                    />
                  </div>
                </>
              :
                <>
                  <Link
                    to={path}
                    className={LINK}
                  >
                    {title}
                  </Link>
                  <div
                    className={
                      location.pathname.match(regex)
                        ? LINK_BORDER_ACTIVE
                        : LINK_BORDER
                    }
                  />
                </>
            }
            </div>
          )
        })
      }
    </nav>
  )
}

export default Navigation
