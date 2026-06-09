import Header from "../Header/Header";
import Main from "../Main/Main";
import NavBar from "../NavBar";
import "./Layout.css"

const Layout = () => {
  const cardList = [
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
    {
      id: crypto.randomUUID(),
      imageURL: "",
      title: "title",
      description: "hello world",
      price: "150 KGS",
    },
  ];

  return (
    <div className="container">
      <Header />
      <div className="content">
        <NavBar />
        <Main cardList={cardList} />
      </div>
    </div>
  );
};

export default Layout;
