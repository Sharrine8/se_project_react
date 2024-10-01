import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ handleCardClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__info">
        <p>Your items</p>
        <button className="clothes-section__add-btn">+ Add new</button>
      </div>
      <ul className="cards__list">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              props={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
