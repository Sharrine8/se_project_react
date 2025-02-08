import { useContext } from "react";
import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({
  handleAddClick,
  handleSignupClick,
  handleSigninClick,
  weatherData,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={headerLogo} alt="logo"></img>
        </Link>
        <p className="header__date">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__nav">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add Clothes
            </button>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <div className="header__nav_user">
                <p className="header__username">{currentUser.name}</p>
                {currentUser.avatar.length > 2 ? (
                  <img
                    className="header__avatar"
                    src={currentUser.avatar}
                    alt="Avatar"
                  />
                ) : (
                  <div className="header__avatar header__avatar-fallback">
                    {currentUser?.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            </Link>
          </>
        ) : (
          <>
            <button
              type="button"
              className="header__log-btn"
              onClick={handleSignupClick}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="header__log-btn"
              onClick={handleSigninClick}
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
