const MESSAGE = "227 TRACKS · NON-STOP · कोई मंज़िल नहीं, बस सफ़र · BOARDING NOW ·";

export default function TickerBar() {
  return (
    <div
      className="w-full border-y border-line bg-panel overflow-hidden select-none"
      role="status"
      aria-label="Route status: 227 tracks, non-stop, boarding now"
    >
      <div className="flex whitespace-nowrap py-2.5 animate-marquee motion-reduce:animate-none">
        {Array.from({ length: 2 }).map((_, i) => (
          <span
            key={i}
            className="font-mono text-[11px] sm:text-xs tracking-[0.25em] text-marigold/90 px-4"
            aria-hidden={i === 1}
          >
            {MESSAGE.repeat(4)}
          </span>
        ))}
      </div>
    </div>
  );
}
