import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";

function Main({ weatherData }) {
  return (
    <main className="main">
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">Today is 75°F / You may want to wear:</p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return <ItemCard key={item._id} props={item} />;
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
