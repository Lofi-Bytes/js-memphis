import { Handler } from '@netlify/functions'


const handler: Handler = async (event, context) => {
  const body = JSON.parse(event.body)
  const paymentAmount = body.paymentAmount
  const paymentIntentId = body.paymentIntentId

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

  try {
    const paymentIntent = await stripe.paymentIntents.update(
      paymentIntentId,
      {"amount": paymentAmount}
    )

    return {
      statusCode: 200,
      body: JSON.stringify({
        amount: paymentIntent.amount
      }),
      // log: console.log(paymentIntent.amount)
    }
  }
  catch (error) {
    // console.log(error)
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
