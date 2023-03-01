import { useState } from "react";
import { Box, Button, Link, Paper, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";

import DefaultLayout from "@/components/layouts/DefaultLayout";
import { loginSchema } from "@/utils/formValidation";

export default function Login({ activeTheme, toggleTheme }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values) => {
    setIsLoading(true);
    const { email, password } = values;
    signIn("credentials", {
      callbackUrl: "/",
      email,
      password,
    });
    setIsLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });

  return (
    <DefaultLayout
      activeTheme={activeTheme}
      toggleTheme={toggleTheme}
      title="Login - Baylei's"
    >
      <Paper
        sx={{
          textAlign: "center",
          p: 3,
          width: "90%",
          maxWidth: "500px",
          mx: "auto",
        }}
      >
        <Typography variant="h1" fontSize="3rem" sx={{ mb: 7 }}>
          Login
        </Typography>

        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Box mb={4}>
            <TextField
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoFocus
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
              color="primary"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </form>
        <Box pt={2}>
          <Typography>
            Don't have an account{" "}
            <Link component={NextLink} href="/register">
              Register
            </Link>
          </Typography>
        </Box>
      </Paper>
    </DefaultLayout>
  );
}
