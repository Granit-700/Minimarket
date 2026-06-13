import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "./reset.css";
import "./style.css";
import ProductsPage from "../pages/ProductsPage";
import ProductForm from "../components/ProductFrom/ProductForm";
import { cardList, categories as initCategories } from "../../db";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(cardList);
  const [categories, setCategories] = useState(initCategories);

  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Layout categories={categories} />}>
        <Route
          index
          element={
            <ProductsPage products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="products/add"
          element={
            <ProductForm
              key={location.pathname}
              products={products}
              categories={categories}
              setProducts={setProducts}
              setCategories={setCategories}
            />
          }
        />
        <Route
          path="products/:id/edit"
          element={
            <ProductForm
              key={location.pathname}
              products={products}
              categories={categories}
              setProducts={setProducts}
              setCategories={setCategories}
            />
          }
        />
        <Route
          path=":category"
          element={
            <ProductsPage products={products} setProducts={setProducts} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
