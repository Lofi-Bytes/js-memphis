import * as React from 'react'

import {
  useStripe,
  useElements,
  PaymentElement
} from '@stripe/react-stripe-js'

import { useForm } from 'react-hook-form'

import AmountPicker from './amount-picker'
import Button from '../button'
import ErrorMessage from './error-message'
import Grid from '../contact-form/grid'
import SuccessMessage from './success-message'


export type DonateProps = {
  amountOptions: [number, number, number],
  className?: string,
  location: Location,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  selected: string,
  setCustomAmount: unknown,
  [other: string]: unknown
}

const Donate = ({
  amountOptions,
  className,
  location,
  onChange,
  selected,
  setCustomAmount,
  ...other
}: DonateProps) => {

  const [isProcessing, setIsProcessing] = React.useState(false)
  const [message, setMessage] = React.useState("")

  const stripe = useStripe()
  const elements = useElements()

  const {
    formState: {
      errors,
      isSubmitting,
      touchedFields
    },
    // handleSubmit,
    register,
    reset
  } = useForm<DonateProps>({
    mode: 'onBlur'
  })
  const [state, setState] = React.useState<object>({})
  const [successMsg, setSuccessMsg] = React.useState<boolean>(false)
  const [errorMsg, setErrorMsg] = React.useState<boolean>(false)
  // const handleChange = event => {setState({
  //   ...state,
  //   [event.target.name]: event.target.value
  // })}
  // const onSubmit = (data, event) => {
  //   event.preventDefault()
  //   data = JSON.stringify(data)
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({
  //       'form-name': 'contact',
  //       ...state
  //     })
  //   })
  //     .then(response => {
  //       setSuccessMsg(true)
  //       reset()
  //       // console.log(response)
  //     })
  //     .catch(error => {
  //       setErrorMsg(true)
  //       // console.log(error)
  //     })
  // }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: location.href
      },
      redirect: "if_required"
    })

    if (error) {
      setMessage(error.message)
    }

    setIsProcessing(false)
  }

  return (
    <div className="mx-auto md:w-10/12">
      {successMsg ? <SuccessMessage /> : null}
      {errorMsg ? <ErrorMessage /> : null}
      <form onSubmit={handleSubmit}>
        {/* {message
          ? message : null
        } */}
        <Grid>
          {!successMsg && !errorMsg
            ?
              <div className="flex flex-col">
                <AmountPicker
                  amountOptions={amountOptions}
                  onChange={onChange}
                  selected={selected}
                  setCustomAmount={setCustomAmount}
                />
                <div className="mt-8">
                  <PaymentElement />
                </div>
                <div
                  className="w-full mx-auto mt-6 rainbow-shadow-button"
                >
                  <Button
                    action="primary"
                    className="w-full"
                    disabled={isProcessing}
                    role="button"
                    title="Donate"
                    type="submit"
                  >
                    {isProcessing
                      ? <>"Processing..."</>
                      : <>Donate</>
                    }
                  </Button>
                </div>
              </div>
            : null
          }
        </Grid>
      </form>
    </div>
  )
}

export default Donate
