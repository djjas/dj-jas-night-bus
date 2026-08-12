import { useState } from "react";
import { Share2, Check, Link2 } from "lucide-react";
import { shareTheRide } from "../lib/share";

export default function ShareRide() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const result = await shareTheRide();
    if (result.copied) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="flex flex-col items-start gap-3">
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 border border-marigold/40 text-marigold px-5 py-3 font-mono text-xs tracking-[0.2em] hover:bg-marigold hover:text-night transition-colors duration-300"
      >
        {copied ? <Check size={14} /> : <Share2 size={14} />}
        {copied ? "LINK COPIED" : "SHARE THE RIDE"}
      </button>
      <p className="flex items-center gap-1.5 font-mono text-[11px] text-dust">
        <Link2 size={12} />
        {typeof window !== "undefined" ? window.location.host : "djjas.wtf"}
      </p>
    </div>
  );
}
