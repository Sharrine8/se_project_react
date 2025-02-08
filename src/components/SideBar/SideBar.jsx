import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ handleProfileClick, handleLogout }) {
  const user = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img className="sidebar__avatar" src={user.avatar} alt="Avatar" />
        <p className="sidebar__username">{user.name}</p>
      </div>
      <div className="sidebar__links">
        <button className="sidebar__btn" onClick={handleProfileClick}>
          Change profile data
        </button>
        <button className="sidebar__btn" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
