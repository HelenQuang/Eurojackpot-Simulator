const Stripe = require("stripe");

exports.createTransaction = async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        quantity: 1,
        price: req.body.id,
      },
    ],
    success_url: "http://localhost:3000/profile",
    cancel_url: "http://localhost:3000/transaction",
    customer_email: req.user.email,
    mode: "payment",
  });

  res.status(200).json({
    status: "success",
    url: session.url,
  });
};
