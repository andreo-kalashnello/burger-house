"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Clock3, Flame, Sandwich, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { HeroBurgerModel } from "@/components/ui/HeroBurgerModel";

const avatars = [
  "/images/avatars/customer-1.jpg",
  "/images/avatars/customer-2.jpg",
  "/images/avatars/customer-3.jpg",
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const tomatoY = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const lettuceY = useTransform(scrollYProgress, [0, 1], [0, -34]);

  return (
    <section className="hero-section" id="home" ref={sectionRef} aria-labelledby="hero-title">
      <div className="hero-pattern" aria-hidden="true" />
      <div className="container hero-section__inner">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Flame aria-hidden="true" size={15} fill="currentColor" />
            HOT &amp; FRESH
          </motion.div>
          <h1 id="hero-title">
            {["Big Flavor.", "Big Burgers.", "Big Mood."].map((line, index) => (
              <motion.span
                className={index === 1 ? "hero-title__accent" : undefined}
                initial={reduceMotion ? false : { opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.09 + index * 0.1, duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
                key={line}
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="hero-copy__description"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.5 }}
          >
            Juicy patties, melty cheese, and
            <br />
            bold flavors stacked just right.
            <br />
            Made fresh. Made for you.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.45 }}
          >
            <Button href="#menu">Order now</Button>
            <Button href="#menu" variant="secondary" showArrow={false}>
              View menu
              <Sandwich className="mini-burger" aria-hidden="true" size={18} />
            </Button>
          </motion.div>
          <motion.div
            className="social-proof"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.62, duration: 0.45 }}
          >
            <div className="avatar-stack">
              {avatars.map((avatar, index) => (
                <Image
                  src={avatar}
                  alt=""
                  width={40}
                  height={40}
                  key={avatar}
                  style={{ zIndex: avatars.length - index }}
                />
              ))}
            </div>
            <div>
              <strong>4.8k+ happy burger lovers!</strong>
              <span className="rating-line" aria-label="4.8 out of 5 stars from 2.3 thousand reviews">
                <span aria-hidden="true">★★★★★</span> 4.8 (2.3k reviews)
              </span>
            </div>
          </motion.div>
        </div>
        <div className="hero-visual" aria-label="Burger House signature burger">
          <div className="hero-burger">
            <motion.div
              className="hero-burger__float"
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <HeroBurgerModel autoRotate={!reduceMotion} />
            </motion.div>
          </div>
          <motion.div
            className="discount-badge"
            animate={reduceMotion ? undefined : { scale: [1, 1.035, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <small>GET</small>
            <strong>20%</strong>
            <small>OFF</small>
          </motion.div>
          <motion.div
            className="floating-card floating-card--delivery"
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Clock3 aria-hidden="true" />
            <strong>20–30 min</strong>
            <span>Fast Delivery</span>
          </motion.div>
          <motion.div
            className="floating-card floating-card--rating"
            animate={reduceMotion ? undefined : { y: [0, 9, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <Star aria-hidden="true" fill="currentColor" />
            <strong>4.8</strong>
            <span>Google Rating</span>
          </motion.div>
          <div className="hero-tomato" aria-hidden="true">
            <motion.div style={{ y: reduceMotion ? 0 : tomatoY }}>
              <Image src="/images/hero/tomato.png" alt="" width={150} height={150} />
            </motion.div>
          </div>
          <div className="hero-lettuce" aria-hidden="true">
            <motion.div style={{ y: reduceMotion ? 0 : lettuceY }}>
              <Image src="/images/hero/lettuce.png" alt="" width={800} height={501} />
            </motion.div>
          </div>
          <motion.div
            className="doodle doodle--spark-one"
            aria-hidden="true"
            animate={reduceMotion ? undefined : { rotate: [0, 18, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles />
          </motion.div>
          <motion.div
            className="doodle doodle--spark-two"
            aria-hidden="true"
            animate={reduceMotion ? undefined : { rotate: [0, -16, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <Sparkles />
          </motion.div>
          <motion.div
            className="doodle doodle--star"
            aria-hidden="true"
            animate={reduceMotion ? undefined : { rotate: [0, 360] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          >
            <Star />
          </motion.div>
        </div>
      </div>
      <div className="hero-wave" aria-hidden="true">
        <Image src="/icons/wave.svg" alt="" fill sizes="100vw" />
      </div>
    </section>
  );
}
