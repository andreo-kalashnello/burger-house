export type BurgerCategory = "Burgers" | "Chicken" | "Sides" | "Drinks";

export type BurgerBadgeTone = "green" | "yellow" | "red" | "orange";

export type BurgerIcon = "tenders" | "wings" | "fries" | "salad" | "cola" | "milkshake";

export interface Burger {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  icon?: BurgerIcon;
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
