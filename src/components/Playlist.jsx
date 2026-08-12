import { useMemo, useState } from "react";
import tracks from "../data/tracks";
import FilterBar from "./FilterBar";
import LanguageToggle from "./LanguageToggle";
import TrackRow from "./TrackRow";

export default function Playlist({ nowPlayingId, onPlay }) {
  const [activeFilters, setActiveFilters] = useState(new Set());
  const [activeLanguage, setActiveLanguage] = useState("all");

  const toggleFilter = (tag) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });
  };

  const visibleTracks = useMemo(() => {
    return tracks.filter((track) => {
      const matchesFilters =
        activeFilters.size === 0 ||
        [...activeFilters].some((tag) => track.tags.includes(tag));
      const matchesLanguage =
        activeLanguage === "all" || track.languages.includes(activeLanguage);
      return matchesFilters && matchesLanguage;
    });
  }, [activeFilters, activeLanguage]);

  return (
    <section id="playlist" className="max-w-5xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
      <div className="flex items-end justify-between gap-6 mb-8 flex-wrap">
        <div>
          <p className="font-mono text-[11px] tracking-[0.3em] text-dust mb-2">
            THE ROUTE
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-paper">
            Every stop on the line
          </h2>
        </div>
        <LanguageToggle activeLanguage={activeLanguage} onChange={setActiveLanguage} />
      </div>

      <div className="mb-10">
        <FilterBar activeFilters={activeFilters} onToggle={toggleFilter} />
      </div>

      {visibleTracks.length === 0 ? (
        <p className="font-mono text-sm text-dust border border-line px-4 py-8 text-center">
          No stops on this line yet. Try clearing a filter.
        </p>
      ) : (
        <ul className="relative">
          {/* the route line itself */}
          <span
            className="absolute left-[19px] sm:left-[27px] top-0 bottom-0 w-px bg-line"
            aria-hidden="true"
          />
          {visibleTracks.map((track, index) => (
            <TrackRow
              key={track.id}
              track={track}
              index={index}
              isPlaying={nowPlayingId === track.id}
              onPlay={onPlay}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
