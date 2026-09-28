function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10">
      <div className="flex flex-col items-center">

        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-white/20" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-r-white border-t-white/90" />

          <div className="absolute inset-3 rounded-full bg-white/10" />
        </div>

        <p className="mt-5 text-sm font-medium tracking-wide text-white/90 drop-shadow">
          Loading...
        </p>

      </div>
    </div>
  );
}

export default Loading;