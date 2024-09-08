import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";

function Main() {
  return (
    <main className="main">
      <WeatherCard />
      <section className="cards">
        <p className="cards__info">
          Today is 75°F weatherData / You may want to wear:
        </p>
        <ul className="cards__item-cards">
          <ItemCard />
        </ul>
      </section>
    </main>
  );
}

export default Main;
