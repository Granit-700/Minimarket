import type { ProductListProps } from "../../types";
import CardItem from "../ProductCard/ProductCard";
import "./ProductList.css";

const Main = ({ products }: ProductListProps) => {
  return (
    <main className="main">
      <h2>All</h2>
      <ul className="cardlist">
        {products.map((product) => {
          return <CardItem product={product} key={product.id} />;
        })}
      </ul>
    </main>
  );
};

export default Main;
