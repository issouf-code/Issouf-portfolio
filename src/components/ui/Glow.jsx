export default function Glow({
  className = "",
}) {
  return (
    <div
      className={`
        absolute
        rounded-full
        bg-gradient-to-r
        from-blue-400/30
        via-cyan-400/20
        to-indigo-500/30
        blur-[140px]
        opacity-80
        pointer-events-none
        ${className}
      `}
    />
  );
}