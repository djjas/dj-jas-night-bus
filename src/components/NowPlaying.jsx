import { useEffect, useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Ticket,
  ListMusic,
  ExternalLink,
  Megaphone,
} from "lucide-react";
import useYouTubePlayer from "../hooks/useYouTubePlayer";
import { getWatchUrl } from "../lib/youtube";
import { shareTheRide } from "../lib/share";
import { playHorn } from "../lib/horn";

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function NowPlaying({ track, onNext, onPrev, isPanelOpen, onTogglePanel }) {
  const [shareLabel, setShareLabel] = useState(null);

  const player = useYouTubePlayer(track?.youtubeId, onNext);

  useEffect(() => {
    if (!track) return;

    const handler = async (e) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case " ":
          e.preventDefault();
          player.toggle();
          break;
        case "ArrowLeft":
          player.seekBy(-5);
          break;
        case "ArrowRight":
          player.seekBy(5);
          break;
        case "n":
        case "N":
          onNext();
          break;
        case "p":
        case "P":
          onPrev();
          break;
        case "m":
        case "M":
          player.toggleMute();
          break;
        case "h":
        case "H":
          playHorn();
          break;
        case "q":
        case "Q":
          onTogglePanel();
          break;
        case "t":
        case "T": {
          const result = await shareTheRide();
          if (result.copied) {
            setShareLabel("LINK COPIED");
            setTimeout(() => setShareLabel(null), 2000);
          }
          break;
        }
        default:
          break;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track, player.toggle, player.seekBy, player.toggleMute, onNext, onPrev, onTogglePanel]);

  if (!track) return null;

  const progress = player.duration > 0 ? player.currentTime / player.duration : 0;

  const handleScrub = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    player.seekToFraction(Math.max(0, Math.min(1, fraction)));
  };

  const handleShareClick = async () => {
    const result = await shareTheRide();
    if (result.copied) {
      setShareLabel("LINK COPIED");
      setTimeout(() => setShareLabel(null), 2000);
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-2 sm:px-6 pb-2 sm:pb-4 animate-riseIn"
      role="region"
      aria-label="Now playing console"
    >
      <div className="w-full max-w-3xl bg-panel/95 backdrop-blur-md border border-line rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-5 py-3">
          <div className="relative h-11 w-11 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-md bg-night">
            <div ref={player.mountRef} className="h-full w-full" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-2">
              <p className="font-display text-sm sm:text-base text-paper truncate">
                {track.title}
              </p>
              
                href={getWatchUrl(track.youtubeId)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open on YouTube"
                className="hidden sm:inline-flex text-dust hover:text-marigold transition-colors shrink-0"
              >
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="font-body text-xs text-dust truncate">{track.artist}</p>

            <div className="flex items-center gap-2 mt-1.5">
              <span className="font-mono text-[10px] text-dust w-8 shrink-0">
                {formatTime(player.currentTime)}
              </span>
              <div
                role="slider"
                aria-label="Seek"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress * 100)}
                tabIndex={0}
                onClick={handleScrub}
                className="relative h-3 flex-1 cursor-pointer group"
              >
                <span className="absolute top-1/2 -translate-y-1/2 h-[3px] w-full bg-line rounded-full" />
                <span
                  className="absolute top-1/2 -translate-y-1/2 h-[3px] bg-marigold rounded-full"
                  style={{ width: `${progress * 100}%` }}
                />
                <span
                  className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-marigold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ left: `calc(${progress * 100}% - 5px)` }}
                />
              </div>
              <span className="font-mono text-[10px] text-dust w-8 shrink-0 text-right">
                {formatTime(player.duration)}
              </span>
            </div>
          </div>

          {/* transport controls */}
          <div className="hidden sm:flex items-center gap-1 shrink-0">
            <button
              onClick={onPrev}
              aria-label="Previous track"
              className="p-2 text-dust hover:text-paper transition-colors"
            >
              <SkipBack size={16} />
            </button>
            <button
              onClick={player.toggle}
              aria-label={player.isPlaying ? "Pause" : "Play"}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-paper text-night hover:bg-marigold transition-colors"
            >
              {player.isPlaying ? (
                <Pause size={16} fill="currentColor" />
              ) : (
                <Play size={16} fill="currentColor" className="ml-0.5" />
              )}
            </button>
            <button
              onClick={onNext}
              aria-label="Next track"
              className="p-2 text-dust hover:text-paper transition-colors"
            >
              <SkipForward size={16} />
            </button>
            <button
              onClick={player.toggleMute}
              aria-label={player.isMuted ? "Unmute" : "Mute"}
              className="p-2 text-dust hover:text-paper transition-colors"
            >
              {player.isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <button
              onClick={playHorn}
              aria-label="Honk the horn"
              title="Horn"
              className="p-2 text-dust hover:text-marigold transition-colors"
            >
              <Megaphone size={16} />
            </button>
            <button
              onClick={handleShareClick}
              aria-label="Share the ride"
              className="p-2 text-dust hover:text-marigold transition-colors"
              title="Share the ride"
            >
              <Ticket size={16} />
            </button>
            <button
              onClick={onTogglePanel}
              aria-label="View the full route"
              aria-pressed={isPanelOpen}
              title="Route"
              className={`p-2 transition-colors ${
                isPanelOpen ? "text-marigold" : "text-dust hover:text-paper"
              }`}
            >
              <ListMusic size={16} />
            </button>
          </div>

          {/* mobile: play/pause + queue */}
          <div className="sm:hidden flex items-center gap-1 shrink-0">
            <button
              onClick={player.toggle}
              aria-label={player.isPlaying ? "Pause" : "Play"}
              className="flex items-center justify-center h-9 w-9 rounded-full bg-paper text-night"
            >
              {player.isPlaying ? (
                <Pause size={14} fill="currentColor" />
              ) : (
                <Play size={14} fill="currentColor" className="ml-0.5" />
              )}
            </button>
            <button
              onClick={onTogglePanel}
              aria-label="View the full route"
              aria-pressed={isPanelOpen}
              className={`p-2 ${isPanelOpen ? "text-marigold" : "text-dust"}`}
            >
              <ListMusic size={16} />
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center gap-5 border-t border-line py-2 font-mono text-[10px] tracking-[0.1em] text-dust">
          <ShortcutHint keys={["Space"]} label="Play / Pause" />
          <ShortcutHint keys={["←", "→"]} label="Seek" />
          <ShortcutHint keys={["N", "P"]} label="Track" />
          <ShortcutHint keys={["Q"]} label="Route" />
          <ShortcutHint keys={["M"]} label="Mute" />
          <ShortcutHint keys={["T"]} label={shareLabel ?? "Ticket"} />
          <ShortcutHint keys={["H"]} label="Horn" />
        </div>
      </div>
    </div>
  );
}

function ShortcutHint({ keys, label }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      {keys.map((k) => (
        <kbd
          key={k}
          className="inline-flex items-center justify-center min-w-[1.4em] px-1.5 py-0.5 border border-line rounded text-paper/80"
        >
          {k}
        </kbd>
      ))}
      <span>{label}</span>
    </span>
  );
}