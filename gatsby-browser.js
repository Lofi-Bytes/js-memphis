import React from 'react'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import './src/styles/base.css'


const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

// trigger an immediate page refresh when an update is found
export const onServiceWorkerUpdateReady = () => window.location.reload();

export const wrapRootElement = ({ element }) => {
  return (
    <Elements stripe={stripePromise}>
      {element}
    </Elements>
  )
}
