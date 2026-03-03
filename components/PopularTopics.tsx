"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Dog,
  Cat,
  Stethoscope,
  PawPrint,
  Flower2,
  Brain,
  Scissors,
  Scale,
  Sparkles,
  Dumbbell,
  Box,
} from "lucide-react";

const topics = [
  { name: "Puppy Training", icon: Dog, color: "bg-teal/10 text-teal hover:bg-teal/20" },
  { name: "Cat Nutrition", icon: Cat, color: "bg-orange/10 text-orange hover:bg-orange/20" },
  { name: "Dog Health", icon: Stethoscope, color: "bg-teal/10 text-teal hover:bg-teal/20" },
  { name: "Kitten Care", icon: Cat, color: "bg-coral/10 text-coral hover:bg-coral/20" },
  { name: "Senior Pets", icon: PawPrint, color: "bg-gray-200 text-gray-600 hover:bg-gray-300" },
  { name: "Allergies", icon: Flower2, color: "bg-red/10 text-red hover:bg-red/20" },
  { name: "Anxiety", icon: Brain, color: "bg-purple/10 text-purple hover:bg-purple/20" },
  { name: "Grooming Tips", icon: Scissors, color: "bg-teal/10 text-teal hover:bg-teal/20" },
  { name: "Weight Management", icon: Scale, color: "bg-orange/10 text-orange hover:bg-orange/20" },
  { name: "Dental Care", icon: Sparkles, color: "bg-coral/10 text-coral hover:bg-coral/20" },
  { name: "Exercise Needs", icon: Dumbbell, color: "bg-teal/10 text-teal hover:bg-teal/20" },
  { name: "Litter Training", icon: Box, color: "bg-gray-200 text-gray-600 hover:bg-gray-300" },
];

export default function PopularTopics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 text-center">
        <h2 className="font-heading text-2xl md:text-3xl text-dark mb-2">
          Popular Topics
        </h2>
        <p className="text-gray-500 text-sm mb-10">
          Quick answers to common pet care questions
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <motion.button
                key={topic.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: i * 0.04,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className={`${topic.color} rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer hover:shadow-md hover:-translate-y-0.5 flex items-center gap-1.5`}
              >
                <Icon className="w-4 h-4" />
                {topic.name}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
