import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div>Global Products</div>
      <div className="nav">
        <a href="#">Products</a>
        <div></div>
        <a href="#">Add new Product</a>
      </div>
    </header>
  );
};

export default Header;
