import Header from "./components/Header/Header";
import Main from "./components/Layout";
import NavBar from "./components/NavBar";
import "./style.css";

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

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <NavBar />
        <Main cardList={cardList} />
      </div>
    </div>
  );
}

export default App;
