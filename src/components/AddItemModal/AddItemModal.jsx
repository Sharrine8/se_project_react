import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState } from "react";
import { useForm } from "../../hooks/hooks";

const AddItemModal = ({ isOpen, onAddItem, handleCloseModal }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const { values, handleChange, setValues } = useForm({
    _id: null,
    name: "",
    weather: "",
    imageUrl: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem(values);
  }

  const handleResetInputs = () => {
    setName("");
    setUrl("");
    setWeather("");
  };

  React.useEffect(handleResetInputs, [isOpen]);

  return (
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
          value={values.name}
          onChange={handleChange}
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
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset
        className="modal__radio-btns"
        id="modal-fieldset"
        value={values.weather}
      >
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="hot"
            name="weather"
            className="modal__input_type_radio"
            value={"hot"}
            onChange={handleChange}
          ></input>
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="warm"
            name="weather"
            className="modal__input_type_radio"
            value={"warm"}
            onChange={handleChange}
          ></input>
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="cold"
            name="weather"
            className="modal__input_type_radio"
            value={"cold"}
            onChange={handleChange}
          ></input>
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
