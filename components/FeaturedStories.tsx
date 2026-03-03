"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stories = [
  {
    image:
      "/featured-puppy-training.png",
    category: "Training",
    categoryColor: "bg-teal/15 text-teal",
    title: "Essential Puppy Training Tips for First-Time Owners",
    alt: "Golden retriever puppy sitting attentively during training",
  },
  {
    image:
      "/featured-cat-nutrition.png",
    category: "Nutrition",
    categoryColor: "bg-orange/15 text-orange",
    title: "Understanding Your Cat's Nutritional Needs",
    alt: "Person at home with their cat",
  },
  {
    image:
      "/featured-senior-dog.png",
    category: "Health",
    categoryColor: "bg-red/15 text-red",
    title: "Caring for Your Senior Dog: A Complete Guide",
    alt: "Senior golden retriever resting at home",
  },
  {
    image:
      "/featured-vet-checkup.png",
    category: "Health",
    categoryColor: "bg-red/15 text-red",
    title: "When to Take Your Cat to the Vet",
    alt: "Cat at veterinary checkup",
  },
];

export default function FeaturedStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-7 bg-coral rounded-full" />
            <h2 className="font-heading text-2xl md:text-3xl text-dark">
              Featured Stories
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-teal hover:text-teal transition-colors">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-teal hover:text-teal transition-colors">
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, i) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="pt-3">
                <span
                  className={`${story.categoryColor} text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full`}
                >
                  {story.category}
                </span>
                <h3 className="font-heading text-base text-dark mt-2.5 leading-snug group-hover:text-teal transition-colors duration-200">
                  {story.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
