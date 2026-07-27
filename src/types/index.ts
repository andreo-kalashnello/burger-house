export type BurgerCategory = "Burgers" | "Chicken" | "Sides" | "Drinks";

export type BurgerBadgeTone = "green" | "yellow" | "red" | "orange";

export interface Burger {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: BurgerCategory;
  badge?: {
    label: string;
    tone: BurgerBadgeTone;
  };
}

export interface Benefit {
  title: string;
  description: string;
  color: string;
  icon: "leaf" | "delivery" | "burger" | "chef";
}
