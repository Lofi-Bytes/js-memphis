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


type PageProps = {
  location: Location
}

const DonatePage = ({
  location
}: PageProps) => {

  const [stripePromise, setStripePromise] = React.useState(null)
  const [clientSecret, setClientSecret] = React.useState("")

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
      const { clientSecret } = await response.json()

      setClientSecret(clientSecret)
    })
  }, [])

  const options = {
    // passing the client secret obtained in step 3
    clientSecret: clientSecret,
    // Fully customizable with appearance API.
    appearance: {
      // theme: 'none',
      variables: {
        borderRadius: '0.5rem',
        colorBackground: 'rgb(231, 229, 228)',
        colorDanger: 'rgb(239, 68, 68)',
        // colorPrimary: 'rgb(88, 28, 135)',
        colorPrimary: '#7e22ce',
        colorText: 'rgb(87, 83, 78)',
        fontFamily: 'proxima-nova, sans-serif',
        fontSizeBase: '1rem',
        spacingUnit: '4.75px'
      },
      rules: {
        // '.Tab': {
        //   border: '1px solid #d6d3d1'
        // },
        // '.Tab--selected': {
          // borderColor: 'var(--p-colorPrimary)',
          // color: 'var(--colorPrimary)',
          // boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02), 0 0 0 1px var(--colorPrimary)'
        // },
        ".Tab": {
          borderWidth: "2px",
          boxShadow: '0 4px 6px -1px rgb(215, 215, 215), 0 2px 4px -2px rgb(215, 215, 215)',
        },
        ".Tab--selected": {
          borderWidth: "2px",
          boxShadow: '0 4px 6px -1px rgb(215, 215, 215), 0 2px 4px -2px rgb(215, 215, 215)',
        },
        '.Block': {
          backgroundColor: '#f5f5f4',
          border: '2px solid #e7e5e4'
        },
        '.Label': {
          marginBottom: '.54rem'
        },
        '.Input': {
          border: 'none',
          borderLeft: '4px solid #d8b4fe',
          boxShadow: '0 4px 6px -1px rgb(215, 215, 215), 0 2px 4px -2px rgb(215, 215, 215)',
          fontSize: '1.125rem',
          letterSpacing: '',
          outline: 'none'
        },
        '.Input:focus': {
          border: 'none',
          borderLeft: '4px solid #d946ef',
          boxShadow: '0 4px 6px -1px rgb(215, 215, 215), 0 2px 4px -2px rgb(215, 215, 215)',
          outline: 'none'
        },
        '.Input--invalid': {
          border: 'none',
          borderLeft: '4px solid #fca5a5',
          boxShadow: '0 4px 6px -1px rgb(215, 215, 215), 0 2px 4px -2px rgb(215, 215, 215)',
          outline: 'none'
        },
        '.Input--invalid:focus': {
          border: 'none',
          borderLeft: '4px solid #ef4444',
          boxShadow: '0 4px 6px -1px rgb(215, 215, 215), 0 2px 4px -2px rgb(215, 215, 215)',
          outline: 'none'
        }
      }
    },
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
        <Section background="opaque" className="mb-8 -mt-10">
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
                <Donate location={location} />
              </Elements>
            : null
          }
        </Section>
      </Main>
    </Layout>
  )
}

export default DonatePage
