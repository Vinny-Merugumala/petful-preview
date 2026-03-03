"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const reviews = [
  {
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=600&q=80",
    category: "Gear",
    categoryColor: "bg-teal/15 text-teal",
    title: "We Tested 5 Popular Automatic Cat Feeders",
    description:
      "Only 2 made the cut. Here's what to look for when choosing an automatic feeder for your cat.",
    alt: "Automatic cat feeder with cat",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600&q=80",
    category: "Grooming",
    categoryColor: "bg-orange/15 text-orange",
    title: "The Best Dog Shampoos for Sensitive Skin",
    description:
      "Vet-approved formulas that actually work for dogs with allergies and sensitive skin.",
    alt: "Dog being bathed with shampoo",
  },
  {
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&q=80",
    category: "Health",
    categoryColor: "bg-red/15 text-red",
    title: "Are Smart Water Fountains Worth It?",
    description:
      "We tested 8 models over 30 days to find out if they really keep pets hydrated better.",
    alt: "Pet water fountain",
  },
];

export default function SpotlightReviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-7 bg-coral rounded-full" />
            <h2 className="font-heading text-2xl md:text-3xl text-dark">
              Spotlight Reviews
            </h2>
          </div>
          <a
            href="#"
            className="text-coral text-lg md:text-xl font-heading hover:underline flex items-center gap-1"
          >
            All Reviews
            <svg
              className="w-4 h-4"
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
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.article
              key={review.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: "easeOut",
              }}
              className="group cursor-pointer"
            >
              <div className="bg-[#f7f9fa] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                {/* Text */}
                <div className="p-8">
                  <span
                    className={`${review.categoryColor} text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full`}
                  >
                    {review.category}
                  </span>
                  <h3 className="font-heading text-lg text-dark leading-snug mt-2.5 mb-2 group-hover:text-teal transition-colors duration-200">
                    {review.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {review.description}
                  </p>
                  <span className="text-coral font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                    Read Full Review
                    <svg
                      className="w-4 h-4"
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
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
