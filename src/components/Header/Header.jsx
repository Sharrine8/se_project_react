import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import headerAvatar from "../../assets/avatar.png";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={headerLogo} alt="logo"></img>
        <p className="header__date">{currentDate}, Houston</p>
      </div>
      <div className="header__nav">
        <button className="header__add-clothes-btn">+ Add Clothes</button>
        <div className="header__nav_user">
          <p className="header__username">Terrace Tegegne</p>
          <img className="header__avatar" src={headerAvatar} alt="Avatar"></img>
        </div>
      </div>
    </header>
  );
}
