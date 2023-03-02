import { Box } from "@mui/material";

import ShippingAddressForm from "./ShippingAddressForm";
import StripeCheckout from "./StripeCheckout";

export default function CheckoutForms({
  handleNextStep,
  activeStep,
  activeTheme,
}) {
  const content = [
    <ShippingAddressForm handleNextStep={handleNextStep} />,
    <StripeCheckout activeTheme={activeTheme} />,
  ];

  return <Box flexGrow={1}>{content[activeStep]}</Box>;
}
