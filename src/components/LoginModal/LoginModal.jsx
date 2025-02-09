import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/hooks";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  isOpen,
  onLogin,
  handleSigninClick,
  handleCloseModal,
  buttonText,
  handleModalSwitch,
}) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }

  const handleResetInputs = () => {
    // setValues({ email: "", password: "" });
    setPassword("");
    setEmail("");
  };

  useEffect(handleResetInputs, [isOpen]);

  const switchButton = "or Sign Up";

  return (
    <ModalWithForm
      title="Login"
      onClose={handleCloseModal}
      isOpen={isOpen}
      handleSigninClick={handleSigninClick}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      switchButton={switchButton}
      handleModalSwitch={handleModalSwitch}
      values={values}
      handleChange={handleChange}
    >
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          name="email"
          id="email"
          placeholder="Email"
          minLength="5"
          maxLength="40"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          name="password"
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
