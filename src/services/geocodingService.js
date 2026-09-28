const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";

export const searchCity = async (city) => {
  const response = await fetch(
    `${BASE_URL}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch city data");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  const { latitude, longitude, name, country } = data.results[0];

  return {
    latitude,
    longitude,
    name,
    country,
  };
};