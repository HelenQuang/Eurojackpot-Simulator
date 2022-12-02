const Stripe = require("stripe");

exports.createTransaction = async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        quantity: 1,
        price_data: {
          unit_amount: req.body.amount.id,
          currency: "eur",
          product_data: {
            name: "Eurojackpot Simulator Topup Transaction",
          },
        },
      },
    ],
    success_url: `${req.protocol}://${req.get("host")}/profile`,
    cancel_url: `${req.protocol}://${req.get("host")}/transaction`,
    customer_email: req.user.email,
    mode: "payment",
  });

  res.status(200).json({
    status: "success",
    session,
  });
};
