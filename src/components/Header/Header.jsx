import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import headerAvatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default function Header({ handleAddClick, weatherData }) {
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
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add Clothes
        </button>
        <Link to="/profile" style={{ textDecoration: "none", color: "#000" }}>
          <div className="header__nav_user">
            <p className="header__username">Terrace Tegegne</p>
            <img
              className="header__avatar"
              src={headerAvatar}
              alt="Avatar"
            ></img>
          </div>
        </Link>
      </div>
    </header>
  );
}
