import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import Loading from "./Loading";

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
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-5 py-8 text-white transition-all duration-700"
      style={{
        backgroundImage: weather
          ? `url(${weather.condition.background})`
          : "none",
      }}
    >
      <div className="mx-auto w-full max-w-sm pt-16">

        <SearchBar onSearch={handleSearch} />

        {error && (
          <p className="mt-6 text-center text-sm font-medium text-red-200">
            {error}
          </p>
        )}

        <div className="mt-14">
          <WeatherCard weather={weather} />
        </div>

      </div>

      {loading && <Loading />}
    </main>
  );
}

export default WeatherContent;