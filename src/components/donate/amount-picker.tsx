import * as React from 'react'

import TextInput from './custom-amount-input'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'

import './amount-picker.css'


const AmountPickerButtonStyles = formatClassList([
  'amountPicker',
  'bg-stone-200',
  'border-2',
  'border-stone-300',
  'first-of-type:ml-0',
  'flex',
  'focus-within:-m-px',
  'focus-within:border-3',
  'focus-within:border-purple-400',
  'focus-within:ring-4',
  'outline-none',
  'px-3',
  'py-2',
  'relative',
  'ring-purple-200',
  'rounded-md',
  'shadow-md',
  'text-2xl',
  'text-stone-600',
  'w-full'
])

const AmountPickerButtonStylesSelected = formatClassList([
  'focus-within:border-purple-700',
  'border-purple-700',
  'outline-none',
  'text-purple-700',
])

export type AmountPickerButtonProps = {
  amount: number | string,
  name: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  selected: string
  [other: string]: unknown
}

export const AmountPickerButton = ({
  amount,
  name,
  onChange,
  selected
}: AmountPickerButtonProps) => {

  return (
    <label
      className={
        selected === name
          ? joinStrings(
              ' ',
              AmountPickerButtonStyles,
              AmountPickerButtonStylesSelected
            )
          : AmountPickerButtonStyles
      }
    >
      <input
        className="absolute top-1 right-1 radio-custom"
        name={name}
        type="radio"
        onChange={onChange}
        checked={selected === name ? true : false}
      />
      <div>
        <i
          className="fa-regular fa-dollar-sign"
          aria-hidden="true"
        />
      </div>
      <span>
        {amount}
      </span>
      {selected === name
        ?
          <i
            className="fa-solid fa-badge-check text-lg absolute top-2 right-2"
            aria-hidden="true"
          />
        :
          <i
            className="fa-regular fa-badge text-lg absolute top-2 right-2"
            aria-hidden="true"
          />
      }
    </label>
  )
}


export type AmountPickerProps = {
  amountOptions: [number, number, number],
  className?: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  selected: string,
  [other: string]: unknown
}

const AmountPicker = ({
  amountOptions,
  className,
  onChange,
  selected,
  setCustomAmount,
  ...other
}: AmountPickerProps) => {

  return (
    <React.Fragment>
      <div
        aria-label="Select donation amount"
        aria-orientation="horizontal"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4"
        role="radiogroup"
      >
        {amountOptions.map((value, i) => (
          <AmountPickerButton
            amount={amountOptions[i]}
            key={i}
            name={`option${i + 1}`}
            onChange={onChange}
            selected={selected}
          />
        ))}

        <AmountPickerButton
          amount={'?'}
          name="option4"
          onChange={onChange}
          selected={selected}
        />
      </div>
      <TextInput
        aria-hidden={
          selected === "option4"
            ? false
            : true
        }
        className={
          selected === "option4"
            ? 'transition-all ease-in-out duration-500 h-full opacity-100 overflow-hidden'
            : 'transition-all ease-in-out duration-500 h-0 opacity-0 overflow-hidden'
        }
        // handleChange={handleChange}
        label="Donate what you can"
        selected={selected}
        setCustomAmount={setCustomAmount}
        tabIndex={
          selected === "option4"
            ? 0
            : -1
        }
      />
    </React.Fragment>
  )
}

export default AmountPicker
