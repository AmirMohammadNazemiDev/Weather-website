import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import { searchCity } from "../services/geocodingService";
import { getWeather } from "../services/weatherService";
import {
  weatherConditions,
  getWeatherCondition,
} from "../utils/weatherConditions";

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

      const conditionKey = getWeatherCondition(
        weatherData.weatherCode
      );

      const condition = weatherConditions[conditionKey];

      setWeather({
        city: cityData.name,
        country: cityData.country,
        temperature: weatherData.temperature,
        weatherCode: weatherData.weatherCode,
        condition,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch("Tehran");
  }, []);

  return (
    <main className="min-h-screen w-full bg-gray-900 p-5 text-white">
      <div className="mx-auto w-full max-w-sm pt-20">
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
    </main>
  );
}

export default WeatherContent;