import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect, useContext } from "react";
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
    e.preventDefault();
    handleEditProfile({ name, avatar });
  };

  useEffect(() => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  }, [currentUser]);

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
          type="text"
          className="modal__input"
          name="name"
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
