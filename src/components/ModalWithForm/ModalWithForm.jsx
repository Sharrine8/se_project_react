import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  onClose,
  isOpen,
  onSubmit,
  buttonText,
  handleModalSwitch,
  switchButton,
  values = {},
  handleChange,
}) {
  const isFormValid =
    values &&
    Object.values(values).every((value) => {
      return value && value.trim() !== "";
    });
  return (
    <div className={`modal ${isOpen === isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close-btn" />
        <form onSubmit={onSubmit} className="modal__form">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { onChange: handleChange })
          )}
          <div className="modal__form-btns">
            <button
              type="submit"
              className="modal__submit"
              disabled={!isFormValid}
            >
              {buttonText}
            </button>
            <button
              className={`modal__switch-btn ${
                isOpen ? "modal__switch-btn_active" : ""
              }`}
              onClick={handleModalSwitch}
              type="button"
            >
              {switchButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
