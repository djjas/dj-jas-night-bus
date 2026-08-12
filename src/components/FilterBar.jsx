import { FILTERS } from "../data/tracks";

export default function FilterBar({ activeFilters, onToggle }) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-1 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap"
      role="group"
      aria-label="Filter tracks by genre or era"
    >
      {FILTERS.map((tag) => {
        const active = activeFilters.has(tag);
        return (
          <button
            key={tag}
            onClick={() => onToggle(tag)}
            aria-pressed={active}
            className={`shrink-0 font-mono text-[11px] tracking-[0.15em] uppercase px-3.5 py-2 border transition-colors duration-200 ${
              active
                ? "bg-marigold text-night border-marigold"
                : "border-line text-dust hover:border-marigold/50 hover:text-paper"
            }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
