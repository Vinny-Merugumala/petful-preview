"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Stethoscope,
  Beef,
  Target,
  Dog,
  Cat,
  SmilePlus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  name: string;
  icon: LucideIcon;
  articles: number;
  image: string;
  alt: string;
}

const dogCategories: Category[] = [
  {
    name: "Health & Care",
    icon: Stethoscope,
    articles: 45,
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
    alt: "Dog health care",
  },
  {
    name: "Food & Nutrition",
    icon: Beef,
    articles: 38,
    image:
      "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&q=80",
    alt: "Dog food and nutrition",
  },
  {
    name: "Training",
    icon: Target,
    articles: 52,
    image:
      "https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=400&q=80",
    alt: "Dog training",
  },
  {
    name: "Breeds",
    icon: Dog,
    articles: 67,
    image:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&q=80",
    alt: "Dog breeds",
  },
];

const catCategories: Category[] = [
  {
    name: "Health & Care",
    icon: Stethoscope,
    articles: 32,
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80",
    alt: "Cat health care",
  },
  {
    name: "Food & Nutrition",
    icon: Beef,
    articles: 28,
    image:
      "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=400&q=80",
    alt: "Cat food and nutrition",
  },
  {
    name: "Behavior",
    icon: SmilePlus,
    articles: 41,
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&q=80",
    alt: "Cat behavior",
  },
  {
    name: "Breeds",
    icon: Cat,
    articles: 35,
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&q=80",
    alt: "Cat breeds",
  },
];

function CategoryRow({
  title,
  titleIcon: TitleIcon,
  categories,
  delayStart = 0,
}: {
  title: string;
  titleIcon: LucideIcon;
  categories: Category[];
  delayStart?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <div className="flex items-center gap-2 mb-4">
        <TitleIcon className="w-5 h-5 text-teal" />
        <h3 className="font-heading text-xl text-dark">{title}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: delayStart + i * 0.08,
                ease: "easeOut",
              }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={cat.image}
                alt={cat.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1.5">
                  <Icon className="w-4 h-4 text-white" />
                  <h4 className="font-heading text-white text-base leading-tight">
                    {cat.name}
                  </h4>
                </div>
                <p className="text-white/70 text-xs mt-1">
                  {cat.articles} articles
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function BrowseCategories() {
  return (
    <section className="py-16 bg-[#f7f9fa]">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-teal rounded-full" />
          <h2 className="font-heading text-2xl md:text-3xl text-dark">
            Browse Categories
          </h2>
        </div>

        <div className="space-y-10">
          <CategoryRow
            title="For Dogs"
            titleIcon={Dog}
            categories={dogCategories}
          />
          <CategoryRow
            title="For Cats"
            titleIcon={Cat}
            categories={catCategories}
            delayStart={0.15}
          />
        </div>
      </div>
    </section>
  );
}
