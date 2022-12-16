import * as React from 'react'

import AmountPickerButton from './amount-picker-button'
import TextInput from './custom-amount-input'

import './amount-picker.css'


export type AmountPickerProps = {
  amountOptions: [number, number, number],
  className?: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  selected: string,
  setCustomAmount: React.Dispatch<React.SetStateAction<string>>,
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
        {amountOptions.map((value, index) => (
          <AmountPickerButton
            amount={amountOptions[index]}
            key={index}
            name={`option${index + 1}`}
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
            ? "transition-all ease-in-out duration-500 h-full opacity-100"
            : "transition-all ease-in-out duration-500 h-0 opacity-0"
        }
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
