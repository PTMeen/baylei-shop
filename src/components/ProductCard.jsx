import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  Typography,
  Rating,
  Box,
  useTheme,
} from "@mui/material";
import NextLink from "next/link";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({ image, title, rating, _id }) => {
  const theme = useTheme();

  return (
    <Card sx={{ width: "100%", borderRadius: 2 }}>
      <CardMedia image={image} sx={{ height: { xs: 250, md: 250 } }} />
      <CardContent>
        <Typography
          noWrap
          gutterBottom
          variant="h4"
          fontSize={{ xs: "1rem", sm: "1.25rem" }}
          fontWeight="bold"
          component="div"
        >
          {title}
        </Typography>
        <Box display="flex" gap={1}>
          <Rating size="small" value={rating?.rate} readOnly />
          <Typography variant="body2" color={theme.palette.neutral[400]}>
            {rating?.rate} ({rating?.count} reviews)
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Link
          component={NextLink}
          underline="none"
          href={`/products/${_id}`}
          color={theme.palette.neutral[700]}
        >
          View Detail
        </Link>
        <IconButton color="primary">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
