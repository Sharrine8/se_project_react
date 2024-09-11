import "./ItemModal.css";

function ItemModal({ activeModal, card, onClose }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__image-content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-btn"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <p className="modal__text">{card.name}</p>
          <p className="modal__text">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
