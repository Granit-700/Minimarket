const Main = () => {
  return (
    <main>
      <h2>All</h2>
      <ul>
        <li>
          <div className="card_header">
            <button className="edit_btn"></button>
            <button className="delete_btn"></button>
          </div>
          <div className="card_image"></div>
          <div className="card_text">
            <h3>title</h3>
            <p>Lorem, ipsum dolor.</p>
            <span>150 KGS</span>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Main;
