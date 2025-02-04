import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  handleProfileClick,
  OnLikeClick,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar handleProfileClick={handleProfileClick} />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
          OnLikeClick={OnLikeClick}
        />
      </section>
    </div>
  );
}

export default Profile;
