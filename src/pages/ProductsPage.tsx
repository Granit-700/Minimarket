import ProductList from "../components/ProductList/ProductList";
import { cardList } from "../../db";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState(cardList);

  const { category = "all" } = useParams();

  const filtered = products.filter(
    (card) => category === "all" || card.category === category
  );

  return <ProductList products={filtered} setProducts={setProducts} />;
};

export default ProductsPage;
