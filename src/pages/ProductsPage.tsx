import ProductList from "../components/ProductList/ProductList";
import { useParams } from "react-router-dom";
import type { ProductsPageProps } from "../types";
import { useEffect } from "react";
import { useAppStore } from "../api/appStore";

const ProductsPage = ({ products }: ProductsPageProps) => {
  const { category = "all" } = useParams();

  const filtered = products.filter(
    (card) => category === "all" || card.category === category
  );

  const { fetchProducts } = useAppStore();

  useEffect(() => {
    if (category === "all") {
      fetchProducts("all");
    } else {
      fetchProducts(category);
    }
  }, [fetchProducts, category]);

  return <ProductList products={filtered} />;
};

export default ProductsPage;
