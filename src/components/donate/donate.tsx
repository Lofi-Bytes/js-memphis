import * as React from 'react'

import {
  useStripe,
  useElements,
  PaymentElement
} from '@stripe/react-stripe-js'

import { useForm } from 'react-hook-form'

import { encode } from '../../utils/utils'

import AmountPicker from './amount-picker'
import Button from '../button'
import ErrorMessage from './error-message'
import Grid from '../contact-form/grid'
import SuccessMessage from './success-message'
import TextInput from '../contact-form/text-input'


export type DonateProps = {
  className?: string,
  location: Location,
  [other: string]: unknown
}

const Donate = ({
  className,
  location,
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
  const handleChange = event => {setState({
    ...state,
    [event.target.name]: event.target.value
  })}
  const onSubmit = (data, event) => {
    event.preventDefault()
    data = JSON.stringify(data)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...state
      })
    })
      .then(response => {
        setSuccessMsg(true)
        reset()
        // console.log(response)
      })
      .catch(error => {
        setErrorMsg(true)
        // console.log(error)
      })
  }

  // const handleSubmit = async (event) => {

  //   // stop the page from reloading
  //   event.preventDefault()

  //   // don't send again while we are sending
  //   if (isSending) return

  //   // update state
  //   setIsSending(true)

  //   //
  //   if (elements == null) {
  //     return
  //   }

  //   //
  //   const {error, paymentMethod} = await stripe.createPaymentMethod({
  //     type: 'card',
  //     card: elements.getElement(CardElement)
  //   })

  //   // send the request
  //   const intent = await fetch(
  //     `${process.env.ENV === "development"
  //         ? "http://localhost:9999"
  //         : ""
  //       }/.netlify/functions/payment-intent`,
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         amount: 5
  //       })
  //     }
  //   )

  //   {await intent.status !== 200
  //     ? setErrorMsg(true)
  //     : null
  //   }

  //   if(await intent.status === 200) {
  //     const { paymentIntent } = await intent.json()

  //     try {
  //       await stripe.confirmCardPayment(paymentIntent.client_secret, {
  //         payment_method: {
  //           card: elements.getElement(CardElement),
  //           billing_details: {
  //             name: "test",
  //             email: "test@test.com"
  //           }
  //         }
  //       })

  //       // Display the success message
  //       setSuccessMsg(true)

  //       // update state
  //       setIsSending(false)
  //     } catch (e) {
  //       switch (e.type) {
  //         case 'StripeCardError':
  //           console.log(`statusCode: ${e.type}, body: A payment error occurred: ${e.message}`)
  //           return {
  //             statusCode: e.type,
  //             body: `A payment error occurred: ${e.message}`
  //           }
  //         case 'StripeInvalidRequestError':
  //           console.log(`statusCode: ${e.type}, body: An invalid request occurred.`)
  //           return {
  //             statusCode: e.type,
  //             body: 'An invalid request occurred.'
  //           }
  //         default:
  //           console.log(`statusCode: ${e.type}, body: A problem occurred.`)
  //           return {
  //             statusCode: e.type,
  //             body: 'A problem occurred.'
  //           }
  //       }
  //     }
  //   }
  // }

  // const [isSending, setIsSending] = React.useState(false)
  // const [message, setMessage] = React.useState()
  // const isMounted = React.useRef(true)

  // // set isMounted to false when we unmount the component
  // React.useEffect(() => {
  //   return () => {
  //     isMounted.current = false
  //   }
  // }, [])

  // const handleSubmit = React.useCallback(async (event) => {
  //   // stop the page from reloading
  //   event.preventDefault()

  //   // don't send again while we are sending
  //   if (isSending) return

  //   // update state
  //   setIsSending(true)

  //   // send the request
  //   const response = await fetch("http://localhost:9999/.netlify/functions/hello-world", {
  //     method: "GET"
  //   })

  //   // convert the response into json
  //   const data = await response.json()

  //   // set the message state
  //   await setMessage(data.message)

  //   // once the request is sent, update state again
  //   if (isMounted.current) setIsSending(false) // only update if we are still mounted

  // }, [isSending])

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
              <>
                <AmountPicker
                  amount={[10, 30, 55]}
                />
                <PaymentElement />
                <div
                  className="w-full mx-auto mt-8 rainbow-shadow-button"
                >
                  <Button
                    action="primary"
                    className="w-full"
                    disabled={isProcessing}
                    role="button"
                    title="Donate"
                    type="submit"
                  >
                    {isProcessing ? <>"Processing..."</> : <>Donate</>}
                  </Button>
                </div>
              </>
            :
              null
          }
        </Grid>
      </form>
    </div>
  )
}

export default Donate