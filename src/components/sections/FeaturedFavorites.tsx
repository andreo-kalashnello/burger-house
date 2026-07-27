"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu as MenuIcon } from "lucide-react";
import { useState } from "react";
import { burgers, type CategoryFilter as CategoryFilterType } from "@/data/burgers";
import { BurgerCard } from "@/components/ui/BurgerCard";
import { CategoryFilter } from "@/components/ui/CategoryFilter";

export function FeaturedFavorites() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilterType>("All");
  const reduceMotion = useReducedMotion();

  const filteredBurgers =
    activeCategory === "All" || activeCategory === "Burgers"
      ? burgers
      : burgers.filter((burger) => burger.category === activeCategory);

  return (
    <section className="favorites-section section-shell" id="menu" aria-labelledby="favorites-title">
      <div className="container">
        <header className="favorites-header">
          <div>
            <span className="script-accent">Try Our</span>
            <h2 id="favorites-title">Featured Favorites</h2>
          </div>
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </header>
        <motion.div className="burger-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredBurgers.map((burger) => (
              <BurgerCard burger={burger} key={burger.id} />
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredBurgers.length === 0 ? (
          <motion.div
            className="empty-menu-state"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            role="status"
          >
            <MenuIcon aria-hidden="true" />
            <h3>Fresh picks are coming soon</h3>
            <p>Choose All or Burgers to see today&apos;s featured favorites.</p>
          </motion.div>
        ) : null}
        <a className="full-menu-button focus-ring" href="#menu">
          View full menu
          <MenuIcon aria-hidden="true" size={19} />
        </a>
      </div>
    </section>
  );
}
