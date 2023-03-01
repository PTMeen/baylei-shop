import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { shippingAddressSchema } from "@/utils/formValidation";
import { useFormik } from "formik";

export default function ShippingAddressForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      postalCode: "",
      country: "",
      address: "",
    },
    validationSchema: shippingAddressSchema,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Paper sx={{ p: { xs: 3, md: 5 }, width: "100%" }}>
      <Typography
        variant="h2"
        fontSize={{ xs: "1rem", md: "2rem" }}
        fontWeight="bold"
        gutterBottom
      >
        Shipping Address
      </Typography>
      <Box mt={4}>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Stack direction={{ xs: "column", md: "row" }} gap={2}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              size="small"
              fullWidth
              autoComplete="off"
              autoFocus
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              size="small"
              fullWidth
              autoComplete="off"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Stack>
          <Stack direction={{ xs: "column", md: "row" }} gap={2} my={3}>
            <TextField
              id="postalCode"
              name="postalCode"
              label="Postal Code"
              size="small"
              fullWidth
              autoComplete="off"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              error={
                formik.touched.postalCode && Boolean(formik.errors.postalCode)
              }
              helperText={formik.touched.postalCode && formik.errors.postalCode}
            />
            <TextField
              id="country"
              name="country"
              label="Country"
              size="small"
              fullWidth
              autoComplete="off"
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
          </Stack>
          <Box my={3}>
            <TextField
              id="address"
              name="address"
              label="Address"
              size="small"
              fullWidth
              autoComplete="off"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Box>
          <Stack direction="row" justifyContent="flex-end" gap={2}>
            <Button
              type="button"
              variant="outlined"
              onClick={formik.handleReset}
            >
              Reset
            </Button>
            <Button variant="contained" type="submit">
              Next
            </Button>
          </Stack>
        </form>
      </Box>
    </Paper>
  );
}
