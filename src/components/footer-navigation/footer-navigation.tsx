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

const NAVIGATION = `
  hidden
  items-center
  justify-around
  m-6
  md:w-1/2
  mx-auto
  nav
  sm:flex
  text-stone-50
  w-2/3
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
  px-2
  py-1
  rounded
  text-base
  text-teal-100
  tracking-wider
`

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

  const formattedNavigation = formatClassList(NAVIGATION)
  const formattedClassList = className
                              ? joinStrings(' ', formattedNavigation, className)
                              : formattedNavigation
  const formattedLink = formatClassList(LINK)

  return (
    <React.Fragment>
      <nav className={formattedClassList}>
        {
          navigationData.allNavigationJson.edges.map((edge, index) => {
            const path = edge.node.path
            const title = edge.node.title
            return(
              <React.Fragment key={`item-${index}`}>
                <Link
                  to={path}
                  className={formattedLink}
                >
                  {title}
                </Link>
              </React.Fragment>
            )
          })
        }
      </nav>
    </React.Fragment>
  )
}

export default FooterNavigation
