import "./WeatherCard.css";
import weatherImage from "../../assets/weather-sunny.png";

export default WeatherCard;

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75°F</p>
      <img src={weatherImage} alt="sunny" className="weather-card__image" />
    </section>
  );
}
