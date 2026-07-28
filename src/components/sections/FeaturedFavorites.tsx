"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu as MenuIcon, Sandwich, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { burgers, type CategoryFilter as CategoryFilterType } from "@/data/burgers";
import { BurgerCard } from "@/components/ui/BurgerCard";
import { CategoryFilter } from "@/components/ui/CategoryFilter";

const ROW_SIZE = 4;

export function FeaturedFavorites() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilterType>("All");
  const [visibleRows, setVisibleRows] = useState(1);
  const reduceMotion = useReducedMotion();

  const filteredBurgers =
    activeCategory === "All" ? burgers : burgers.filter((burger) => burger.category === activeCategory);

  const visibleCount = visibleRows * ROW_SIZE;
  const visibleBurgers = filteredBurgers.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBurgers.length;

  const handleCategoryChange = (category: CategoryFilterType) => {
    setActiveCategory(category);
    setVisibleRows(1);
  };

  return (
    <section className="favorites-section section-shell" id="menu" aria-labelledby="favorites-title">
      <div className="section-decor" aria-hidden="true">
        <Sandwich
          className="section-decor__icon section-decor__icon--drift-a"
          style={{ top: "8%", left: "4%" }}
          size={110}
        />
        <Star className="section-decor__icon section-decor__icon--drift-b" style={{ top: "12%", right: "8%" }} size={70} />
        <Sparkles
          className="section-decor__icon section-decor__icon--drift-c"
          style={{ bottom: "10%", left: "12%" }}
          size={56}
        />
      </div>
      <div className="container">
        <header className="favorites-header">
          <div>
            <span className="script-accent">Try Our</span>
            <h2 id="favorites-title">Featured Favorites</h2>
          </div>
          <CategoryFilter active={activeCategory} onChange={handleCategoryChange} />
        </header>
        <motion.div className="burger-grid" layout>
          <AnimatePresence mode="popLayout">
            {visibleBurgers.map((burger) => (
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
            <p>Check back soon for more picks in this category.</p>
          </motion.div>
        ) : null}
        {hasMore ? (
          <motion.button
            type="button"
            className="full-menu-button focus-ring"
            onClick={() => setVisibleRows((rows) => rows + 1)}
            whileHover={reduceMotion ? undefined : { y: -3 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
          >
            Load more
            <motion.span
              className="full-menu-button__icon"
              animate={reduceMotion ? undefined : { y: [0, 3, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown aria-hidden="true" size={19} />
            </motion.span>
          </motion.button>
        ) : (
          <a className="full-menu-button focus-ring" href="#menu">
            View full menu
            <MenuIcon aria-hidden="true" size={19} />
          </a>
        )}
      </div>
    </section>
  );
}
