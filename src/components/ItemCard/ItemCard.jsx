import "./ItemCard.css";
import { useContext } from "react";
import liked from "../../assets/liked-btn.svg";
import unliked from "../../assets/unliked-btn.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ props, onCardClick, OnLikeClick }) {
  const user = useContext(CurrentUserContext);
  const handleCardClick = () => {
    onCardClick(props);
  };
  const isLiked = props.likes.some((id) => id === user._id);

  const handleLike = () => {
    OnLikeClick({ _id: props._id, isLiked, user });
  };

  return (
    <div className="card">
      <div className="card__header">
        <h2 className="card__info">{props.name}</h2>
        <button
          className={`card__like-btn ${
            user.name ? "card__like-btn_active" : ""
          }`}
          onClick={handleLike}
        >
          <img
            alt={user.name}
            src={isLiked ? liked : unliked}
            className="card__like-img"
          />
        </button>
      </div>
      <img
        onClick={handleCardClick}
        src={props.imageUrl}
        alt={props.name}
        className="card__image"
      ></img>
    </div>
  );
}

export default ItemCard;
