import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../index.css";
import "./App.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import Header from "../Header/Header.jsx";
import Profile from "../Profile/Profile.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import {
  getItems,
  addItem,
  deleteItem,
  editProfile,
  addCardLike,
  removeCardLike,
} from "../../utils/api.js";
import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import * as auth from "../../utils/auth.js";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";

function App() {
  //States
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
  });
  const [currentTemperatureUnit, setCurrentTemperatureUnit] =
    React.useState("F");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Modal functions

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };

  const openConfirmationModal = () => {
    setActiveModal("delete");
  };

  const handleSigninClick = () => {
    setActiveModal("login");
  };

  const handleSignupClick = () => {
    setActiveModal("register");
  };

  const handleProfileClick = () => {
    setActiveModal("edit-profile");
  };

  //Toggle switch
  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  //Item view and changes functions

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddItemSubmit = (values) => {
    setIsLoading(true);
    return addItem(values)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        closeActiveModal();
        setIsLoading(false);
      })
      .catch(console.error);
  };

  const handleCardDelete = () => {
    setIsLoading(true);
    return deleteItem(selectedCard._id)
      .then(() => {
        const itemList = clothingItems.filter((item) => {
          return item._id !== selectedCard._id;
        });
        setClothingItems(itemList);
        closeActiveModal();
        setIsLoading(false);
      })
      .catch(console.error);
  };

  const handleCardLike = ({ _id, isLiked }) => {
    !isLiked
      ? addCardLike(_id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item))
            );
          })
          .catch(console.error)
      : removeCardLike(_id).then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === _id ? updatedCard : item))
          );
        });
  };

  //User signin/signup functions

  const handleRegisterUser = ({ name, password, avatar, email }) => {
    setIsLoading(true);
    auth
      .onRegister(email, password, name, avatar)
      .then(({ name, email, avatar }) => {
        setCurrentUser({ name, email, avatar });
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    auth
      .onLogin(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setCurrentUser(data.user);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleEditProfile = (user) => {
    setIsLoading(true);
    editProfile(user)
      .then((res) => {
        setCurrentUser(res);
        return res;
      })
      .then((res) => {
        console.log("Updated user:", res);
        console.log("Current user state:", currentUser);
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  //Token functions
  const handleTokenLogin = (token) => {
    auth
      .checkToken(token)
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
      })
      .catch(() => {
        localStorage.removeItem("jwt");
        setCurrentUser({});
        setIsLoggedIn(false);
      });
  };

  //React useEffect statements

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

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

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      const token = localStorage.getItem("jwt");
      handleTokenLogin(token);
    } else {
      return;
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              isLoggedIn={isLoggedIn}
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              handleSignupClick={handleSignupClick}
              handleSigninClick={handleSigninClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    OnLikeClick={handleCardLike}
                  />
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn} anonymous>
                    <Profile
                      handleCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                      handleProfileClick={handleProfileClick}
                      OnLikeClick={handleCardLike}
                    />
                  </ProtectedRoute>
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
              buttonText={isLoading ? "Saving" : "Add Garment"}
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
            buttonText={isLoading ? "Saving" : "Yes, delete item"}
          />
          {activeModal === "register" && (
            <RegisterModal
              handleCloseModal={closeActiveModal}
              isOpen={activeModal === "register"}
              onRegister={handleRegisterUser}
              handleSignupClick={handleSignupClick}
              buttonText={isLoading ? "Saving" : "Signup"}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={closeActiveModal}
              isOpen={activeModal === "login"}
              onLogin={handleLogin}
              handleSigninClick={handleSigninClick}
              buttonText={isLoading ? "Saving" : "Login"}
            />
          )}
          {activeModal === "edit-profile" && (
            <EditProfileModal
              handleCloseModal={closeActiveModal}
              isOpen={activeModal === "edit-profile"}
              buttonText={isLoading ? "Saving" : "Save changes"}
              handleEditProfile={handleEditProfile}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
