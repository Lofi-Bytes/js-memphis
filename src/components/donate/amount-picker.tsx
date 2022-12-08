import * as React from 'react'

import { useForm } from 'react-hook-form'

import TextInput from '../contact-form/text-input'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'

import './amount-picker.css'


const AmountPickerButtonStyles = formatClassList([
  'bg-stone-200',
  'border-2',
  'border-stone-300',
  'first-of-type:ml-0',
  'flex',
  'focus-within:border-purple-400',
  'focus-within:outline-none',
  'focus-within:ring-4',
  'ml-4',
  'p-4',
  'relative',
  'ring-purple-200',
  'rounded-md',
  'text-2xl',
  'text-stone-600',
  'w-full'
])

const AmountPickerButtonStylesSelected = formatClassList([
  'border-purple-700',
  'outline-none'
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
      {/* <i className="fa-light fa-badge absolute top-1 right-1" /> */}
      <div>
        <i
          className="fa-regular fa-dollar-sign"
          aria-hidden="true"
        />
      </div>
      <span>
        {amount}
      </span>
    </label>
  )
}


export type AmountPickerProps = {
  amount: [number, number, number],
  className?: string,
  [other: string]: unknown
}

const AmountPicker = ({
  amount,
  className,
  ...other
}: AmountPickerProps) => {

  const {
    formState: {
      errors,
      touchedFields
    },
    register
  } = useForm<AmountPickerProps>({
    mode: 'onBlur'
  })
  const [state, setState] = React.useState<object>({})
  const handleChange = event => {setState({
    ...state,
    [event.target.name]: event.target.value
  })}

  const [selected, setSelected] = React.useState("option1")

  const handleOptionChange = (event) => {
    setSelected(event.target.name)
  }

  return (
    <React.Fragment>
      <div
        aria-label="Select donation amount"
        aria-orientation="horizontal"
        className="flex"
        role="radiogroup"
      >
        {amount.map((value, i) => (
          <AmountPickerButton
            amount={amount[i]}
            key={i}
            name={`option${i + 1}`}
            onChange={handleOptionChange}
            selected={selected}
          />
        ))}

        <AmountPickerButton
          amount={'?'}
          name="option4"
          onChange={handleOptionChange}
          selected={selected}
        />
      </div>
      {selected === "option4"
        ?
          <TextInput
            {...register('name', {
              required: true,
              minLength: 2,
              maxLength: 200
            })}
            errors={errors}
            errorMessage={
              errors.name && errors.name.type === "required"
                ? <>Please enter your name.</>
                : errors.name && errors.name.type === "minLength"
                  ? <>Your name must be at least 2 characters.</>
                  : errors.name && errors.name.type === "maxLength"
                    ? <>Your name must be less than 100 characters.</>
                    : <>&nbsp;</>
            }
            handleChange={handleChange}
            label="Donate what you can"
            touchedFields={touchedFields}
          />
        : null
      }
    </React.Fragment>
  )
}

export default AmountPicker
