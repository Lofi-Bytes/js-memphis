import * as React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'

import './custom-amount-input.css'


const FIELD_BASE = formatClassList([
  'bg-stone-200',
  'block',
  'border-0',
  'border-l-4',
  'focus:ring-0',
  'mt-1',
  'pl-3',
  'pr-10',
  'rounded-lg',
  'shadow-md',
  'text-stone-600',
  'text-lg',
  'w-full'
])

const FIELD = formatClassList([
  FIELD_BASE,
  'border-purple-300',
  'focus:border-fuchsia-500',
  'custom-amount-field'
])

const LABEL = formatClassList([
  'text-stone-600',
  'text-sm',
  'tracking-wider'
])

export type CustomAmountInputProps = {
  className?: string,
  handleChange: Function,
  label: string,
  tabIndex: number
}

const CustomAmountInput = ({
  className,
  label,
  selected,
  setCustomAmount,
  tabIndex,
  ...props
}) => {
  const ref = React.useRef(null)
  label = label.toLowerCase()

  const handleChange = (event) => {
    // setTimeout(() => {
      if (event.target.value !== '' && event.target.value < '0') {
        event.target.value = '1'
      }
      if (event.target.value !== '' && event.target.value < '1') {
        event.target.value = '1'
      }
      setCustomAmount(event.target.value*100)
    // }, 500)
  }

  React.useEffect(() => {
    if (selected !== "option4") {
      ref.current.value = null
      setCustomAmount(null)
    }
  }, [selected])

  return (
    <label className={
      joinStrings(' ', 'block', className)
    }>
      <span className={LABEL}>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
      <div className="relative">
        <input
          {...props}
          aria-required="true"
          className={FIELD}
          name={label}
          onChange={handleChange}
          placeholder=""
          ref={ref}
          tabIndex={tabIndex}
          type="number"
        />
      </div>
    </label>
  )
}

export default CustomAmountInput
