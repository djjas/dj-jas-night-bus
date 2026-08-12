const SPARK_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

export default function TouchEffect({ x, y, color }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: x, top: y, width: 0, height: 0 }}
      aria-hidden="true"
    >
      {/* expanding ripple */}
      <span
        className="absolute rounded-full animate-neon-ripple"
        style={{
          left: -8,
          top: -8,
          width: 16,
          height: 16,
          border: `1.5px solid ${color}`,
          boxShadow: `0 0 10px ${color}, 0 0 22px ${color}`,
        }}
      />

      {/* spark burst */}
      {SPARK_ANGLES.map((angle) => (
        <span
          key={angle}
          className="absolute animate-neon-spark"
          style={{
            left: -1,
            top: 0,
            width: 2,
            height: 10,
            background: color,
            boxShadow: `0 0 6px ${color}`,
            transformOrigin: "50% 100%",
            "--angle": `${angle}deg`,
          }}
        />
      ))}
    </div>
  );
}
