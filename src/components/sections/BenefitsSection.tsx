"use client";

import { Bike, ChefHat, Flame, Leaf, Sandwich, Sparkles, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import type { Benefit } from "@/types";

const benefits: Benefit[] = [
  {
    title: "Fresh Ingredients",
    description: "We use only the freshest ingredients, sourced daily for the best taste.",
    color: "#6ba52f",
    icon: "leaf",
  },
  {
    title: "Fast Delivery",
    description: "Hot, fresh, and fast. Delivered to your door in 20–30 minutes.",
    color: "#fdb813",
    icon: "delivery",
  },
  {
    title: "100% Juicy Patties",
    description: "Our beef patties are 100% fresh, never frozen and full of flavor.",
    color: "#d92721",
    icon: "burger",
  },
  {
    title: "Made Daily",
    description: "Everything is made to order, just the way you like it.",
    color: "#f06b15",
    icon: "chef",
  },
];

const icons: Record<Benefit["icon"], LucideIcon> = {
  leaf: Leaf,
  delivery: Bike,
  burger: Sandwich,
  chef: ChefHat,
};

export function BenefitsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="benefits-section section-shell" id="about" aria-labelledby="benefits-title">
      <div className="section-decor" aria-hidden="true">
        <Flame className="section-decor__icon section-decor__icon--drift-b" style={{ top: "6%", right: "6%" }} size={90} />
        <Sparkles
          className="section-decor__icon section-decor__icon--drift-a"
          style={{ bottom: "8%", left: "6%" }}
          size={64}
        />
      </div>
      <div className="container">
        <Reveal>
          <h2 className="benefits-title" id="benefits-title">
            <span aria-hidden="true">»</span>
            Why Burger House?
            <span aria-hidden="true">«</span>
          </h2>
        </Reveal>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = icons[benefit.icon];
            return (
              <Reveal className="benefit-item" delay={index * 0.06} key={benefit.title}>
                <motion.div
                  className="benefit-item__icon"
                  style={{ backgroundColor: benefit.color }}
                  whileHover={reduceMotion ? undefined : { rotate: -12, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                >
                  <Icon aria-hidden="true" size={31} strokeWidth={2.2} />
                </motion.div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
