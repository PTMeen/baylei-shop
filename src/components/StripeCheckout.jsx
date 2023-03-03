import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";

import StripeCheckoutForm from "./StripeCheckoutForm";
import { useSelector } from "react-redux";
import { getCartItems } from "@/features/cart/cartSlice";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function StripePayment({ activeTheme }) {
  const cartItems = useSelector(getCartItems);
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    axios
      .post("/api/create-payment-intent", { items: cartItems })
      .then((response) => setClientSecret(response.data.clientSecret));
  }, []);

  const appearance = {
    theme: activeTheme === "light" ? "stripe" : "night",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripeCheckoutForm />
        </Elements>
      )}
    </div>
  );
}
