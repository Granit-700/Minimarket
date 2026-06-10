import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
