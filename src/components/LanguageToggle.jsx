import { LANGUAGES } from "../data/tracks";

export default function LanguageToggle({ activeLanguage, onChange }) {
  return (
    <div
      className="flex items-center gap-1 border border-line p-1 w-fit"
      role="radiogroup"
      aria-label="Filter by language"
    >
      {LANGUAGES.map((lang) => {
        const active = activeLanguage === lang.code;
        return (
          <button
            key={lang.code}
            role="radio"
            aria-checked={active}
            onClick={() => onChange(lang.code)}
            className={`px-3 py-1.5 text-sm transition-colors duration-200 ${
              active
                ? "bg-paper text-night"
                : "text-dust hover:text-paper"
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
