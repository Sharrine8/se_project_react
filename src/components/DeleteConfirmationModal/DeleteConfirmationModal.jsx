import React from "react";

function DeleteConfirmationModal({ isOpen, onClose, onDeleteItem }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__delete-modal">
        <button
          className="modal__close-btn"
          onClick={onClose}
          type="button"
        ></button>
        <div className="modal__warning">
          <p className="modal__text">
            Are you sure you want to delete this item?
          </p>
          <p className="modal__text">This action is irreversible.</p>
        </div>
        <button
          className="modal__delete-btn modal__text"
          onClick={onDeleteItem}
        >
          Yes, delete item
        </button>
        <button
          className="modal__cancel-btn modal__text"
          onClick={onClose}
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
