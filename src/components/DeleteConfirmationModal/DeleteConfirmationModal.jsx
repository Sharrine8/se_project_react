import React from "react";

function DeleteConfirmationModal({ isOpen, onClose, onDeleteItem }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <button
          className="modal__close"
          onClick={onClose}
          type="button"
        ></button>
        <p className="modal__text">
          Are you sure you want to delete this item?
        </p>
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
