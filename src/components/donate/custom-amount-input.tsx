import * as React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'

import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import currency from "currency.js"

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
  setCustomAmount: React.Dispatch<React.SetStateAction<string>>,
  tabIndex: number,
}

const defaultMaskOptions = {
  prefix: '$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 6, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
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
    setCustomAmount(currency(event.target.value).intValue)
  }

  React.useEffect(() => {
    if (selected !== "option4") {
      ref.current.value = null
      setCustomAmount(null)
    }

    if (selected === "option4") {
      ref.current?.inputElement.focus()
    }
  }, [selected])

  const currencyMask = createNumberMask({
    ...defaultMaskOptions
  })

  return (
    <label className={
      joinStrings(' ', 'block', className)
    }>
      <span className={LABEL}>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
      <div className="relative">
        <MaskedInput
          {...props}
          aria-required={
            selected === "option4"
              ? true
              : false
          }
          className={FIELD}
          mask={currencyMask}
          name={label}
          onChange={handleChange}
          ref={ref}
          placeholder="$75.00"
          tabIndex={tabIndex}
          type="text"
          autoFocus
        />
      </div>
    </label>
  )
}

export default CustomAmountInput
