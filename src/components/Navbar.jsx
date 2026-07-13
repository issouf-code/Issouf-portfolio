import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "./ui/Container";
import { navLinks } from "../constants/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="
              font-heading
              text-xl
              font-bold
              text-slate-900
            "
          >
            IL<span className="text-blue-600">.</span>
          </a>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  relative
                  text-sm
                  font-medium
                  transition
                  ${
                    active === link.href.replace("#", "")
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }
                `}
              >
                {link.label}

                {active === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="active"
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      w-full
                      bg-blue-600
                    "
                  />
                )}
              </a>
            ))}
          </nav>


          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="
              lg:hidden
              text-slate-700
            "
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>


        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="
                lg:hidden
                overflow-hidden
                border-t
                border-slate-200
              "
            >
              <div className="
                flex
                flex-col
                gap-5
                py-6
              ">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="
                      text-slate-600
                      hover:text-blue-600
                      transition
                    "
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

      </Container>
    </motion.header>
  );
}