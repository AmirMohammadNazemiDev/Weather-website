function WeatherCard({ weather }) {
  if (!weather) {
    return null;
  }

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/15 p-7 text-white shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      
      {/* Glass Highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/25 via-white/5 to-transparent" />

      {/* Top Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/20 blur-3xl" />

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-cyan-300/15 blur-3xl" />

      <div className="relative z-10 flex min-h-[310px] flex-col">

        {/* Location */}
        <div className="flex flex-col items-center">

          <h1 className="text-[2.4rem] font-extrabold leading-tight tracking-[-0.04em] drop-shadow-xl">
            {weather.city}
          </h1>

          <p className="mt-1 text-base font-medium tracking-wide text-white/70">
            {weather.country}
          </p>

        </div>

        {/* Main Weather */}
        <div className="mt-8 flex flex-1 flex-col items-center">

          {/* Temperature */}
          <div className="flex items-start">

            <span className="text-[5.5rem] font-light leading-[0.9] tracking-[-0.07em] drop-shadow-2xl">
              {Math.round(weather.temperature)}
            </span>

            <span className="ml-1 mt-1 text-4xl font-light text-white/85">
              °
            </span>

          </div>

          {/* Condition */}
          <div className="mt-10 flex items-center gap-5">

            <span className="text-[1.7rem] font-semibold tracking-tight drop-shadow-lg">
              {weather.condition.name}
            </span>

            <img
              src={weather.condition.icon}
              alt={weather.condition.name}
              className="h-16 w-16 drop-shadow-xl"
            />

          </div>

        </div>
      </div>
    </div>
  );
}

export default WeatherCard;