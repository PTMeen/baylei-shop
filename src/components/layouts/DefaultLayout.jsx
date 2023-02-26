import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Link,
  Menu,
  MenuItem,
  Button,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";
import ThemeToggler from "../ThemeToggler";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const DefaultLayout = ({ children, toggleTheme, title, activeTheme }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Container
        maxWidth="xl"
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        {/* header */}
        <Stack direction="row" alignItems="center" py={2}>
          {/* header left */}
          <Link component={NextLink} href="/" underline="none">
            <Typography variant="brand" variantMapping="p" fontSize="2rem">
              Baylei's
            </Typography>
          </Link>

          {/* header right */}
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            flexGrow={1}
            gap={3}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <ThemeToggler onClick={toggleTheme} activeTheme={activeTheme} />
            <Link
              component={NextLink}
              href="/cart"
              underline="none"
              color="text.primary"
            >
              <ShoppingCartIcon fontSize="medium" />
            </Link>

            <Link
              component={NextLink}
              href="/cart"
              underline="none"
              fontWeight="bold"
              sx={(theme) => ({
                alignSelf: "center",
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                px: 3,
                py: 1,
                borderRadius: "15px",
              })}
            >
              Login
            </Link>
          </Stack>
          <Box
            flexGrow={1}
            textAlign="right"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <IconButton
              size="large"
              aria-controls={open ? "navigation-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="navigation-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "navigation-menu",
              }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                Cart
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                Login
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  toggleTheme();
                }}
              >
                <ListItemIcon>
                  {activeTheme === "light" ? (
                    <DarkModeOutlinedIcon />
                  ) : (
                    <LightModeRoundedIcon />
                  )}
                </ListItemIcon>
                {activeTheme === "light" ? "Use dark mode" : "Use light mode"}
              </MenuItem>
            </Menu>
          </Box>
        </Stack>

        {/* content */}
        <Box flexGrow={1} my={5}>
          {children}
        </Box>

        {/* footer */}
        <Box py={1} textAlign="center">
          <Typography sx={{ opacity: 0.7 }}>
            Copyright © {new Date().getFullYear()} Baylei's
          </Typography>
        </Box>
      </Container>
    </>
  );
};
export default DefaultLayout;
