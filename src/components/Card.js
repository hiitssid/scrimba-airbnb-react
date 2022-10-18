const Card = () => {
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://runnersconnect.net/wp-content/uploads/2019/06/Katie-Zaferes-2-by-Tommy-Zaferes-e1560905773494.jpeg" alt="pp"
      />
      <div className="card-stats">
        <span>⭐</span>
        <span>5.0</span>
        <span className="grey">(6) ◉ </span>
        <span className="grey">USA</span>
      </div>

      <p>Life lessons with Katie Zaferes</p>
      <p className="price">
        <span className="bold">From $136 /</span> person
      </p>
    </div>
  );
};

export default Card;
