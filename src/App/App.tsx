import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "./reset.css";
import "./style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/:category" element={<Layout />} />
    </Routes>
  );
}

export default App;
