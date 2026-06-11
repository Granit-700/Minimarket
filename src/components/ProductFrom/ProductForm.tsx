import { useState } from "react";
import "./ProductForm.css";
import { cardList, categories } from "../../../db";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [newCategory, setNewCategory] = useState("");

  const navigate = useNavigate();

  return (
    <div className="product-form">
      <div>
        <h3>Title</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <h3>Image URL</h3>
        <input
          type="url"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <div>
        <h3>Description</h3>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <h3>Price</h3>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="select-category">
        <h3>Category</h3>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">Select category</option>

          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id}
            </option>
          ))}

          <option value="new">Create new...</option>
        </select>

        {category === "new" && (
          <input
            type="text"
            placeholder="Category name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        )}
      </div>
      <button
        type="submit"
        onClick={() => {
          cardList.push({
            id: crypto.randomUUID(),
            imageURL,
            title,
            description,
            price,
            category: category === "new" ? newCategory : category,
          });
          navigate("/");
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default ProductForm;
