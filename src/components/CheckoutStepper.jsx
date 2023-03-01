import {
  Box,
  Button,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeIcon from "@mui/icons-material/Home";

const steps = ["Address", "Payment", "Order"];

export default function CheckoutStepper({ activeStep, setActiveStep }) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(
    `(width <= ${theme.breakpoints.values.md}px)`
  );

  const handleNextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

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
