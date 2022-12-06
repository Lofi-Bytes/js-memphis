import { Handler } from '@netlify/functions'


const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    })
  }
}

export { handler }
