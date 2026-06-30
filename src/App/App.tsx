import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "./reset.css";
import "./style.css";
import ProductsPage from "../pages/ProductsPage";
import ProductForm from "../components/ProductFrom/ProductForm";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useAppStore } from "../api/appStore";

function App() {
  const location = useLocation();

  const { products, fetchAll } = useAppStore();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsPage products={products} />} />
          <Route
            path="products/add"
            element={
              <ProductForm key={location.pathname} products={products} />
            }
          />
          <Route
            path="products/:id/edit"
            element={
              <ProductForm key={location.pathname} products={products} />
            }
          />
          <Route
            path=":category"
            element={<ProductsPage products={products} />}
          />
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;
