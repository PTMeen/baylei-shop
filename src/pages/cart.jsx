import { Grid, Link, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import NextLink from "next/link";

import { getCartItems } from "@/features/cart/cartSlice";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import CartSummary from "@/components/CartSummary";
import CartItemsTable from "@/components/CartItemsTable";

export default function CartScreen({ activeTheme, toggleTheme }) {
  const cartItems = useSelector(getCartItems);

  return (
    <DefaultLayout
      title="Cart | Baylei's"
      activeTheme={activeTheme}
      toggleTheme={toggleTheme}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {cartItems.length ? (
            <CartItemsTable cartItems={cartItems} />
          ) : (
            <Paper sx={{ p: 5, textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="h3" gutterBottom>
                Your cart is empty
              </Typography>
              <Link component={NextLink} href="/" underline="hover">
                Brows Products
              </Link>
            </Paper>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <CartSummary />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}
