import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../index.css";
import "./App.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import Header from "../Header/Header.jsx";
import Profile from "../Profile/Profile.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getItems, addItem, deleteItem } from "../../utils/api.js";
import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal.jsx";
//add api.js

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  console.log(clothingItems);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] =
    React.useState("F");

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const openConfirmationModal = () => {
    setActiveModal("delete");
  };
  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddItemSubmit = (values) => {
    return addItem(values)
      .then((item) => {
        values._id = item._id;
        const itemList = [...clothingItems];
        itemList.push(values);
        setClothingItems(itemList);
        closeActiveModal();
      })
      .catch((err) => console.error(`Error: ${err}`));
  };

  const handleCardDelete = () => {
    return deleteItem(selectedCard._id)
      .then(() => {
        const itemList = clothingItems.filter((item) => {
          return item._id !== selectedCard._id;
        });
        setClothingItems(itemList);
        closeActiveModal();
      })
      .catch((err) => console.error(`Error: ${err}`));
    //api call to delete card
    //clothingItems state should be updated using the filter() method
    //create a copy of the array and exclude the deleted card from it
    //close the modal window
    // the handleCardDelete handler, which is passed from the App to
    // the DeleteConfirmationModal component. This handler makes the
    //API call. After a successful API request, the clothingItems
    //state needs to be updated, the modals closed, and the state
    //containing the card should be reset.
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        {activeModal === "add-garment" && (
          <AddItemModal
            handleCloseModal={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            onAddItem={handleAddItemSubmit}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            onDeleteItem={openConfirmationModal}
          />
        )}
        <DeleteConfirmationModal
          isOpen={activeModal === "delete"}
          onClose={closeActiveModal}
          onDeleteItem={handleCardDelete}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
