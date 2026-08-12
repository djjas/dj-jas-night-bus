import { useMemo, useState } from "react";
import { X } from "lucide-react";
import tracks from "../data/tracks";
import FilterBar from "./FilterBar";
import LanguageToggle from "./LanguageToggle";
import TrackRow from "./TrackRow";
import ShareRide from "./ShareRide";

export default function RoutePanel({ isOpen, onClose, nowPlayingId, onPlay }) {
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-24 sm:bottom-32 z-40 flex justify-center px-2 sm:px-6 animate-riseIn"
      role="dialog"
      aria-label="Full route"
    >
      <div className="w-full max-w-3xl max-h-[58vh] sm:max-h-[62vh] bg-panel/95 backdrop-blur-md border border-line rounded-xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 sm:px-5 py-3 border-b border-line shrink-0">
          <div className="flex-1 min-w-0">
            <FilterBar activeFilters={activeFilters} onToggle={toggleFilter} />
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-[10px] tracking-[0.15em] text-dust whitespace-nowrap">
              {visibleTracks.length} TRACKS
            </span>
            <LanguageToggle activeLanguage={activeLanguage} onChange={setActiveLanguage} />
            <button
              onClick={onClose}
              aria-label="Close the route"
              className="p-1.5 text-dust hover:text-paper transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* scrollable list */}
        <div className="overflow-y-auto flex-1">
          {visibleTracks.length === 0 ? (
            <p className="font-mono text-sm text-dust px-4 py-10 text-center">
              No stops on this line yet. Try clearing a filter.
            </p>
          ) : (
            <ul className="relative px-2 sm:px-3">
              <span
                className="absolute left-[27px] sm:left-[35px] top-0 bottom-0 w-px bg-line"
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
        </div>

        {/* footer */}
        <div className="border-t border-line px-4 sm:px-5 py-3 shrink-0">
          <ShareRide />
        </div>
      </div>
    </div>
  );
}
