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
import ProductRating from "./ProductRating";

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
          {title ||
            "I'm baby jianbing meh health goth craft beer. Lo-fi artisan meditation wayfarers photo booth health goth chicharrones roof party tote bag jean shorts cliche post-ironic. Ethical JOMO butcher distillery lumbersexual bruh. Fanny pack blog XOXO portland semiotics ascot"}
        </Typography>
        <ProductRating {...rating} size="small" />
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
