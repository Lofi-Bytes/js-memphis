import { Handler } from '@netlify/functions'


const handler: Handler = async (event, context) => {

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        paymentIntentId: paymentIntent.id,
        clientSecret: paymentIntent.client_secret
      })
    }
  } catch (error) {
    switch (error.type) {
      case 'StripeCardError':
        return {
          statusCode: error.statusCode,
          body: `A payment error occurred: ${error.message}`
        }
      case 'StripeInvalidRequestError':
        return {
          statusCode: error.statusCode,
          body: `An invalid request occurred: ${error.message}`
        }
      default:
        return {
          statusCode: error.statusCode,
          body: `A problem occurred: ${error.message}`
        }
    }
  }
}

export { handler }
