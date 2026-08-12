export default function NightHighway({ accentColor = "#E8A33D" }) {
  const glow = {
    filter: `drop-shadow(0 0 4px ${accentColor}) drop-shadow(0 0 12px ${accentColor})`,
  };

  return (
    <svg
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="vignette" cx="50%" cy="30%" r="85%">
          <stop offset="0%" stopColor="#0B0A0C" stopOpacity="0" />
          <stop offset="100%" stopColor="#0B0A0C" stopOpacity="0.45" />
        </radialGradient>
        <radialGradient id="headlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: accentColor, stopOpacity: 0.9 }} />
          <stop offset="100%" style={{ stopColor: accentColor, stopOpacity: 0 }} />
        </radialGradient>
        <linearGradient id="fade-bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B0A0C" stopOpacity="0" />
          <stop offset="88%" stopColor="#0B0A0C" stopOpacity="0" />
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
      <polygon points="510,520 1090,520 1300,700 300,700" fill="#100E0C" />
      <g fill="#E8A33D" opacity="0.5">
        {[520, 570, 620, 670, 720].map((x, i) => (
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

      {/* ═══════════════════════ BUS ═══════════════════════ */}
      <g>
        <ellipse cx="825" cy="600" rx="270" ry="18" fill="#000000" opacity="0.35" />

        {/* headlight glow */}
        <circle cx="1065" cy="555" r="50" fill="url(#headlight)" className="animate-neon-pulse" />

        {/* roof luggage */}
        <rect x="700" y="392" width="70" height="24" rx="3" fill="#3A342E" stroke="#4A423A" />
        <rect x="778" y="388" width="56" height="28" rx="3" fill="#2E2924" stroke="#4A423A" />
        <line x1="700" y1="404" x2="834" y2="404" stroke="#4A423A" strokeWidth="1.5" />

        {/* body */}
        <rect x="580" y="416" width="480" height="144" rx="16" fill="#221D19" stroke="#3A342E" />

        {/* skirting ornament (bottom trim) */}
        <g fill="#171412">
          {Array.from({ length: 24 }).map((_, i) => (
            <polygon
              key={i}
              points={`${590 + i * 20},552 ${600 + i * 20},552 ${595 + i * 20},560`}
            />
          ))}
        </g>

        {/* chrome beltline */}
        <rect x="580" y="480" width="480" height="2.5" fill="#8C8377" opacity="0.5" />

        {/* neon roofline strip */}
        <rect x="580" y="416" width="480" height="4" fill={accentColor} style={glow} className="animate-neon-pulse" />

        {/* neon accent stripe */}
        <rect x="580" y="540" width="480" height="6" fill={accentColor} style={glow} className="animate-neon-pulse" />

        {/* sun visor + windshield */}
        <rect x="1000" y="436" width="52" height="6" rx="2" fill="#3A342E" />
        <path d="M1002 446 h48 a6 6 0 0 1 6 6 v40 a6 6 0 0 1 -6 6 h-48 a6 6 0 0 1 -6 -6 v-40 a6 6 0 0 1 6 -6 z" fill="#0B0A0C" stroke="#3A342E" />

        {/* arched windows */}
        {[600, 654, 708, 762, 816, 870, 924].map((x, i) => (
          <path
            key={x}
            d={`M${x} 462 h44 v26 a22 22 0 0 1 -44 0 z`}
            fill={i === 1 || i === 5 ? accentColor : "#0B0A0C"}
            opacity={i === 1 || i === 5 ? 0.5 : 1}
            stroke="#3A342E"
          />
        ))}

        {/* DJ JAS neon sign */}
        <text
          x="820"
          y="522"
          textAnchor="middle"
          fontFamily="'Fraunces', Georgia, serif"
          fontWeight="600"
          fontSize="26"
          fill={accentColor}
          style={glow}
          className="animate-neon-pulse"
        >
          DJ JAS
        </text>

        {/* destination board */}
        <rect x="1000" y="500" width="46" height="16" rx="2" fill="#0B0A0C" stroke="#3A342E" />
        <text
          x="1023"
          y="511"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="7"
          fill={accentColor}
          opacity="0.9"
        >
          NIGHT BUS
        </text>

        {/* door + step */}
        <rect x="960" y="490" width="34" height="66" rx="3" fill="#100E0C" stroke="#3A342E" />
        <line x1="977" y1="496" x2="977" y2="550" stroke="#3A342E" strokeWidth="2" />
        <rect x="958" y="558" width="38" height="4" rx="1" fill="#4A423A" />

        {/* side mirror */}
        <rect x="1052" y="470" width="4" height="18" fill="#3A342E" />
        <rect x="1048" y="462" width="12" height="10" rx="2" fill="#171412" stroke="#3A342E" />

        {/* front bumper + headlamp cluster */}
        <rect x="1052" y="548" width="10" height="10" rx="2" fill="#4A423A" />
        <circle cx="1063" cy="553" r="9" fill="#F3ECE0" style={glow} />
        <circle cx="1063" cy="553" r="4" fill="#FFFFFF" />

        {/* rear bumper + taillight */}
        <rect x="580" y="548" width="10" height="10" rx="2" fill="#4A423A" />
        <circle cx="588" cy="553" r="6" fill="#C1432A" opacity="0.85" />
        <rect x="566" y="552" width="14" height="5" rx="2" fill="#171412" stroke="#3A342E" />

        {/* wheels */}
        {[672, 968].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="576" r="28" fill="#0B0A0C" stroke="#3A342E" strokeWidth="6" />
            <circle cx={cx} cy="576" r="10" fill="#221D19" stroke="#4A423A" strokeWidth="2" />
            {[0, 60, 120].map((r) => (
              <line
                key={r}
                x1={cx}
                y1="568"
                x2={cx}
                y2="584"
                stroke="#4A423A"
                strokeWidth="2"
                transform={`rotate(${r} ${cx} 576)`}
              />
            ))}
          </g>
        ))}
      </g>

      <rect width="1600" height="700" fill="url(#vignette)" />
      <rect width="1600" height="700" fill="url(#fade-bottom)" />
    </svg>
  );
}
