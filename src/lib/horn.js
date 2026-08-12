// A synthesized two-tone honk, styled after the classic Indian truck horn.
// Built entirely from oscillators — no audio file to license or host.

let audioCtx;

export function playHorn() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;

    const honk = (startOffset, freqLow, freqHigh, duration) => {
      const oscA = audioCtx.createOscillator();
      const oscB = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      oscA.type = "sawtooth";
      oscB.type = "square";
      oscA.frequency.setValueAtTime(freqLow, now + startOffset);
      oscB.frequency.setValueAtTime(freqHigh, now + startOffset);

      gain.gain.setValueAtTime(0, now + startOffset);
      gain.gain.linearRampToValueAtTime(0.16, now + startOffset + 0.02);
      gain.gain.linearRampToValueAtTime(0, now + startOffset + duration);

      oscA.connect(gain);
      oscB.connect(gain);
      gain.connect(audioCtx.destination);

      oscA.start(now + startOffset);
      oscB.start(now + startOffset);
      oscA.stop(now + startOffset + duration + 0.02);
      oscB.stop(now + startOffset + duration + 0.02);
    };

    honk(0, 320, 405, 0.16);
    honk(0.2, 320, 405, 0.16);
  } catch {
    // Web Audio unsupported in this browser — fail silently, no horn for you
  }
}
