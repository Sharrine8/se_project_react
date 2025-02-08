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
}) {
  return (
    <div className={`modal ${isOpen === isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close-btn" />
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__form-btns">
            <button type="submit" className="modal__submit">
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
