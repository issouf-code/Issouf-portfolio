import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-slate-50
      "
    >

      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
          font-heading
          text-5xl
          font-black
          text-slate-900
        "
      >
        IL
        <span className="text-blue-600">
          .
        </span>

      </motion.div>

    </div>
  );
}