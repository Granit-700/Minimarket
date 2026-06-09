import CardItem from "../CardItem";
import "./Main.css";

type MainProps = {
  cardList: {
    id: string;
    imageURL: string;
    title: string;
    description: string;
    price: string;
  }[];
};

const Main = ({ cardList }: MainProps) => {
  return (
    <main>
      <h2>All</h2>
      <ul className="cardlist">
        {cardList.map((card) => {
          return <CardItem card={card} key={card.id} />;
        })}
      </ul>
    </main>
  );
};

export default Main;
