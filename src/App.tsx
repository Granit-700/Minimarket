import Header from "./components/Header/Header";
import Main from "./components/Layout";
import NavBar from "./components/NavBar";
import "./style.css";

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <NavBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
