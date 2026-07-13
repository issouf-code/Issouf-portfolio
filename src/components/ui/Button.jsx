import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  href,
  icon = false,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700",
  };

  const classes = `
    inline-flex
    items-center
    gap-2
    rounded-full
    px-6
    py-3
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    active:translate-y-0
    focus:outline-none
    focus:ring-4
    focus:ring-blue-200
    ${styles[variant]}
  `;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon && <ArrowRight size={18} />}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}
      {icon && <ArrowRight size={18} />}
    </button>
  );
}