import * as React from 'react'

import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'

import Button from '../button'
import ErrorMessage from '../contact-form/error-message'
import Grid from '../contact-form/grid'
import SuccessMessage from '../contact-form/success-message'
import TextArea from '../contact-form/text-area'
import TextInput from '../contact-form/text-input'


const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

export type DonateProps = {
  className?: string,
  [other:string]: unknown
}

const NotFoundPage = ({
  className
}: DonateProps) => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (elements == null) {
      return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    const intent = await fetch("/functions/payment-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: 500,
      }),
    })
    const { paymentIntent } = await intent.json()
    await stripe.confirmCardPayment(paymentIntent.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "test",
          email: "test@test.com"
        },
      },
    });
  }



  return (
    <div className="mx-auto md:w-10/12">
      <form onSubmit={handleSubmit}>
        <Grid>
          <CardElement className="bg-stone-200 block border-0 border-l-4 focus:ring-0 mt-1 pl-3 pr-10 rounded-lg shadow-md text-stone-600 text-lg w-full p-4" />

          <div
            className="w-full mx-auto mt-8 rainbow-shadow-button"
          >
            <Button
              action="primary"
              className="w-full"
              disabled={!stripe || !elements}
              role="button"
              title="Donate"
              type="submit"
            >
              Donate
            </Button>
          </div>
        </Grid>
      </form>
    </div>
  )
}

export default NotFoundPage
