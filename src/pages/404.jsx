import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";

import DefaultLayout from "@/components/layouts/DefaultLayout";

export default function NotFoundPage() {
  return (
    <Box
      textAlign="center"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography variant="h1" gutterBottom>
        Page not found
      </Typography>
      <Link component={NextLink} href="/">
        Back To Home Page
      </Link>
    </Box>
  );
}
