import { Box, Button, Link, Paper, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import { useFormik } from "formik";

import DefaultLayout from "@/components/layouts/DefaultLayout";
import { registerSchema } from "@/utils/formValidation";

export default function Register({ activeTheme, toggleTheme }) {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: handleSubmit,
  });

  return (
    <DefaultLayout
      activeTheme={activeTheme}
      toggleTheme={toggleTheme}
      title="Register - Baylei's"
    >
      <Paper
        elevation={4}
        sx={{
          textAlign: "center",
          p: 3,
          width: "90%",
          maxWidth: "500px",
          mx: "auto",
        }}
      >
        <Typography variant="h1" fontSize="3rem" sx={{ mb: 7 }}>
          Register
        </Typography>

        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Box mb={4}>
            <TextField
              id="name"
              name="name"
              label="Name"
              fullWidth
              autoFocus
              color="primary"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>
          <Box mb={4}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              fullWidth
              color="primary"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box mb={6}>
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>
          <Box mb={6}>
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              fullWidth
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
          </Box>

          <Button type="submit" variant="contained" fullWidth size="large">
            Submit
          </Button>
        </form>
        <Box pt={2}>
          <Typography>
            Already have an account{" "}
            <Link component={NextLink} href="/login">
              Login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </DefaultLayout>
  );
}
