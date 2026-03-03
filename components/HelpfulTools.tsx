"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const tools = [
  {
    image:
      "/tool-chocolate-toxicity.png",
    name: "Chocolate Toxicity Calculator",
    description:
      "Quickly check if your dog ate a dangerous amount of chocolate and what steps to take.",
    alt: "Chocolate bars - toxicity calculator",
  },
  {
    image:
      "/tool-calorie-calculator.png",
    name: "Daily Calorie Calculator",
    description:
      "Find the right portion size for your pet's needs based on breed, age, and activity.",
    alt: "Pet food measuring - calorie calculator",
  },
  {
    image:
      "/tool-breed-size.png",
    name: "Breed Size Estimator",
    description:
      "Predict how big your puppy will get based on current weight and breed information.",
    alt: "Puppy next to adult dog - size estimator",
  },
];

export default function HelpfulTools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 text-center">
        <h2 className="font-heading text-2xl md:text-3xl text-dark mb-2">
          Helpful Tools
        </h2>
        <p className="text-gray-500 text-sm mb-10">
          Free calculators for pet owners
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: "easeOut",
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={tool.image}
                  alt={tool.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-lg text-dark mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {tool.description}
                </p>
                <button className="border-2 border-coral text-coral font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-coral hover:text-white transition-all duration-200">
                  Try it
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
