import { Bus, ListMusic, Radio } from "lucide-react";
import NightHighway from "./NightHighway";

export default function Hero({ trackCount, onOpenRoute }) {
  return (
    <header className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* dashboard top bar */}
      <div className="relative z-10 flex items-start justify-between px-5 sm:px-10 pt-6 sm:pt-8">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-marigold/50 text-marigold">
            <Bus size={16} />
          </span>
          <div className="leading-tight">
            <p className="font-display text-sm sm:text-base text-paper">DJ JAS</p>
            <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-dust">
              THE NIGHT BUS
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-dust">
            <span className="h-1.5 w-1.5 rounded-full bg-sindoor animate-flicker" />
            {trackCount} ABOARD
          </span>
          <span className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-marigold">
            <Radio size={10} />
            JAS IS DRIVING
          </span>
        </div>
      </div>

      {/* headline block */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-6 pb-4">
        <p className="font-mono text-[10px] sm:text-xs tracking-[0.35em] text-dust mb-5 sm:mb-7">
          227 TRACKS · NON-STOP
        </p>

        <h1 className="font-deva leading-[0.9] text-paper text-[20vw] sm:text-[15vw] md:text-[10rem] lg:text-[11rem]">
          रात की बस
        </h1>

        <p className="font-display uppercase tracking-[0.15em] text-marigold text-lg sm:text-2xl md:text-3xl mt-5 sm:mt-6">
          DJ JAS <span className="text-dust/60 mx-1">·</span> The Night Bus
        </p>

        <p className="font-display italic text-dust text-base sm:text-xl mt-3 max-w-md text-balance">
          A one-way ride through Bollywood.
        </p>

        <button
          onClick={onOpenRoute}
          className="group mt-8 sm:mt-10 inline-flex items-center gap-2 border border-marigold/40 text-marigold px-5 py-3 font-mono text-xs tracking-[0.2em] hover:bg-marigold hover:text-night transition-colors duration-300"
        >
          SEE THE ROUTE
          <ListMusic size={14} />
        </button>
      </div>

      {/* illustration */}
      <div className="relative z-0 h-[34vh] sm:h-[42vh] min-h-[220px] w-full">
        <NightHighway />

        {/* callout bubble, anchored over the artwork */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[38%] sm:bottom-[42%]">
          <div className="relative bg-panel/90 backdrop-blur-sm border border-line px-3.5 py-2 rounded-md shadow-lg">
            <p className="font-deva text-sm text-paper leading-none">सफ़र लम्बा है</p>
            <p className="font-mono text-[9px] tracking-[0.2em] text-dust mt-1">
              IT'S A LONG RIDE
            </p>
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-panel border-b border-r border-line" />
          </div>
        </div>
      </div>
    </header>
  );
}
