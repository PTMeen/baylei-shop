import { Grid } from "@mui/material";

import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <Grid container spacing={{ xs: 4, md: 6 }}>
      {products.map((product) => {
        return (
          <Grid item xl={3} md={6} xs={12} key={product._id}>
            <ProductCard {...product} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Products;
