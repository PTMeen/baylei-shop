import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { getCartItems, getTotalCartItemsQty } from "@/features/cart/cartSlice";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function CartSummary() {
  const router = useRouter();

  const cartItems = useSelector(getCartItems);
  const totalCartItemsQty = useSelector(getTotalCartItemsQty);
  const totalPrice = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

  return (
    <Paper sx={{ p: 3 }} elevation={3}>
      <Typography variant="h2" fontSize="1.5rem" gutterBottom>
        Cart Summary
      </Typography>
      <Typography>
        subtotal ({totalCartItemsQty} items): ${totalPrice.toFixed(2)}
      </Typography>
      <Box mt={4}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          disabled={!totalCartItemsQty}
          onClick={() => router.push("/checkout")}
        >
          Checkout
        </Button>
      </Box>
    </Paper>
  );
}
