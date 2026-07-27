"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Check, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import type { Burger } from "@/types";

export function BurgerCard({ burger }: { burger: Burger }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!added) return;

    const resetTimer = window.setTimeout(() => setAdded(false), 900);
    return () => window.clearTimeout(resetTimer);
  }, [added]);

  const handleAdd = () => {
    addItem();
    setAdded(true);
  };

  return (
    <motion.article
      className="burger-card"
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.28 }}
    >
      {burger.badge ? (
        <span className={cn("burger-card__badge", `burger-card__badge--${burger.badge.tone}`)}>
          {burger.badge.label}
        </span>
      ) : null}
      <div className="burger-card__image">
        <Image
          src={burger.image}
          alt={`${burger.name} with fresh toppings`}
          fill
          sizes="(max-width: 639px) 88vw, (max-width: 1023px) 44vw, 280px"
        />
      </div>
      <div className="burger-card__content">
        <h3>{burger.name}</h3>
        <p>{burger.description}</p>
      </div>
      <div className="burger-card__footer">
        <strong>{formatPrice(burger.price)}</strong>
        <motion.button
          type="button"
          className="burger-card__add focus-ring"
          aria-label={`Add ${burger.name} to cart`}
          onClick={handleAdd}
          whileTap={reduceMotion ? undefined : { scale: 0.84 }}
        >
          {added ? <Check aria-hidden="true" size={20} /> : <Plus aria-hidden="true" size={22} />}
        </motion.button>
      </div>
    </motion.article>
  );
}
