import { useCallback, useEffect, useRef, useState } from "react";

let apiPromise = null;
function loadYouTubeAPI() {
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve(window.YT);
      return;
    }
    const existing = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    if (!existing) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(window.YT);
    };
  });
  return apiPromise;
}

export default function useYouTubePlayer(videoId, onEnded) {
  const mountRef = useRef(null);
  const playerRef = useRef(null);
  const intervalRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeAPI().then((YT) => {
      if (cancelled || !mountRef.current) return;
      playerRef.current = new YT.Player(mountRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          rel: 0,
          modestbranding: 1,
          controls: 0,
          disablekb: 1,
          playsinline: 1,
        },
        events: {
          onReady: (e) => {
            if (cancelled) return;
            setReady(true);
            setDuration(e.target.getDuration() || 0);
          },
          onStateChange: (e) => {
            if (cancelled) return;
            if (e.data === YT.PlayerState.PLAYING) setIsPlaying(true);
            if (e.data === YT.PlayerState.PAUSED) setIsPlaying(false);
            if (e.data === YT.PlayerState.ENDED) {
              setIsPlaying(false);
              onEnded?.();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      clearInterval(intervalRef.current);
      try {
        playerRef.current?.destroy?.();
      } catch {
        // player was already gone — nothing to clean up
      }
      playerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // swap the video when the id changes, without recreating the player
  useEffect(() => {
    if (!ready || !playerRef.current?.loadVideoById) return;
    const current = playerRef.current.getVideoData?.()?.video_id;
    if (current && current !== videoId) {
      playerRef.current.loadVideoById(videoId);
      setCurrentTime(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId, ready]);

  // poll progress while playing
  useEffect(() => {
    clearInterval(intervalRef.current);
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        const p = playerRef.current;
        if (p?.getCurrentTime) {
          setCurrentTime(p.getCurrentTime());
          setDuration(p.getDuration() || 0);
        }
      }, 500);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const play = useCallback(() => playerRef.current?.playVideo?.(), []);
  const pause = useCallback(() => playerRef.current?.pauseVideo?.(), []);
  const toggle = useCallback(() => {
    if (isPlaying) pause();
    else play();
  }, [isPlaying, play, pause]);

  const seekBy = useCallback((deltaSeconds) => {
    const p = playerRef.current;
    if (!p?.getCurrentTime) return;
    const target = Math.max(0, Math.min(p.getDuration() || 0, p.getCurrentTime() + deltaSeconds));
    p.seekTo(target, true);
    setCurrentTime(target);
  }, []);

  const seekToFraction = useCallback((fraction) => {
    const p = playerRef.current;
    if (!p?.getDuration) return;
    const target = fraction * (p.getDuration() || 0);
    p.seekTo(target, true);
    setCurrentTime(target);
  }, []);

  const toggleMute = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    if (isMuted) {
      p.unMute();
      setIsMuted(false);
    } else {
      p.mute();
      setIsMuted(true);
    }
  }, [isMuted]);

  return {
    mountRef,
    ready,
    isPlaying,
    isMuted,
    currentTime,
    duration,
    play,
    pause,
    toggle,
    seekBy,
    seekToFraction,
    toggleMute,
  };
}
