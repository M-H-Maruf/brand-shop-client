import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const Products = () => {
  const { brand } = useParams();
  const products = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Nexus | Products | {brand}</title>
      </Helmet>
      This is {brand} products
      it has {products.length} products
    </div>
  );
};

export default Products;
