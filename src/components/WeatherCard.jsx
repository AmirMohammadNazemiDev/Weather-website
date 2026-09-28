function WeatherCard({ weather }) {
  if (!weather) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-2xl shadow-blue-950/30 backdrop-blur-2xl">

      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center gap-1">
        <h1 className="text-4xl font-semibold tracking-tight">
          {weather.city}
        </h1>

        <p className="text-sm font-medium text-blue-100/70">
          {weather.country}
        </p>
      </div>

      {/* Temperature */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-5">

        <div className="flex items-start">
          <span className="text-7xl font-extralight tracking-tight">
            {Math.round(weather.temperature)}
          </span>

          <span className="mt-2 text-3xl font-light">
            °
          </span>
        </div>

        {/* Weather Status */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">

          <span className="text-xl font-medium">
            Clear
          </span>

          {/* Meteocons icon */}
          <img
            src={clearDay}
            alt="Clear"
            className="h-10 w-10"
          />

        </div>

      </div>

    </div>
  );
}

export default WeatherCard;