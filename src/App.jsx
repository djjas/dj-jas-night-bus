import { useState } from "react";
import tracks from "./data/tracks";
import TickerBar from "./components/TickerBar";
import Hero from "./components/Hero";
import RoutePanel from "./components/RoutePanel";
import NowPlaying from "./components/NowPlaying";
import Driver from "./components/Driver";
import Footer from "./components/Footer";

export default function App() {
  const [nowPlayingId, setNowPlayingId] = useState(tracks[0].id);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const nowPlaying = tracks.find((t) => t.id === nowPlayingId) ?? tracks[0];

  const handlePlay = (track) => {
    setNowPlayingId(track.id);
  };

  const step = (direction) => {
    setNowPlayingId((current) => {
      const index = tracks.findIndex((t) => t.id === current);
      const base = index === -1 ? 0 : index;
      const next = (base + direction + tracks.length) % tracks.length;
      return tracks[next].id;
    });
  };

  return (
    <div className="pb-28 sm:pb-28">
      <TickerBar />
      <Hero trackCount={tracks.length} onOpenRoute={() => setIsPanelOpen(true)} />
      <Driver />
      <Footer />

      <RoutePanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        nowPlayingId={nowPlaying.id}
        onPlay={handlePlay}
      />

      <NowPlaying
        track={nowPlaying}
        onNext={() => step(1)}
        onPrev={() => step(-1)}
        isPanelOpen={isPanelOpen}
        onTogglePanel={() => setIsPanelOpen((open) => !open)}
      />
    </div>
  );
}
