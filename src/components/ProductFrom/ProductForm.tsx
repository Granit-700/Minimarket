import { useState } from "react";
import "./ProductForm.css";
import { useNavigate, useParams } from "react-router-dom";
import type {
  ProductCardType,
  ProductFormProps,
  requiredValue,
} from "../../types";
import { toast } from "react-toastify";

const ProductForm = (props: ProductFormProps) => {
  const { products, categories, setProducts, setCategories } = props;

  const { id } = useParams();

  let card: ProductCardType | undefined;

  if (id) {
    console.log(id);
    card = products.find((card) => card.id === id);
    console.log(card);
  }

  const createProduct = (prod: Omit<ProductCardType, "id">) => {
    const newProducts = [...products, { id: crypto.randomUUID(), ...prod }];

    setProducts(newProducts);
  };

  const updateProduct = (prod: ProductCardType) => {
    if (!id) {
      toast.error("ID not found");
      throw new Error("ID not found");
    }

    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return prod;
      } else return product;
    });

    setProducts(updatedProducts);
  };

  const createNewCategory = (newCategory: string) => {
    const trimmedNewCategory = newCategory.trim();

    const findedCategory = categories.find(
      (cat) => cat.id === trimmedNewCategory
    );
    if (findedCategory) return;

    const newCategories = [...categories, { id: trimmedNewCategory }];
    setCategories(newCategories);
    toast.info("New category created");
  };

  const [requiredValue, setRequiredValue] = useState<requiredValue>({
    title: card?.title || "",
    price: card?.price || "",
    category: card?.category || "",
  });

  const [imageURL, setImageURL] = useState(card?.imageURL || "");
  const [description, setDescription] = useState(card?.description || "");

  const [errors, setErrors] = useState<requiredValue>({
    title: "",
    price: "",
    category: "",
  });

  const validate = (fields: requiredValue): requiredValue => {
    const newErrors: requiredValue = {
      title: "",
      price: "",
      category: "",
    };

    if (!fields.title!.trim()) newErrors.title = "This field is required!";
    if (!fields.price!.trim()) {
      newErrors.price = "This field is required!";
    } else if (isNaN(Number(fields.price))) {
      newErrors.price = "This filed only for number!";
    }
    if (!fields.category!.trim())
      newErrors.category = "Select or create category!";

    return newErrors;
  };

  const handleChange = (field: keyof requiredValue, value: string) => {
    setRequiredValue({ ...requiredValue, [field]: value });

    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const [newCategory, setNewCategory] = useState("");

  const navigate = useNavigate();

  const hundleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validate(requiredValue);

    const hasErrors = Object.values(newErrors).some((val) => val !== "");

    if (hasErrors) {
      setErrors(newErrors);
      toast.error("Invalid fields");
      return;
    }

    const currentCatogory =
      requiredValue.category === "new" ? newCategory : requiredValue.category;

    if (!currentCatogory.trim()) {
      toast.warning("Invalid fields");
      return;
    }

    if (!id) {
      createProduct({
        imageURL,
        title: requiredValue.title,
        description,
        price: requiredValue.price + " KGS",
        category: currentCatogory,
      });
    toast.success("Product create");
    } else {
      updateProduct({
        id,
        imageURL,
        title: requiredValue.title,
        description,
        price: requiredValue.price + " KGS",
        category: currentCatogory,
      });
    toast.success("Product update");
    }
    const target = currentCatogory;

    createNewCategory(target);

    navigate(`/${target}`);
  };

  return (
    <form className="product-form" onSubmit={hundleSubmit}>
      <div>
        <h3>Title</h3>
        <input
          type="text"
          value={requiredValue.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        {errors.title && <span className="error">{errors.title}</span>}
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
          value={requiredValue.price}
          onChange={(e) => handleChange("price", e.target.value)}
        />
        {errors.price && <span className="error">{errors.price}</span>}
      </div>
      <div className="select-category">
        <h3>Category</h3>
        <select
          value={requiredValue.category}
          onChange={(e) => {
            handleChange("category", e.target.value);
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

        {requiredValue.category === "new" && (
          <input
            type="text"
            placeholder="Category name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        )}
        {errors.category && <span className="error">{errors.category}</span>}
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default ProductForm;
