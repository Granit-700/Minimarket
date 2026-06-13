import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";
import type { LayoutProps } from "../../types";

const Layout = ({ categories }: LayoutProps) => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <NavBar categories={categories} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
