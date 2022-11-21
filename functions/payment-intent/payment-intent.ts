import { Handler } from '@netlify/functions'


const handler: Handler = async (event, context) => {

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

  const { amount, currency = "usd" } = JSON.parse(event.body)

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency
    })
    return {
      statusCode: 200,
      body: JSON.stringify({
        paymentIntent
      })
    }
  } catch (e) {
    switch (e.type) {
      case 'StripeCardError':
        return {
          statusCode: e.type,
          body: `A payment error occurred: ${e.message}`
        }
      case 'StripeInvalidRequestError':
        return {
          statusCode: e.type,
          body: 'An invalid request occurred.'
        }
      default:
        return {
          statusCode: e.type,
          body: 'A problem occurred.'
        }
    }
  }
}

export { handler }
