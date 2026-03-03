"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] max-h-[800px] overflow-hidden">
      {/* Background Image with Ken Burns */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1920&q=80"
          alt="Happy family with their golden retriever in a sunny garden"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-[1320px] mx-auto px-6 flex flex-col justify-end pb-16 md:pb-20">
        {/* Category Pills */}
        <motion.div
          className="flex gap-2 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="bg-teal text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            Dog Care
          </span>
          <span className="bg-dark/70 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            Features
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] max-w-2xl mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          The Complete Guide to Raising a Happy, Healthy Dog
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-white/80 text-base md:text-lg max-w-xl mb-6 font-body"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          From puppyhood to senior years, discover everything you need to know
          about nutrition, training, health, and building a strong bond with your
          furry companion.
        </motion.p>

        {/* CTA + Meta */}
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <button className="bg-dark hover:bg-dark/80 text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 flex items-center gap-2 group">
            Read Article
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <span className="flex items-center gap-1.5 text-white/70 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            12 min read
          </span>
        </motion.div>
      </div>
    </section>
  );
}
