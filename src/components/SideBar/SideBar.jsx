import avatar from "../../assets/avatar.png";
import "./Sidebar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Avatar" />
      <p className="sidebar__username">Terrace Tegegne</p>
    </div>
  );
}

export default SideBar;
