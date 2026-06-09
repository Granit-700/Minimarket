import Header from "../Header/Header";
import Main from "../Main/Main";
import NavBar from "../NavBar";
import "./Layout.css";
import { cardList } from "../../../db";
import { useParams } from "react-router-dom";

const Layout = () => {
  const { category = "all" } = useParams();

  const filtered = cardList.filter(
    (card) => category === "all" || card.category === category
  );

  return (
    <div className="container">
      <Header />
      <div className="content">
        <NavBar />
        <Main cardList={filtered} />
      </div>
    </div>
  );
};

export default Layout;
