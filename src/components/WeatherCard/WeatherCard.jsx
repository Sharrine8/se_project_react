import "./WeatherCard.css";
import weatherImage from "../../assets/weather-sunny.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F}°F</p>
      <img src={weatherImage} alt="sunny" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
