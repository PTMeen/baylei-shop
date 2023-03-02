import mongoose from "mongoose";

import connectMongo from "@/db/connectMongo";
import Product from "@/models/Product";

// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = async (items) => {
  const _ids = items.map((item) => mongoose.Types.ObjectId(item._id));

  await connectMongo();
  const products = await Product.find({
    _id: {
      $in: _ids,
    },
  });

  const priceMap = {};
  products.map((product) => {
    priceMap[product._id] = product.price * 100;
  });

  const totalPrice = items.reduce((acc, curr) => {
    return acc + curr.qty * priceMap[curr._id];
  }, 0);

  return totalPrice;
};

export default async function handler(req, res) {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: await calculateOrderAmount(items),
    currency: "USD",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
