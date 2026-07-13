import { motion } from "framer-motion";
import { useMemo } from "react";

export default function BackgroundParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 4 + (index % 5),
        delay: index * 0.1,
      })),
    []
  );

  return (
    <div
      className="
        fixed
        inset-0
        -z-10
        overflow-hidden
        pointer-events-none
      "
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
          className="
            absolute
            h-1
            w-1
            rounded-full
            bg-blue-500
          "
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
}