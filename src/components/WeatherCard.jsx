function WeatherCard({ weather }) {
  if (!weather) {
    return null;
  }

  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/15 p-7 text-white shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">

      <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/25 via-white/5 to-transparent" />

      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-cyan-300/15 blur-3xl" />

      <div className="relative z-10 flex min-h-[380px] flex-col">

        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight drop-shadow-lg">
            {weather.city}
          </h1>

          <p className="mt-1 text-sm font-medium text-white/70">
            {weather.country}
          </p>
        </div>

        <div className="mt-14 flex flex-1 flex-col items-center">

          <div className="flex items-start">
            <span className="text-8xl font-extralight leading-none tracking-tighter drop-shadow-2xl">
              {Math.round(weather.temperature)}
            </span>

            <span className="mt-1 text-4xl font-light">
              °
            </span>
          </div>

          <div className="mt-12 flex items-center gap-4 rounded-3xl border border-white/20 bg-white/10 px-6 py-4 shadow-lg backdrop-blur-xl">

            <span className="text-xl font-semibold tracking-tight">
              {weather.condition.name}
            </span>

            <img
              src={weather.condition.icon}
              alt={weather.condition.name}
              className="h-12 w-12 drop-shadow-lg"
            />

          </div>

        </div>
      </div>
    </div>
  );
}

export default WeatherCard;