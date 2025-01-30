import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({
  isOpen,
  handleCloseModal,
  buttonText,
  handleEditProfile,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(currentUser);
    e.preventDefault();
    handleEditProfile({ name, avatar });
    // const user = await editProfile({ name, avatar });
    // setName(user.name);
    // setAvatar(user.avatar);
    console.log(name, avatar);
  };
  console.log(currentUser);
  const currentUserValue = () => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  };

  useEffect(() => {
    currentUserValue();
  }, []);

  return (
    <ModalWithForm
      title="Edit Profile Modal"
      onClose={handleCloseModal}
      isOpen={isOpen}
      buttonText={buttonText}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name *{""}
        <input
          name="Name"
          id="profileName"
          placeholder={currentUser.name}
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleNameChange}
          required
        ></input>
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar *{""}
        <input
          type="url"
          className="modal__input"
          name="avatar"
          id="profileAvatar"
          placeholder={currentUser.avatar}
          value={avatar}
          onChange={handleAvatarChange}
          required
        ></input>
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
