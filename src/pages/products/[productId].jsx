import NextLink from "next/link";
import { Box, Button, Link, Paper, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useRouter } from "next/router";

import DefaultLayout from "@/components/layouts/DefaultLayout";
import connectMongo from "@/db/connectMongo";
import Product from "@/models/Product";
import { convertDocToObj } from "@/utils/convertDocToObj";
import ProductRating from "@/components/ProductRating";

export const getServerSideProps = async (context) => {
  try {
    await connectMongo();
    const { productId } = context.params;

    const product = await Product.findById(productId).lean();

    if (!product) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product: convertDocToObj(product),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const ProductDetail = ({ product, activeTheme, toggleTheme, serverError }) => {
  const theme = useTheme();

  return (
    <DefaultLayout activeTheme={activeTheme} toggleTheme={toggleTheme}>
      {serverError}
      {!product && <p>Product not found</p>}
      <Box mb={3}>
        <Link component={NextLink} href="/" underline="none">
          Back To Products
        </Link>
      </Box>
      <Box py={2}>
        <Box display={{ md: "flex" }} gap={{ md: 5 }} component="section">
          {/* product image */}
          <Box textAlign={{ xs: "center", md: "left" }}>
            <Image
              style={{ borderRadius: "8px" }}
              src={product?.image}
              aly={product?.title}
              width={350}
              height={500}
            />
          </Box>
          {/* product info */}
          <Paper component="article" sx={{ p: 5, mt: { xs: 3, md: 0 } }}>
            <Typography
              variant="h4"
              component="h1"
              fontSize={{ xs: "1.5rem", md: "2rem" }}
              gutterBottom
            >
              {product?.title}
            </Typography>
            <Box pb={2}>
              <ProductRating {...product?.rating} />
            </Box>
            <Typography color={theme.palette.neutral[500]}>
              {product?.description}
            </Typography>

            <Button
              variant="contained"
              size="large"
              endIcon={<AddShoppingCartIcon />}
              sx={{ mt: 5 }}
            >
              Add To Cart
            </Button>
          </Paper>
        </Box>
      </Box>
    </DefaultLayout>
  );
};
export default ProductDetail;
