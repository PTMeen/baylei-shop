import DefaultLayout from "@/components/layouts/DefaultLayout";
import Products from "@/components/Products";
import connectMongo from "@/db/connectMongo";
import Product from "@/models/Product";
import { convertDocToObj } from "@/utils/convertDocToObj";
import { disconnect } from "mongoose";

export const getStaticProps = async () => {
  try {
    await connectMongo();
    const products = await Product.find({}).lean();
    await disconnect();
    return {
      props: {
        products: products.map(convertDocToObj),
      },
    };
  } catch (error) {
    return {
      props: {
        serverError: "Can not connect to DB.",
      },
    };
  }
};

const Home = ({ toggleTheme, activeTheme, products }) => {
  return (
    <DefaultLayout
      title="Baylei's shop"
      s
      toggleTheme={toggleTheme}
      activeTheme={activeTheme}
    >
      <Products products={products} />
    </DefaultLayout>
  );
};
export default Home;
