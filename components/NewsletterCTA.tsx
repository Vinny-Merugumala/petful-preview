"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function NewsletterCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-dark py-16 md:py-20"
    >
      <div className="max-w-[640px] mx-auto px-6 text-center">
        {/* Mail Icon */}
        <div className="mb-5">
          <svg
            className="w-10 h-10 mx-auto text-white/80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl text-white mb-3">
          Get Pet Care Tips Weekly
        </h2>
        <p className="text-white/70 text-sm md:text-base mb-8 max-w-md mx-auto">
          Join 50,000+ pet owners getting expert advice delivered to their inbox.
        </p>

        {/* Input Row */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral/50 transition-all"
          />
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(244,132,95,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="bg-coral hover:bg-coral/90 text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 shrink-0"
          >
            Subscribe
          </motion.button>
        </div>

        <p className="text-white/40 text-xs">
          No spam. Unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </motion.section>
  );
}
