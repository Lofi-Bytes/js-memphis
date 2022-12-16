import * as React from 'react'

import { loadStripe } from '@stripe/stripe-js'
import {
  Elements
} from '@stripe/react-stripe-js'

import Avatar from '../components/avatar'
import Jumbotron from '../components/jumbotron'
import Layout from '../components/layout'
import Main from '../components/main'
import P from '../components/paragraph'
import Section from '../components/section'
import SEO from '../components/seo'
import TextLink from '../components/text-link'
import Donate from '../components/donate'

import {appearance} from './stripe-appearance'


type PageProps = {
  location: Location
}

const DonatePage = ({
  location
}: PageProps) => {

  const [amount, setAmount] = React.useState(null)
  const [clientSecret, setClientSecret] = React.useState("")
  const [customAmount, setCustomAmount] = React.useState(null)
  const [paymentAmount, setPaymentAmount] = React.useState(null)
  const [paymentIntentId, setPaymentIntentId] = React.useState("")
  const [selected, setSelected] = React.useState("option1")
  const [stripePromise, setStripePromise] = React.useState(null)

  const amountOptions:[number, number, number] = [10, 30, 55]

  const handleOptionChange = (event) => {
    setSelected(event.target.name)
  }

  // React.useEffect(() => {
  //   console.log(selected)
  // }, [selected])

  // React.useEffect(() => {
  //   console.log(`paymentAmount: ${paymentAmount}`)
  //   console.log(`customAmount: ${customAmount}`)
  //   console.log(`amount: ${amount}`)
  // }, [paymentAmount])

  React.useEffect(() => {
    if (selected != 'option4') {
      const amountOptions = {
        option1: 1000,
        option2: 3000,
        option3: 5500
      }
      setAmount(amountOptions[selected])
    }
  }, [selected])

  React.useEffect(() => {
    if (selected === 'option4' && customAmount !== null) {
      return setPaymentAmount(customAmount)
    } else if (selected !== 'option4') {
      setPaymentAmount(amount)
    }
  }, [selected, amount, customAmount])

  React.useEffect(() => {
    fetch(
      `${process.env.ENV === "development"
          ? "http://localhost:9999"
          : ""
        }/.netlify/functions/config`
    ).then(async (response) => {
      const { publishableKey } = await response.json()

      setStripePromise(loadStripe(publishableKey))
    })
  }, [])

  React.useEffect(() => {
    fetch(
      `${process.env.ENV === "development"
          ? "http://localhost:9999"
          : ""
        }/.netlify/functions/create-payment-intent`,
      {
        method: "POST",
        body: JSON.stringify({})
      }
    ).then(async (response) => {
      const { paymentIntentId, clientSecret } = await response.json()

      setClientSecret(clientSecret)
      setPaymentIntentId(paymentIntentId)
    })
  }, [])

  const firstUpdate = React.useRef(true)
  const secondUpdate = React.useRef(true)
  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      // console.log("First Update!")
      return
    }

    if (secondUpdate.current) {
      secondUpdate.current = false
      // console.log("Second Update!")
      return
    }

    // console.log("subsequent Update!")

    let activeFetch = true
    fetch(
      `${process.env.ENV === "development"
          ? "http://localhost:9999"
          : ""
        }/.netlify/functions/update-payment-intent`,
      {
        method: "POST",
        body: JSON.stringify({
          paymentAmount,
          paymentIntentId
        })
      }
    ).then(async (response) => {
      if (activeFetch) {
        // console.log(response)
      }
    })
    return () => {activeFetch = false}
  }, [paymentAmount])

  const options = {
    clientSecret: clientSecret,
    appearance: appearance
  }

  return (
    <Layout location={location}>
      <SEO
        metaTitle="Jillian S. Estrella"
        metaDescription="Design systems engineer"
        canonicalUrl="https://jillian.dev/"
      />
      <Jumbotron
        align="left"
        title={<><span>Please help support my medical transition</span></>}
        subtitle="Every dollar donated makes a difference"
      />
      <Main>
        <Section background="opaque" className="mb-8 -mt-10 pb-14">
          <Avatar
            alt="Jillian's avatar"
            icon="fa-duotone fa-hands-holding-heart"
          />
          <P className="mt-10">
            The cost of medical transition in the U.S.A. is exorbitant - <TextLink
              to="https://www.businessinsider.com/transgender-medical-care-surgery-expensive-2019-6"
              title="The staggering costs of being transgender in the US, where even patients with health insurance can face six-figure bills"
              outbound={true}
            >exceeding $100,000</TextLink> - and is not covered by my health insurance.
          </P>
          {
            stripePromise && clientSecret
            ?
              <Elements
                stripe={stripePromise}
                options={options}
              >
                <Donate
                  amountOptions={amountOptions}
                  location={location}
                  onChange={handleOptionChange}
                  selected={selected}
                  setCustomAmount={setCustomAmount}
                  setSelected={setSelected}
                />
              </Elements>
            : null
          }
        </Section>
      </Main>
    </Layout>
  )
}

export default DonatePage
