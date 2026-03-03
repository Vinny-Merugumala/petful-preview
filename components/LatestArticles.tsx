"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import TrendingSidebar from "./TrendingSidebar";
import WeeklyTipsCard from "./WeeklyTipsCard";

const articles = [
  {
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
    category: "Training",
    categoryColor: "bg-teal/15 text-teal",
    timeAgo: "2 hours ago",
    title: "How to Stop Your Dog from Pulling on the Leash",
    excerpt:
      "Proven techniques to teach your dog loose-leash walking for more enjoyable walks together.",
    readTime: "6 min read",
    alt: "Dog walking on a leash with owner",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=400&q=80",
    category: "Health",
    categoryColor: "bg-red/15 text-red",
    timeAgo: "5 hours ago",
    title: "Common Skin Conditions in Dogs: A Complete Guide",
    excerpt:
      "Learn to identify, treat, and prevent the most common skin issues affecting dogs of all breeds and ages.",
    readTime: "10 min read",
    alt: "Dog being examined by veterinarian",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80",
    category: "Nutrition",
    categoryColor: "bg-orange/15 text-orange",
    timeAgo: "8 hours ago",
    title: "Is Grain-Free Cat Food Really Better?",
    excerpt:
      "We break down the science behind grain-free diets and whether they're the right choice for your feline friend.",
    readTime: "7 min read",
    alt: "Cat eating from a food bowl",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=400&q=80",
    category: "Behavior",
    categoryColor: "bg-purple/15 text-purple",
    timeAgo: "12 hours ago",
    title: "The Best Way to Introduce a New Cat to Your Home",
    excerpt:
      "A step-by-step guide to helping your new feline family member adjust to their forever home.",
    readTime: "8 min read",
    alt: "Cat exploring a new home environment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=400&q=80",
    category: "Behavior",
    categoryColor: "bg-purple/15 text-purple",
    timeAgo: "1 day ago",
    title: "Understanding Your Dog's Body Language",
    excerpt:
      "Discover what your dog is trying to tell you through their posture, tail, ears, and facial expressions.",
    readTime: "9 min read",
    alt: "Dog showing expressive body language",
  },
];

export default function LatestArticles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 bg-[#f7f9fa]">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1.5 h-7 bg-teal rounded-full" />
          <h2 className="font-heading text-2xl md:text-3xl text-dark">
            The Latest
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* Left: Articles list */}
          <div className="space-y-4">
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="group cursor-pointer flex gap-5 bg-white rounded-2xl p-4 hover:shadow-md transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative w-[140px] h-[170px] shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="240px"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`${article.categoryColor} text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full`}
                    >
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {article.timeAgo}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg text-dark leading-snug mb-1.5 group-hover:text-teal transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-2">
                    {article.excerpt}
                  </p>
                  <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <svg
                      className="w-3.5 h-3.5"
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
                    {article.readTime}
                  </span>
                </div>
              </motion.article>
            ))}

            {/* Load More */}
            <div className="flex justify-center pt-6">
              <button className="border-2 border-gray-300 bg-white text-gray-600 font-semibold text-sm px-8 py-3 rounded-full hover:border-teal hover:text-teal transition-all duration-200">
                Load More
              </button>
            </div>
          </div>

          {/* Right: Sidebar */}
          <aside className="space-y-8">
            <TrendingSidebar />
            <WeeklyTipsCard />
          </aside>
        </div>
      </div>
    </section>
  );
}
