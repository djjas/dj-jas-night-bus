import { Instagram } from "lucide-react";
import ShareRide from "./ShareRide";

export default function Driver() {
  return (
    <section className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-20 sm:py-28 grid sm:grid-cols-[auto_1fr] gap-10 sm:gap-16 items-start">
        <div className="relative h-40 w-40 sm:h-48 sm:w-48 shrink-0 mx-auto sm:mx-0">
          <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
            <circle cx="100" cy="100" r="98" fill="#141212" stroke="#2A2622" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="#E8A33D" strokeWidth="1" strokeDasharray="2 6" />
            <path
              d="M100 60c-16 0-26 12-26 28 0 12 6 20 10 25-18 6-30 20-32 40h96c-2-20-14-34-32-40 4-5 10-13 10-25 0-16-10-28-26-28z"
              fill="#E8A33D"
            />
          </svg>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-night px-2 font-mono text-[10px] tracking-[0.2em] text-dust">
            SEAT 01
          </span>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.3em] text-dust mb-3">
            YOUR DRIVER
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-paper mb-6">DJ JAS</h2>
          <p className="font-display italic text-xl sm:text-2xl text-marigold leading-snug mb-8 max-w-md text-balance">
            "I drive this bus.
            <br />
            I pick every song on it."
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-xs tracking-[0.2em] text-paper hover:border-marigold hover:text-marigold transition-colors duration-300"
            >
              <Instagram size={14} />
              FOLLOW ON INSTAGRAM
            </a>
          </div>

          <div className="mt-10 pt-10 border-t border-line">
            <p className="font-mono text-[11px] tracking-[0.3em] text-dust mb-4">
              LIKE THE RIDE?
            </p>
            <ShareRide />
          </div>
        </div>
      </div>
    </section>
  );
}
