import type { ComponentType, SVGProps } from "react";
import type { Category } from "./products";
import { Coffee, Flame, Gift, HeartPulse, LayoutGrid, Sparkles, Sunrise } from "lucide-react";

export const categoryOrder: Category[] = [
  "Todos",
  "Miel",
  "Café y chocolates",
  "Desayunos",
  "Parrillas",
  "Salud",
  "Packs",
];

export const categoryMeta: Record<
  Category,
  {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    circleBg: string;
    accentBg: string;
    description: string;
    buttonGradient: string;
  }
> = {
  Todos: {
    icon: LayoutGrid,
    circleBg: "bg-emerald-50 text-emerald-800",
    accentBg: "from-emerald-900 to-emerald-700",
    description: "Todo lo artesanal en un solo lugar",
    buttonGradient: "from-emerald-100 to-emerald-50",
  },
  Miel: {
    icon: Sparkles,
    circleBg: "bg-amber-50 text-amber-700",
    accentBg: "from-amber-900 to-amber-700",
    description: "Dulzura pura directamente de la colmena",
    buttonGradient: "from-amber-100 to-amber-50",
  },
  "Café y chocolates": {
    icon: Coffee,
    circleBg: "bg-amber-100 text-amber-900",
    accentBg: "from-amber-900 to-amber-800",
    description: "Rituales energizantes y chocolatería fina",
    buttonGradient: "from-amber-200 to-amber-100",
  },
  Desayunos: {
    icon: Sunrise,
    circleBg: "bg-slate-50 text-slate-700",
    accentBg: "from-slate-900 to-slate-500",
    description: "Comienzos suaves para cada mañana",
    buttonGradient: "from-slate-100 to-slate-50",
  },
  Parrillas: {
    icon: Flame,
    circleBg: "bg-red-50 text-red-700",
    accentBg: "from-red-900 to-red-700",
    description: "Sabores intensos para asados memorables",
    buttonGradient: "from-red-100 to-red-50",
  },
  Salud: {
    icon: HeartPulse,
    circleBg: "bg-emerald-50 text-emerald-700",
    accentBg: "from-emerald-900 to-emerald-600",
    description: "Cuidados botánicos y bienestar",
    buttonGradient: "from-emerald-100 to-emerald-50",
  },
  Packs: {
    icon: Gift,
    circleBg: "bg-indigo-50 text-indigo-700",
    accentBg: "from-indigo-900 to-indigo-700",
    description: "Regalos listos para compartir",
    buttonGradient: "from-indigo-100 to-indigo-50",
  },
};

const categorySlugMap: Record<Category, string> = {
  Todos: "todos",
  Miel: "miel",
  "Café y chocolates": "cafe-y-chocolates",
  Desayunos: "desayunos",
  Parrillas: "parrillas",
  Salud: "salud",
  Packs: "packs",
};

const slugCategoryMap: Record<string, Category> = Object.entries(categorySlugMap).reduce(
  (acc, [category, slug]) => {
    acc[slug] = category as Category;
    return acc;
  },
  {} as Record<string, Category>
);

export const getCategorySlug = (category: Category) => categorySlugMap[category];
export const getCategoryFromSlug = (slug: string | undefined) => {
  if (!slug) return undefined;
  return slugCategoryMap[slug];
};
