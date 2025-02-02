import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({
  handleCardClick,
  clothingItems,
  handleAddClick,
  onCardLike,
}) {
  const user = useContext(CurrentUserContext);
  return (
    <div className="clothes-section">
      <div className="clothes-section__info">
        <p>Your items</p>
        <button className="clothes-section__add-btn" onClick={handleAddClick}>
          + Add new
        </button>
      </div>
      <ul className="cards__list">
        {clothingItems.map((item) => {
          if (user._id === item.owner) {
            return (
              <ItemCard
                key={item._id}
                props={item}
                onCardClick={handleCardClick}
                onCardLike={onCardLike}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
