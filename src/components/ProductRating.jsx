import { Box, Rating, Typography, useTheme } from "@mui/material";

const ProductRating = ({ rate, count, size = "medium" }) => {
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="flex-end" gap={1}>
      <Rating size={size} value={rate} precision={0.5} readOnly />
      <Typography variant="body2" color={theme.palette.neutral[400]}>
        {rate} ({count} reviews)
      </Typography>
    </Box>
  );
};
export default ProductRating;
