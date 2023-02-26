import DefaultLayout from "@/components/layouts/DefaultLayout";
import Products from "@/components/Products";
import SearchAndFilter from "@/components/SearchAndFilter";
import { connect } from "@/db/db";
import Product from "@/models/Product";
import { convertDocToObj } from "@/utils/convertDocToObj";
import { Typography } from "@mui/material";
import { disconnect } from "mongoose";

export const getStaticProps = async () => {
  await connect();
  const products = await Product.find({}).lean();
  await disconnect();

  return {
    props: {
      products: products.map(convertDocToObj),
    },
  };
};

const Home = ({ toggleTheme, activeTheme, products }) => {
  return (
    <DefaultLayout
      title="Baylei's shop"
      s
      toggleTheme={toggleTheme}
      activeTheme={activeTheme}
    >
      {/* <SearchAndFilter /> */}
      <Products products={products} />
    </DefaultLayout>
  );
};
export default Home;
