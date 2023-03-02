import { Box, Step, StepLabel, Stepper, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const steps = ["Address", "Place Order"];

export default function CheckoutStepper({ activeStep, setActiveStep }) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(
    `(width <= ${theme.breakpoints.values.md}px)`
  );

  return (
    <Box>
      <Stepper
        activeStep={activeStep}
        alternativeLabel={smallScreen}
        orientation={"horizontal"}
      >
        {steps.map((step, index) => {
          return (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
