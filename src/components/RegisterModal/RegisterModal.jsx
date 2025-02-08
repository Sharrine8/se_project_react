import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/hooks";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal";

const RegisterModal = ({
  isOpen,
  onRegister,
  handleSignupClick,
  handleCloseModal,
  buttonText,
  handleModalSwitch,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const { values, handleChange, setValues } = useForm({
    _id: null,
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  const handleResetInputs = () => {
    setName("");
    setAvatar("");
    setEmail("");
    setPassword("");
  };

  useEffect(handleResetInputs, [isOpen]);

  const switchButton = "or Log In";

  return (
    <ModalWithForm
      title="Register"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      handleSignupClick={handleSignupClick}
      buttonText={buttonText}
      switchButton={switchButton}
      handleModalSwitch={handleModalSwitch}
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
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          name="name"
          id="name"
          placeholder="Name"
          minLength="2"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar URL{" "}
        <input
          type="url"
          className="modal__input"
          name="avatar"
          id="avatar"
          placeholder="Avatar URL"
          value={values.avatarUrl}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
