import * as React from 'react'

import { graphql } from 'gatsby'

import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import Avatar from '../components/avatar'
import Banner from '../components/banner/banner'
import Button from '../components/button'
import ContactForm from '../components/contact-form'
import Jumbotron from '../components/jumbotron'
import Layout from '../components/layout'
import Main from '../components/main'
import P from '../components/paragraph'
import Section from '../components/section'
import SEO from '../components/seo'
import SocialIconRow from '../components/social-icon-row'
import TextLink from '../components/text-link'
import Donate from '../components/donate'


const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

type PageProps = {
  data: any,
  location: Location
}

const DonatePage = ({
  data,
  location
}: PageProps) => {
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
          <Elements stripe={stripePromise}>
            <Donate />
          </Elements>
        </Section>
      </Main>
    </Layout>
  )
}

export default DonatePage
