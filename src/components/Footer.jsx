import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div>
          <p className="font-display text-lg text-paper">DJ JAS</p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-dust mt-1">
            OTTAWA / INDIA
          </p>
        </div>

        <nav className="flex items-center gap-5" aria-label="Social links">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DJ JAS on Instagram"
            className="text-dust hover:text-marigold transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DJ JAS on YouTube"
            className="text-dust hover:text-marigold transition-colors"
          >
            <Youtube size={18} />
          </a>
        </nav>

        <p className="font-mono text-[11px] text-dust">
          © {year} DJ JAS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
