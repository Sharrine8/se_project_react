function ItemModal({ activeModal, card, onClose, onDeleteItem }) {
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
          <div className="modal__left">
            <p className="modal__text">{card.name}</p>
            <p className="modal__text">Weather: {card.weather}</p>
          </div>
          <div className="modal__right">
            <button
              type="button"
              className="modal__delete-btn"
              onClick={onDeleteItem}
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
