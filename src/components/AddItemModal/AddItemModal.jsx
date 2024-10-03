import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState, useEffect } from "react";

const AddItemModal = ({ isOpen, onAddItem, handleCloseModal }) => {
  // declare state for each input field
  const [name, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [weather, setWeatherType] = useState("");
  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  // create onChange handlers corresponding to each state variable
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleWeatherChange = (e) => {
    setWeatherType(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ _id: null, name, weather, imageUrl });
  }

  return (
    <>
      <ModalWithForm
        buttonText="Add garment"
        title="New garment"
        onClose={handleCloseModal}
        isOpen={isOpen}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            name="name"
            id="name"
            placeholder="Name"
            minLength="1"
            maxLength="30"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            name="imageUrl"
            id="imageUrl"
            placeholder="Image URL"
            value={imageUrl}
            onChange={handleUrlChange}
            required
          />
        </label>
        <fieldset className="modal__radio-btns" value={weather}>
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              type="radio"
              id="hot"
              name="weather"
              className="modal__input_type_radio"
              value={"hot"}
              onChange={handleWeatherChange}
            ></input>
            Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"
              id="warm"
              name="weather"
              className="modal__input_type_radio"
              value={"warm"}
              onChange={handleWeatherChange}
            ></input>
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"
              id="cold"
              name="weather"
              className="modal__input_type_radio"
              value={"cold"}
              onChange={handleWeatherChange}
            ></input>
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </>
  );
};

export default AddItemModal;
