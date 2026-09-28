import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import { searchCity } from "../services/geocodingService";
import { getWeather } from "../services/weatherService";

function WeatherContent() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError("");

      const cityData = await searchCity(city);

      const weatherData = await getWeather(
        cityData.latitude,
        cityData.longitude
      );

      setWeather({
        city: cityData.name,
        country: cityData.country,
        temperature: weatherData.temperature,
        weatherCode: weatherData.weatherCode,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 w-full max-w-sm">
      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p className="mt-5 text-center text-white">
          Loading...
        </p>
      )}

      {error && (
        <p className="mt-5 text-center text-red-300">
          {error}
        </p>
      )}

      <WeatherCard weather={weather} />
    </div>
  );
}

export default WeatherContent;