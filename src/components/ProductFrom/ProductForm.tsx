import { useState } from "react";
import "./ProductForm.css";
import { cardList, categories } from "../../../db";
import { useNavigate, useParams } from "react-router-dom";
import type { ProductCardType } from "../../types";

const ProductForm = () => {
  const { id } = useParams();

  let card: ProductCardType | undefined;

  if (id) {
    console.log(id);
    card = cardList.find((card) => card.id === id);
    console.log(card);
  }

  const createProduct = (prod: Omit<ProductCardType, "id">) => {
    cardList.push({
      id: crypto.randomUUID(),
      ...prod,
    });
  };

  const updateProduct = (prod: Omit<ProductCardType, "id">) => {
    const index = cardList.findIndex((card) => card.id === id);
    console.log(index);

    if (!id) throw new Error("ID not found");

    cardList.splice(index, 1, { id, ...prod });
  };

  const createNewCategory = (newCategory: string) => {
    const isNewCategory = categories.every((cat) => cat.id !== newCategory);

    if (isNewCategory) categories.push({ id: newCategory });
  };

  const [title, setTitle] = useState(card?.title || "");
  const [imageURL, setImageURL] = useState(card?.imageURL || "");
  const [description, setDescription] = useState(card?.description || "");
  const [price, setPrice] = useState(card?.price || "");
  const [category, setCategory] = useState(card?.category || "");

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
          type="text"
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
          if (!id) {
            createProduct({
              imageURL,
              title,
              description,
              price,
              category: category === "new" ? newCategory : category,
            });
            console.log("create");
          } else {
            updateProduct({
              imageURL,
              title,
              description,
              price,
              category: category === "new" ? newCategory : category,
            });
            console.log("update");
          }
          const target = category === "new" ? newCategory : category;
          createNewCategory(target);
          navigate(`/${target}`);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default ProductForm;
