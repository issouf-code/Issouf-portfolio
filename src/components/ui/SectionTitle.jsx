import { motion } from "framer-motion";

export default function SectionTitle({
  eyebrow,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-20 text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </motion.div>
  );
}