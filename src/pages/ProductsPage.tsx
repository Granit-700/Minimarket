import ProductList from "../components/ProductList/ProductList";
import { cardList } from "../../db";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const { category = "all" } = useParams();

  const filtered = cardList.filter(
    (card) => category === "all" || card.category === category
  );

  return <ProductList products={filtered} />;
};

export default ProductsPage;
