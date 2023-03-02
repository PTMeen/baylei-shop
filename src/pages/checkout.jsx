import { useState } from "react";
import { Box, Stack } from "@mui/material";

import DefaultLayout from "@/components/layouts/DefaultLayout";
import CheckoutStepper from "@/components/CheckoutStepper";
import CheckoutForms from "@/components/CheckoutForms";

function CheckoutScreen({ activeTheme, toggleTheme }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => setActiveStep((prev) => prev + 1);

  return (
    <DefaultLayout
      title="Checkout - Baylei's"
      activeTheme={activeTheme}
      toggleTheme={toggleTheme}
    >
      <Box width="85%" maxWidth="600px" mx="auto">
        <Stack direction={{ xs: "column" }} gap={4}>
          <CheckoutStepper
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
          <CheckoutForms
            handleNextStep={handleNextStep}
            activeStep={activeStep}
            activeTheme={activeTheme}
          />
        </Stack>
      </Box>
    </DefaultLayout>
  );
}

CheckoutScreen.requiredAuth = true;

export default CheckoutScreen;
