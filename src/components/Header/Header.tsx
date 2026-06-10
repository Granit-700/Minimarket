import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div>Global Products</div>
      <div className="nav">
        <Link to="/">Products</Link>
        <div></div>
        <Link to="/products/add">Add new product</Link>
      </div>
    </header>
  );
};

export default Header;
