import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, card, onClose, onDeleteItem }) {
  const user = useContext(CurrentUserContext);
  const isOwn = card.owner === user._id;
  const itemDeleteButtonClassName = `modal__delete-button ${
    isOwn ? "" : "modal__delete-button_hidden"
  }`;
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__image-content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-btn"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__left">
            <p className="modal__text">{card.name}</p>
            <p className="modal__text">Weather: {card.weather}</p>
          </div>
          <div className="modal__right">
            {isOwn && (
              <button
                type="button"
                className={itemDeleteButtonClassName}
                onClick={onDeleteItem}
              >
                Delete item
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
