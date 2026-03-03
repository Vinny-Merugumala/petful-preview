"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Dog,
  Cat,
  Stethoscope,
  PawPrint,
  Bone,
  Brain,
  Scissors,
  Lightbulb,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categories: { name: string; icon: LucideIcon; active: boolean }[] = [
  { name: "Puppy Training", icon: Dog, active: false },
  { name: "Cat Nutrition", icon: Cat, active: false },
  { name: "Dog Health", icon: Stethoscope, active: true },
  { name: "Kitten Care", icon: PawPrint, active: false },
  { name: "Senior Pets", icon: Bone, active: false },
  { name: "Behavior Issues", icon: Brain, active: false },
  { name: "Grooming Tips", icon: Scissors, active: false },
  { name: "Tips", icon: Lightbulb, active: false },
];

export default function CategoryNav() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-white border-b border-gray-200">
      <div className="max-w-[1320px] mx-auto px-6 py-4">
        <div className="flex gap-3 overflow-x-auto hide-scrollbar">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 shrink-0 flex items-center gap-1.5 ${
                  cat.active
                    ? "bg-teal/15 text-teal font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-dark"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
