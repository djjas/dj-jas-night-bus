export default function NightHighway() {
  return (
    <svg
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="vignette" cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#0B0A0C" stopOpacity="0" />
          <stop offset="100%" stopColor="#0B0A0C" stopOpacity="0.9" />
        </radialGradient>
        <radialGradient id="headlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8A33D" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E8A33D" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fade-bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B0A0C" stopOpacity="0" />
          <stop offset="100%" stopColor="#0B0A0C" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* sky */}
      <rect width="1600" height="700" fill="#0B0A0C" />

      {/* stars */}
      <g fill="#F3ECE0" opacity="0.5">
        {[
          [120, 90], [260, 150], [400, 70], [560, 130], [740, 60],
          [900, 110], [1040, 60], [1200, 140], [1340, 80], [1480, 120],
          [220, 220], [980, 200], [1420, 210],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.6 : 1} opacity={0.3 + (i % 4) * 0.15} />
        ))}
      </g>

      {/* far hills */}
      <polygon
        points="0,460 150,410 340,450 520,400 700,440 900,395 1100,435 1300,400 1600,440 1600,700 0,700"
        fill="#141212"
      />
      {/* near hills */}
      <polygon
        points="0,520 200,480 420,510 640,470 860,505 1080,465 1300,500 1600,470 1600,700 0,700"
        fill="#1A1614"
      />

      {/* road */}
      <polygon points="560,520 1040,520 1250,700 350,700" fill="#100E0C" />
      <g fill="#E8A33D" opacity="0.55">
        {[560, 610, 660, 710, 760].map((x, i) => (
          <rect key={i} x={x + i * 8} y={640 + i * 4} width="26" height="6" rx="2" />
        ))}
      </g>

      {/* rain streaks */}
      <g stroke="#F3ECE0" strokeWidth="1" opacity="0.12">
        {[
          [180, 60, 150, 160], [340, 100, 310, 210], [1220, 80, 1190, 190],
          [1380, 140, 1350, 250], [80, 300, 55, 400], [1500, 260, 1470, 370],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>

      {/* bus */}
      <g>
        <ellipse cx="810" cy="595" rx="230" ry="18" fill="#000000" opacity="0.35" />

        {/* headlight glow */}
        <circle cx="1015" cy="548" r="46" fill="url(#headlight)" />

        {/* body */}
        <rect x="605" y="430" width="410" height="130" rx="14" fill="#171412" stroke="#2A2622" />
        {/* roofline accent */}
        <rect x="605" y="430" width="410" height="6" fill="#E8A33D" opacity="0.85" />
        {/* lower accent stripe */}
        <rect x="605" y="524" width="410" height="8" fill="#C1432A" opacity="0.85" />

        {/* windshield */}
        <rect x="965" y="452" width="42" height="58" rx="6" fill="#0B0A0C" stroke="#2A2622" />

        {/* windows */}
        {[630, 680, 730, 780, 830, 880].map((x, i) => (
          <rect
            key={x}
            x={x}
            y="452"
            width="36"
            height="42"
            rx="5"
            fill={i === 1 || i === 4 ? "#E8A33D" : "#0B0A0C"}
            opacity={i === 1 || i === 4 ? 0.55 : 1}
            stroke="#2A2622"
          />
        ))}

        {/* headlight lamp */}
        <circle cx="1005" cy="548" r="7" fill="#F3ECE0" />

        {/* wheels */}
        <circle cx="680" cy="565" r="26" fill="#0B0A0C" stroke="#2A2622" strokeWidth="6" />
        <circle cx="940" cy="565" r="26" fill="#0B0A0C" stroke="#2A2622" strokeWidth="6" />
        <circle cx="680" cy="565" r="8" fill="#2A2622" />
        <circle cx="940" cy="565" r="8" fill="#2A2622" />
      </g>

      <rect width="1600" height="700" fill="url(#vignette)" />
      <rect width="1600" height="700" fill="url(#fade-bottom)" />
    </svg>
  );
}
