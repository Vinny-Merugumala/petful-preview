"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/petful_logo.png"
            alt="Petful"
            width={120}
            height={36}
            className={`h-8 w-auto transition-all duration-500 ${scrolled ? "" : "brightness-0 invert"}`}
            priority
          />
        </a>

        {/* Subscribe Button */}
        <button className="bg-coral hover:bg-coral/90 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-coral/25 active:scale-[0.97]">
          Subscribe
        </button>
      </div>
    </motion.nav>
  );
}
