"use client";

import { motion, useReducedMotion } from "framer-motion";
import { categories, type CategoryFilter as CategoryFilterType } from "@/data/burgers";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  active: CategoryFilterType;
  onChange: (category: CategoryFilterType) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="category-filter" role="group" aria-label="Filter menu categories">
      {categories.map((category) => (
        <motion.button
          className={cn("category-filter__button focus-ring", active === category && "is-active")}
          type="button"
          key={category}
          onClick={() => onChange(category)}
          aria-pressed={active === category}
          whileTap={reduceMotion ? undefined : { scale: 0.9 }}
        >
          {active === category && !reduceMotion ? (
            <motion.span className="category-filter__active" layoutId="active-category" />
          ) : null}
          <span>{category}</span>
        </motion.button>
      ))}
    </div>
  );
}
