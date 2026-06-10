import type { ProductListProps } from "../../types";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = ({ products }: ProductListProps) => {
  return (
    <main className="main">
      <h2>All</h2>
      <ul className="cardlist">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ul>
    </main>
  );
};

export default ProductList;
