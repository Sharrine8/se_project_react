import "./ItemCard.css";

function ItemCard({ props, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(props);
  };

  return (
    <div className="item-card" onClick={handleCardClick}>
      <h2 className="item-card__info">{props.name}</h2>
      <img src={props.link} alt={props.name} className="item-card__image"></img>
    </div>
  );
}

export default ItemCard;
