import clearBackground from "../assets/images/clear.png";
import cloudyBackground from "../assets/images/cloudy.png";
import rainyBackground from "../assets/images/rainy.png";
import snowyBackground from "../assets/images/snowy.png";
import stormyBackground from "../assets/images/stormy.png";
import windyBackground from "../assets/images/windy.png";

import clearIcon from "@meteocons/svg/fill/clear-day.svg";
import cloudyIcon from "@meteocons/svg/fill/cloudy.svg";
import rainyIcon from "@meteocons/svg/fill/rain.svg";
import snowyIcon from "@meteocons/svg/fill/snow.svg";
import stormyIcon from "@meteocons/svg/fill/thunderstorms.svg";
import windyIcon from "@meteocons/svg/fill/fog.svg";

export const weatherConditions = {
  clear: {
    name: "Clear",
    background: clearBackground,
    icon: clearIcon,
  },

  cloudy: {
    name: "Cloudy",
    background: cloudyBackground,
    icon: cloudyIcon,
  },

  rainy: {
    name: "Rainy",
    background: rainyBackground,
    icon: rainyIcon,
  },

  snowy: {
    name: "Snowy",
    background: snowyBackground,
    icon: snowyIcon,
  },

  stormy: {
    name: "Stormy",
    background: stormyBackground,
    icon: stormyIcon,
  },

  windy: {
    name: "Windy",
    background: windyBackground,
    icon: windyIcon,
  },
};