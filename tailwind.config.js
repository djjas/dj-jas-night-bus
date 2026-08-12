/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0B0A0C",
        panel: "#141212",
        paper: "#F3ECE0",
        marigold: "#E8A33D",
        sindoor: "#C1432A",
        dust: "#8C8377",
        line: "#2A2622",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        deva: ["'Yatra One'", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        roadline: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-200px 0" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.4" },
          "94%": { opacity: "1" },
        },
        neonPulse: {
          "0%, 100%": { opacity: "0.75" },
          "50%": { opacity: "1" },
        },
        neonRipple: {
          "0%": { transform: "scale(0)", opacity: "0.9" },
          "100%": { transform: "scale(16)", opacity: "0" },
        },
        neonSpark: {
          "0%": { transform: "rotate(var(--angle)) translateY(0) scaleY(0.4)", opacity: "1" },
          "100%": { transform: "rotate(var(--angle)) translateY(-24px) scaleY(1)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        roadline: "roadline 3.5s linear infinite",
        riseIn: "riseIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        flicker: "flicker 6s ease-in-out infinite",
        "neon-pulse": "neonPulse 2.6s ease-in-out infinite",
        "neon-ripple": "neonRipple 700ms ease-out forwards",
        "neon-spark": "neonSpark 500ms ease-out forwards",
      },
    },
  },
  plugins: [],
};
