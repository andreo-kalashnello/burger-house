"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Promos", href: "#promos" },
  { label: "About Us", href: "#about" },
  { label: "Locations", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setCompact(window.scrollY > 36);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={cn("site-header", compact && "site-header--compact")}>
      <div className="site-header__panel">
        <BrandLogo />
        <nav className="site-header__nav" aria-label="Primary navigation">
          {navigation.map((item, index) => (
            <a
              className={cn("site-header__link focus-ring", index === 0 && "is-active")}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="site-header__actions">
          <a className="cart-button focus-ring" href="#menu" aria-label={`Cart with ${itemCount} items`}>
            <motion.span
              className="cart-button__icon"
              key={itemCount}
              initial={reduceMotion ? false : { scale: 0.6 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <ShoppingBag aria-hidden="true" size={21} />
            </motion.span>
            <motion.span
              className="cart-button__count"
              key={`count-${itemCount}`}
              aria-hidden="true"
              initial={reduceMotion ? false : { scale: 0.4, y: -6 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 14 }}
            >
              {itemCount}
            </motion.span>
          </a>
          <Button className="site-header__order" href="#menu">
            Order now
          </Button>
          <button
            className="mobile-menu-button focus-ring"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-navigation"
            className="mobile-navigation"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {navigation.map((item) => (
              <a
                className="mobile-navigation__link focus-ring"
                href={item.href}
                key={item.label}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button href="#menu" onClick={() => setMenuOpen(false)}>
              Order now
            </Button>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
