exports.handler = async function () {

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const { amount, currency = "gbp" } = JSON.parse(event.body);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    return {
      statusCode: 200, // http status code
      body: JSON.stringify({
        paymentIntent
      }),
    };
  } catch (e) {
    // handle errors
  }
}
