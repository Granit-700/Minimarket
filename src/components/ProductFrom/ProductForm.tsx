import { useState } from "react";
import "./ProductForm.css";
import { categories } from "../../../db";

const ProductForm = () => {
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");

  return (
    <div className="product-form">
      <div>
        <p>Title</p>
        <input type="text" />
      </div>
      <div>
        <p>Image URL</p>
        <input type="text" />
      </div>
      <div>
        <p>Description</p>
        <input type="text" />
      </div>
      <div>
        <p>Price</p>
        <input type="number" />
      </div>
      <div className="select-category">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select category</option>

          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
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
      <button type="submit">SUBMIT</button>
    </div>
  );
};

export default ProductForm;
