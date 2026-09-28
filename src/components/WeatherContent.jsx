import clearDay from "@meteocons/svg/fill/snow.svg"

function WeatherContent() {
  return (
    <div className="mt-20 w-full max-w-sm">
  <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-2xl shadow-blue-950/30 backdrop-blur-2xl">

    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />
    <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />

    {/* Header */}
    <div className="relative z-10 flex flex-col items-center gap-1">
      <h1 className="text-4xl font-semibold tracking-tight">
        Tehran
      </h1>

      <p className="text-sm font-medium text-blue-100/70">
        Iran
      </p>
    </div>

    {/* Main Content */}
    <div className="relative z-10 mt-10 flex flex-col items-center gap-5">

      <div className="flex items-start">
        <span className="text-7xl font-extralight tracking-tight">
          30
        </span>

        <span className="mt-2 text-3xl font-light">
          °
        </span>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
        <img
          src={clearDay}
          alt="Sunny"
          className="h-12 w-12 object-contain"
        />

        <h2 className="text-xl font-medium">
          Sunny
        </h2>
      </div>

    </div>

  </div>
</div>
  );
}

export default WeatherContent;
