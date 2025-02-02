import "./ItemCard.css";
import { useState, useContext, useEffect } from "react";
import liked from "../../assets/liked-btn.svg";
import unliked from "../../assets/unliked-btn.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ props, onCardClick, onCardLike }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLikedBy, setIsLikedBy] = useState([]);
  const user = useContext(CurrentUserContext);
  const handleCardClick = () => {
    onCardClick(props);
  };

  const handleLike = () => {
    console.log(isLiked, isLikedBy);
    onCardLike({ _id: props._id, isLiked: props.likes });
    setIsLiked(!isLiked);
    setIsLikedBy([]);
    console.log(props);
    console.log(isLiked, isLikedBy);
  };

  useEffect(() => {
    if (props.likes.includes(user._id) || isLikedBy.includes(user._id)) {
      setIsLiked(true);
    }
  }, [user]);

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
          <img src={isLiked ? liked : unliked} className="card__like-img" />
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
