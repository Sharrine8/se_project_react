import "../blocks/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src="src/assets/logo.svg"
          alt="logo"
        ></img>
        <p className="header__date">June 15, New York</p>
      </div>
      <div className="header__nav">
        <div className="header__nav_text">
          <button className="header__btn">+ Add Clothes</button>
          <p className="header__username">Terrace Tegegne</p>
        </div>
        <img
          className="header__avatar"
          src="src/assets/avatar.png"
          alt="Avatar"
        ></img>
      </div>
    </header>
  );
}
