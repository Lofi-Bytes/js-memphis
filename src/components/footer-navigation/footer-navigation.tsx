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


type FooterNavigationProps = {
  className?: string,
  location: Location
}

const NAVIGATION = formatClassList([
  'hidden',
  'items-center',
  'justify-around',
  'm-6',
  'md:w-1/2',
  'mx-auto',
  'nav',
  'sm:flex',
  'text-stone-50',
  'w-2/3'
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
  'px-2',
  'py-1',
  'rounded',
  'text-base',
  'text-teal-100',
  'tracking-wider'
])

const RAINBOWSHADOW = formatClassList([
  'rainbow-shadow'
])

const FooterNavigation = ({
  className
}: FooterNavigationProps) => {
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
          return(
            <React.Fragment key={`item-${index}`}>
              {path === '/donate/'
                ?
                  <div className={RAINBOWSHADOW}>
                    <Link
                      className={LINK}
                      to={path}
                    >
                      {title}
                    </Link>
                  </div>
                :
                  <Link
                    className={LINK}
                    to={path}
                  >
                    {title}
                  </Link>
              }
            </React.Fragment>
          )
        })
      }
    </nav>
  )
}

export default FooterNavigation
