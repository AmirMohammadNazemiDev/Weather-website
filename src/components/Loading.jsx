import { useEffect, useState } from "react";

import clearIcon from "@meteocons/svg/fill/clear-day.svg";
import cloudyIcon from "@meteocons/svg/fill/cloudy.svg";
import rainyIcon from "@meteocons/svg/fill/rain.svg";
import snowyIcon from "@meteocons/svg/fill/snow.svg";
import stormyIcon from "@meteocons/svg/fill/thunderstorms.svg";
import windyIcon from "@meteocons/svg/fill/fog.svg";

const loadingIcons = [
  clearIcon,
  cloudyIcon,
  rainyIcon,
  snowyIcon,
  stormyIcon,
  windyIcon,
];

function Loading() {
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % loadingIcons.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const nextIcon = (currentIcon + 1) % loadingIcons.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10">

      <div className="flex flex-col items-center">

        <div className="relative flex h-24 w-24 items-center justify-center">

          {/* Glow */}
          <div className="absolute h-20 w-20 rounded-full bg-white/20 blur-2xl" />

          {/* Current Icon */}
          <img
            src={loadingIcons[currentIcon]}
            alt="Loading weather"
            className="absolute h-20 w-20 animate-[fadeIn_1s_ease-in-out]"
          />

          {/* Next Icon */}
          <img
            src={loadingIcons[nextIcon]}
            alt=""
            className="absolute h-20 w-20 opacity-0"
          />

        </div>

        <p className="mt-6 text-sm font-medium tracking-wide text-white/90 drop-shadow-lg">
          Loading weather...
        </p>

      </div>

    </div>
  );
}

export default Loading;