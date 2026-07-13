import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download } from "lucide-react";

import profile from "../assets/profile.png";

import Container from "./ui/Container";
import Button from "./ui/Button";
import Glow from "./ui/Glow";
import SocialLinks from "./ui/SocialLinks";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-200, 200], [8, -8]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-200, 200], [-8, 8]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
  id="home"
  className="
    relative
    flex
    min-h-screen
    items-center
    overflow-hidden
    pt-20
  "
>
      
      <Glow className="right-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue-600
            ">
              👋 Hello, I'm
            </p>

            <h1
              className="
                mt-5
                font-heading
                text-5xl
                font-black
                leading-tight
                md:text-7xl
                bg-gradient-to-r
                from-slate-900
                via-slate-700
                to-blue-600
                bg-clip-text
                text-transparent
              "
            >
              Issoufou Ibrahim Lawan
            </h1>

            <div className="
              mt-5
              h-10
              text-2xl
              font-semibold
              text-slate-700
            ">
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Laravel Developer",
                  2000,
                  "UI Enthusiast",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </div>

            <p className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-slate-600
            ">
              I build fast, scalable, and beautiful web applications using
              React, Laravel, Node.js, Tailwind CSS, and modern web
              technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#projects" icon>
                View Projects
              </Button>

              <Button href="/cv.pdf" variant="secondary">
                Download CV
                <Download size={18} />
              </Button>
            </div>

            <div className="mt-10">
              <SocialLinks />
            </div>

          </motion.div>


          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative flex justify-center"
          >
            <Glow className="h-80 w-80 bg-cyan-400/20" />

            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={resetMouse}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              <img
                src={profile}
                alt="Mohamed Hassan"
                className="
                  w-full
                  max-w-md
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white
                  object-cover
                  shadow-2xl
                  lg:max-w-lg
                "
              />
            </motion.div>

          </motion.div>

        </div>
      </Container>


      {/* Scroll Indicator */}

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-sm
          text-slate-500
          hover:text-blue-600
        "
      >
        <span>Scroll</span>

        <div className="
          h-10
          w-6
          rounded-full
          border
          border-slate-300
          p-1
        ">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="
              mx-auto
              h-2
              w-2
              rounded-full
              bg-blue-600
            "
          />
        </div>

      </motion.a>

    </section>
  );
}