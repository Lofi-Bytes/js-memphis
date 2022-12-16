import * as React from 'react'

import {
  useStripe,
  useElements,
  PaymentElement
} from '@stripe/react-stripe-js'

import AmountPicker from './amount-picker'
import Button from '../button'
import Grid from '../contact-form/grid'
import Alert from '../alert'


export type DonateProps = {
  amountOptions: [number, number, number],
  className?: string,
  location: Location,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  selected: string,
  setCustomAmount: React.Dispatch<React.SetStateAction<string>>,
  setSelected: React.Dispatch<React.SetStateAction<string>>,
  [other: string]: unknown
}

const Donate = ({
  amountOptions,
  className,
  location,
  onChange,
  selected,
  setCustomAmount,
  setSelected,
  ...other
}: DonateProps) => {

  const [isProcessing, setIsProcessing] = React.useState<boolean>(false)
  const [message, setMessage] = React.useState<string>("")
  const [successMsg, setSuccessMsg] = React.useState<boolean>(false)
  const [errorMsg, setErrorMsg] = React.useState<boolean>(false)
  const [elementRef, setElementRef] = React.useState(null)

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: location.href
      },
      redirect: "if_required"
    })

    if (
      await result.paymentIntent &&
      result.paymentIntent.status === "succeeded"
    ) {
      setSuccessMsg(true)
      setErrorMsg(false)
      elementRef.clear()
      setSelected("option1")
    }

    if (await result.error) {
      setMessage(result.error.message)
      setErrorMsg(true)
      setSuccessMsg(false)
    }

    setIsProcessing(false)
  }

  return (
    <div className="mx-auto md:w-10/12 flex flex-col">
      <form onSubmit={handleSubmit} id="donateForm">
        <Grid>
          <div className="flex flex-col">
            <AmountPicker
              amountOptions={amountOptions}
              onChange={onChange}
              selected={selected}
              setCustomAmount={setCustomAmount}
            />
            <div className="mt-8 mb-4">
              <PaymentElement
                onReady={e => setElementRef(e)}
              />
            </div>
            {successMsg
              ? <Alert
                  className={
                    successMsg
                      ? "transition-all ease-in-out duration-500 h-full opacity-100 overflow-hidden"
                      : "transition-all ease-in-out duration-500 h-0 opacity-0 overflow-hidden"
                  }
                  color="green"
                >
                  <span className="text-2xl">
                    Thank you for your donation &nbsp;
                    <i className="fa-regular fa-heart-circle-check"/>
                  </span>
                </Alert>
              : null
            }
            {errorMsg
              ?
                <Alert
                  className={
                    errorMsg
                      ? "transition-all ease-in-out duration-500 h-full opacity-100 overflow-hidden"
                      : "transition-all ease-in-out duration-500 h-0 opacity-0 overflow-hidden"
                  }
                  color="red"
                >
                  <span className="text-2xl">
                    <i className="fa-regular fa-circle-xmark"/> &nbsp;
                    {message}
                  </span>
                </Alert>
              : null
            }
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
        </Grid>
      </form>
    </div>
  )
}

export default Donate
