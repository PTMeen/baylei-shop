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
    // Create PaymentIntent as soon as the page loads
    // fetch("/api/create-payment-intent", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ items: cartItems }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setClientSecret(data.clientSecret));

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
