export default function Badge({ children }) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-slate-300
        bg-slate-100
        px-4
        py-2
        text-sm
        font-medium
        text-slate-700
        transition-all
        duration-200
        hover:border-blue-500
        hover:bg-blue-50
        hover:text-blue-600
      "
    >
      {children}
    </span>
  );
}