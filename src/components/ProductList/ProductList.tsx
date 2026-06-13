import { useParams } from "react-router-dom";
import type { ProductListProps } from "../../types";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = ({ products, setProducts }: ProductListProps) => {
  const { category = "All" } = useParams();

  return (
    <main className="main">
      <h2>{category}</h2>
      <ul className="cardlist">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              setProducts={setProducts}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default ProductList;
