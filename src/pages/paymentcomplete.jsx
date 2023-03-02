import { resetCartItems } from "@/features/cart/cartSlice";
import { Box, Typography, Link, useTheme } from "@mui/material";
import NextLink from "next/link";
import { useDispatch } from "react-redux";

export default function paymentComplete() {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center">
        <Typography
          variant="h1"
          fontSize="3rem"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          Payment Completed
        </Typography>
        <Link
          component={NextLink}
          fontSize="1rem"
          href="/"
          color={theme.palette.neutral[400]}
          underline="hover"
          onClick={() => dispatch(resetCartItems())}
        >
          Back to Home Page
        </Link>
      </Box>
    </Box>
  );
}
