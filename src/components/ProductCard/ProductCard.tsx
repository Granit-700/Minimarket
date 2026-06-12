import { Link } from "react-router-dom";
import type { ProductCardProps } from "../../types";
import "./ProductCard.css";

const ProductCard = (props: ProductCardProps) => {
  const {
    product: { id, imageURL, title, description, price },
    setProducts,
  } = props;

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <li className="card">
      <div className="card_header">
        <button className="card_btn">
          <Link to={`/products/${id}/edit`}>
            <img src="src/assets/icons/edit.svg" alt="edit" />
          </Link>
        </button>
        <button className="card_btn" onClick={() => deleteProduct(id)}>
          <img src="src/assets/icons/delete.svg" alt="delete" />
        </button>
      </div>
      <img
        src={imageURL || "src/assets/icons/image-default.svg"}
        alt={title}
        className="card_image"
      />
      <div className="card_text">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </li>
  );
};

export default ProductCard;
