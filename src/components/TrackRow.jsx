import { Play, Pause, ExternalLink } from "lucide-react";
import useInView from "../hooks/useInView";
import { getThumbnail, getWatchUrl } from "../lib/youtube";

export default function TrackRow({ track, index, isPlaying, onPlay }) {
  const [ref, inView] = useInView();

  return (
    <li
      ref={ref}
      className={`relative pl-14 sm:pl-20 ${inView ? "animate-riseIn" : "opacity-0"}`}
      style={{ animationDelay: inView ? `${Math.min(index, 8) * 60}ms` : "0ms" }}
    >
      {/* stop dot on the route line — glows in this song's neon color when playing */}
      <span
        className={`absolute left-[19px] sm:left-[27px] top-7 -translate-x-1/2 h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
          isPlaying ? "animate-neon-pulse" : ""
        }`}
        style={
          isPlaying
            ? {
                backgroundColor: track.accentColor,
                borderColor: track.accentColor,
                boxShadow: `0 0 6px ${track.accentColor}, 0 0 14px ${track.accentColor}`,
              }
            : { backgroundColor: "transparent", borderColor: `${track.accentColor}80` }
        }
        aria-hidden="true"
      />

      <div
        className={`group w-full flex items-center gap-4 py-5 border-b border-line transition-colors duration-200 ${
          isPlaying ? "bg-marigold/[0.06]" : "hover:bg-white/[0.02]"
        }`}
      >
        <button
          onClick={() => onPlay(track)}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
          className="flex items-center gap-4 min-w-0 flex-1 text-left"
        >
          <span className="hidden sm:block font-mono text-xs text-dust w-7 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="relative shrink-0 h-14 w-14 sm:h-16 sm:w-16 overflow-hidden bg-panel">
            <img
              src={getThumbnail(track.youtubeId)}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span
              className={`absolute inset-0 flex items-center justify-center bg-night/50 transition-opacity ${
                isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {isPlaying ? (
                <Pause size={18} className="text-marigold" fill="currentColor" />
              ) : (
                <Play size={18} className="text-paper" fill="currentColor" />
              )}
            </span>
          </span>

          <span className="min-w-0 flex-1">
            <span
              className={`block font-display text-base sm:text-lg truncate ${
                isPlaying ? "text-marigold" : "text-paper"
              }`}
            >
              {track.title}
            </span>
            <span className="block font-body text-xs sm:text-sm text-dust truncate mt-0.5">
              {track.artist} · {track.year}
            </span>
          </span>
        </button>

        <a
          href={getWatchUrl(track.youtubeId)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${track.title} on YouTube`}
          className="shrink-0 p-2 text-dust hover:text-marigold transition-colors"
        >
          <ExternalLink size={16} />
        </a>
      </div>
    </li>
  );
}
