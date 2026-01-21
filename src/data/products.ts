export type Category = "Todos" | "Mieles" | "Derivados" | "Packs";

export type ProductVariant = {
  label: string;
  price: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  variants: ProductVariant[];
  imageSrc: string;
  alt: string;
  category: Category;
  badge?: "Top" | "Nuevo" | "Pack";
};

export const products: Product[] = [
  {
    id: 1,
    name: "Miel de Abeja Oxapampa",
    description: "100% natural y pura, cosecha artesanal de selva central.",
    variants: [
      { label: "600g", price: "S/ 30" },
      { label: "1.3 kg", price: "S/ 55" },
    ],
    imageSrc: "/miel.png",
    alt: "Miel Oxapampa Goxa",
    category: "Mieles",
    badge: "Top",
  },
  {
    id: 2,
    name: "Esencia de Propóleo",
    description: "Productos FREY. Antibiótico natural para reforzar defensas.",
    variants: [{ label: "20ml", price: "S/ 24" }],
    imageSrc: "/propoleo.png",
    alt: "Esencia de Propóleo Frey",
    category: "Derivados",
  },
  {
    id: 3,
    name: "Polen de Abeja",
    description: "Granulado natural, superalimento rico en proteínas y vitaminas.",
    variants: [{ label: "320g", price: "S/ 25" }],
    imageSrc: "/polen.png",
    alt: "Polen Oxapampa Goxa",
    category: "Derivados",
    badge: "Nuevo",
  },
  {
    id: 4,
    name: "Goxa Power (Gel Natural)",
    description: "Mezcla potente de miel, polen, jalea real y propóleo.",
    variants: [
      { label: "250g", price: "S/ 25" },
      { label: "400g", price: "S/ 40" },
    ],
    imageSrc: "/gel.png",
    alt: "Goxa Power Gel",
    category: "Derivados",
  },
  {
    id: 5,
    name: "Pack Familiar Salud",
    description: "El combo ideal para proteger a toda la familia.",
    variants: [{ label: "Pack", price: "S/ 95" }],
    imageSrc: "/pack-energia.png",
    alt: "Pack Miel y derivados",
    category: "Packs",
    badge: "Pack",
  },
];
