import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "./reset.css";
import "./style.css";
import ProductsPage from "../pages/ProductsPage";
import ProductForm from "../components/ProductFrom/ProductForm";

function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsPage />} />
        <Route
          path="products/add"
          element={<ProductForm key={location.pathname} />}
        />
        <Route
          path="products/:id/edit"
          element={<ProductForm key={location.pathname} />}
        />
        <Route path=":category" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
