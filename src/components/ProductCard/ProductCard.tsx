import { Link } from "react-router-dom";
import type { ProductCardProps } from "../../types";
import "./ProductCard.css";
import { useAppStore } from "../../api/appStore";
import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import defaultImage from "../../assets/icons/image-default.svg";

const ProductCard = (props: ProductCardProps) => {
  const {
    product: { id, imageURL, title, description, price },
  } = props;

  const { deleteProduct } = useAppStore();

  return (
    <li className="card">
      <div className="card_header">
        <button className="card_btn">
          <Link to={`/products/${id}/edit`}>
            <img src={editIcon} alt="edit" />
          </Link>
        </button>
        <button className="card_btn" onClick={() => deleteProduct(id)}>
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>
      <img src={imageURL || defaultImage} alt={title} className="card_image" />
      <div className="card_text">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{price} KGS</span>
      </div>
    </li>
  );
};

export default ProductCard;
