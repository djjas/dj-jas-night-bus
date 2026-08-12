import { useState } from "react";
import tracks from "./data/tracks";
import TickerBar from "./components/TickerBar";
import Hero from "./components/Hero";
import Playlist from "./components/Playlist";
import NowPlaying from "./components/NowPlaying";
import Driver from "./components/Driver";
import Footer from "./components/Footer";

export default function App() {
  const [nowPlayingId, setNowPlayingId] = useState(null);

  const nowPlaying = tracks.find((t) => t.id === nowPlayingId) ?? null;

  const handlePlay = (track) => {
    setNowPlayingId((current) => (current === track.id ? null : track.id));
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
    <div className={nowPlaying ? "pb-28 sm:pb-28" : ""}>
      <TickerBar />
      <Hero trackCount={tracks.length} />
      <Playlist nowPlayingId={nowPlaying?.id ?? null} onPlay={handlePlay} />
      <Driver />
      <Footer />
      <NowPlaying
        track={nowPlaying}
        onNext={() => step(1)}
        onPrev={() => step(-1)}
      />
    </div>
  );
}
