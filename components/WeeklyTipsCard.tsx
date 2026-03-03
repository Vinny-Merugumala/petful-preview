"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WeeklyTipsCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="bg-coral-light rounded-2xl p-6 relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-coral/10 rounded-full" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-coral/10 rounded-full" />

      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <svg
            className="w-6 h-6 text-coral"
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
          <h3 className="font-heading text-xl text-dark">Get Weekly Tips</h3>
        </div>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
          Join <span className="font-bold text-dark">50,000+</span> pet owners
          getting expert advice delivered to their inbox.
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white rounded-full px-4 py-2.5 text-sm border-0 outline-none focus:ring-2 focus:ring-teal/30 placeholder:text-gray-400"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-teal hover:bg-teal/90 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200 shrink-0"
          >
            Subscribe
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
