import { IconButton, Box } from "@mui/material";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
const ThemeToggler = ({ activeTheme, onClick }) => {
  return (
    <Box>
      <IconButton onClick={onClick}>
        {activeTheme === "light" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeRoundedIcon />
        )}
      </IconButton>
    </Box>
  );
};
export default ThemeToggler;
