const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export const getWeather = async (latitude, longitude) => {
  const response = await fetch(
    `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data = await response.json();

  if (!data.current) {
    throw new Error("Weather data not found");
  }

  const { temperature_2m, weather_code } = data.current;

  return {
    temperature: temperature_2m,
    weatherCode: weather_code,
  };
};