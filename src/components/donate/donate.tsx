import * as React from 'react'

import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  PaymentElement
} from '@stripe/react-stripe-js'

import Button from '../button'
import ErrorMessage from './error-message'
import Grid from '../contact-form/grid'
import SuccessMessage from './success-message'
import TextArea from '../contact-form/text-area'
import TextInput from '../contact-form/text-input'


export type DonateProps = {
  className?: string,
  [other:string]: unknown
}

const Donate = ({
  className
}: DonateProps) => {

  const [successMsg, setSuccessMsg] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState(false)
  const [isSending, setIsSending] = React.useState(false)

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {

    // stop the page from reloading
    event.preventDefault()

    // don't send again while we are sending
    if (isSending) return

    // update state
    setIsSending(true)

    //
    if (elements == null) {
      return
    }

    //
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    // send the request
    const intent = await fetch(
      `${process.env.ENV === "development"
          ? "http://localhost:9999"
          : ""
        }/.netlify/functions/payment-intent`,
      {
        method: "POST",
        body: JSON.stringify({
          amount: 500
        })
      }
    )

    {await intent.status !== 200
      ? setErrorMsg(true)
      : null
    }

    if(await intent.status === 200) {
      const { paymentIntent } = await intent.json()

      try {
        await stripe.confirmCardPayment(paymentIntent.client_secret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: "test",
              email: "test@test.com"
            }
          }
        })

        // Display the success message
        setSuccessMsg(true)

        // update state
        setIsSending(false)
      } catch (e) {
        switch (e.type) {
          case 'StripeCardError':
            console.log(`statusCode: ${e.type}, body: A payment error occurred: ${e.message}`)
            return {
              statusCode: e.type,
              body: `A payment error occurred: ${e.message}`
            }
          case 'StripeInvalidRequestError':
            console.log(`statusCode: ${e.type}, body: An invalid request occurred.`)
            return {
              statusCode: e.type,
              body: 'An invalid request occurred.'
            }
          default:
            console.log(`statusCode: ${e.type}, body: A problem occurred.`)
            return {
              statusCode: e.type,
              body: 'A problem occurred.'
            }
        }
      }
    }
  }

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
                <CardElement className="bg-stone-200 block border-0 border-l-4 focus:ring-0 mt-1 pl-3 pr-10 rounded-lg shadow-md text-stone-600 text-lg w-full p-4" />
                <div
                  className="w-full mx-auto mt-8 rainbow-shadow-button"
                >
                  <Button
                    action="primary"
                    className="w-full"
                    disabled={isSending}
                    role="button"
                    title="Donate"
                    type="submit"
                  >
                    Donate
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
