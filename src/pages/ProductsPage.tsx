import ProductList from "../components/ProductList/ProductList";
import { useParams } from "react-router-dom";
import type { ProductsPageProps } from "../types";

const ProductsPage = ({ products }: ProductsPageProps) => {
  const { category = "all" } = useParams();

  const filtered = products.filter(
    (card) => category === "all" || card.category === category
  );

  return <ProductList products={filtered} />;
};

export default ProductsPage;
