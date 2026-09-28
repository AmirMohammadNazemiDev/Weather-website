function SearchBar() {
  return (
    <div className="flex items-center gap-2 mb-30">
      <input
        type="text"
        placeholder="Search city..."
        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none backdrop-blur-md transition focus:border-white/40"
      />

      <button
        type="button"
        className="rounded-xl bg-white/20 px-5 py-3 text-white backdrop-blur-md transition hover:bg-white/30"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
