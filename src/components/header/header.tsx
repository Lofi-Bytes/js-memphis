import * as React from 'react'
import { Link } from 'gatsby'

import Navigation from '../navigation'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type HeaderProps = {
  className?: string,
  location: Location
}

const HEADER_WRAPPER = formatClassList([
  'bg-stone-900',
  'flex',
  'items-center',
  'justify-center',
  'opacity-75',
  'p-1',
  'w-full'
])

const BLM_BANNER = formatClassList([
  'text-lg',
  'text-stone-50'
])

const HEADER = formatClassList([
  'bg-indigo-700',
  'bg-opacity-30',
  'px-8',
  'py-6',
  'w-full'
])

const NAVIGATION = formatClassList([
  'flex',
  'items-center',
  'justify-between',
  'm-auto',
  'max-w-screen-lg',
  'z-5'
])

const JS = formatClassList([
  'active:text-pink-300',
  'duration-200',
  'focus:outline-none',
  'focus:ring',
  'focus:ring-teal-200',
  'focus:text-pink-200',
  'font-semibold',
  'hover:cursor-pointer',
  'hover:text-pink-200',
  'js',
  'pb-1',
  'pt-3',
  'px-2',
  'rounded',
  'text-4xl',
  'text-teal-100'
])

const Header = ({
  className,
  location
}: HeaderProps) => {

  return (
    <React.Fragment>
      <div
        className={
          className
            ? joinStrings(' ', HEADER_WRAPPER, className)
            : HEADER_WRAPPER
        }
      >
        <p className={BLM_BANNER}><strong>All</strong> Black Lives Matter</p>
      </div>
      <header className={HEADER}>
        <div className={NAVIGATION}>
          <Link
            to="/"
            className={JS}
          >
            JS
          </Link>
          <Navigation location={location} />
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
