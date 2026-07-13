export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-8
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-blue-500
        ${className}
      `}
    >
      {children}
    </div>
  );
}