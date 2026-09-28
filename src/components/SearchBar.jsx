import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      return;
    }

    onSearch(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 flex items-center gap-2"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city..."
        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none backdrop-blur-md transition focus:border-white/40"
      />

      <button
        type="submit"
        className="rounded-xl bg-white/20 px-5 py-3 text-white backdrop-blur-md transition hover:bg-white/30"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;