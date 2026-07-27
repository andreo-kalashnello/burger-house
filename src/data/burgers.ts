import type { Burger } from "@/types";

export const burgers: Burger[] = [
  {
    id: "classic-burger",
    name: "Classic Burger",
    description: "Beef patty, lettuce, tomato, onions, pickles, house sauce.",
    price: 7.49,
    image: "/images/burgers/classic.jpg",
    category: "Burgers",
    badge: { label: "Best seller", tone: "green" },
  },
  {
    id: "double-cheese",
    name: "Double Cheese",
    description: "Two juicy beef patties with double cheese, onions, pickles & special sauce.",
    price: 9.49,
    image: "/images/burgers/double-cheese.jpg",
    category: "Burgers",
    badge: { label: "Popular", tone: "yellow" },
  },
  {
    id: "spicy-jalapeno",
    name: "Spicy Jalapeño",
    description: "Beef patty, jalapeños, pepper jack cheese, spicy mayo.",
    price: 8.49,
    image: "/images/burgers/spicy-jalapeno.jpg",
    category: "Burgers",
    badge: { label: "Spicy", tone: "red" },
  },
  {
    id: "crispy-chicken",
    name: "Crispy Chicken Burger",
    description: "Crispy chicken, lettuce, pickle, mayo on a toasted bun.",
    price: 7.99,
    image: "/images/burgers/crispy-chicken.jpg",
    category: "Burgers",
    badge: { label: "New", tone: "orange" },
  },
];

export const categories = ["All", "Burgers", "Chicken", "Sides", "Drinks"] as const;

export type CategoryFilter = (typeof categories)[number];
