interface CardItemProps {
  card: {
    id: string;
    imageURL: string;
    title: string;
    description: string;
    price: string;
  };
}

const CardItem = (props: CardItemProps) => {
  const {
    card: { imageURL, title, description, price },
  } = props;
  return (
    <li>
      <div className="card_header">
        <button className="edit_btn">
          <img src="" alt="" />
        </button>
        <button className="delete_btn">
          <img src="" alt="" />
        </button>
      </div>
      <img src={imageURL} alt="" className="card_image" />
      <div className="card_text">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </li>
  );
};

export default CardItem;
