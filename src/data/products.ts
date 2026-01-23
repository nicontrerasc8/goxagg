export type Category = "Todos" | "Miel" | "Café y chocolates" | "Desayunos" | "Parrillas" | "Salud" | "Packs";

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
    name: "Miel de Abeja de Oxapampa",
    description: "100% natural y pura, cosecha artesanal de selva central.",
    variants: [
      { label: "600g", price: "S/ 30" },
      { label: "1.3 kg", price: "S/ 55" },
    ],
    imageSrc: "/miel.png",
    alt: "Miel Oxapampa Goxa",
    category: "Miel",
    badge: "Top",
  },
  {
    id: 2,
    name: "Propóleo",
    description: "Productos FREY. Antibiótico natural para reforzar defensas.",
    variants: [{ label: "20ml", price: "S/ 24" }],
    imageSrc: "/propoleo.png",
    alt: "Propóleo",
    category: "Miel",
  },
  {
    id: 3,
    name: "Polen de Abeja",
    description: "Granulado natural, superalimento rico en proteínas y vitaminas.",
    variants: [{ label: "320g", price: "S/ 25" }],
    imageSrc: "/polen.png",
    alt: "Polen Oxapampa Goxa",
    category: "Miel",

  },
  {
    id: 4,
    name: "Goxa Power (Gel Natural)",
    description: "Mezcla potente de miel, polen, jalea real y propóleo.",
    variants: [
      { label: "250g", price: "S/ 28.90" } 
       ],
    imageSrc: "/gel.png",
    alt: "Goxa Power Gel",
    category: "Miel",
  },
  {
    id: 5,
    name: "Pack Familiar Salud",
    description: "El combo ideal para proteger a toda la familia.",
    variants: [{ label: "Pack", price: "S/ 95" }],
    imageSrc: "/pack-energia.png",
    alt: "Pack Miel y derivados",
    category: "Packs"
  },
  {
    id: 6,
    name: "Café de Oxapampa",
    description: "Café tostado artesanal con notas frutales de la selva central.",
    variants: [
      { label: "Molido 250g", price: "S/ 24" },
      { label: "Grano 250g", price: "S/ 25" },
    ],
    imageSrc: "/cafe.png",
    alt: "Café de Oxapampa",
    category: "Café y chocolates",
    badge: "Top",
  },
  {
    id: 7,
    name: "Chocolates Artesanales",
    description: "Chocolate GOXA 75% cacao, endulzado con panela.",
    variants: [{ label: "6 unidades", price: "S/ 16" }],
    imageSrc: "/chocolates.png",
    alt: "Chocolates artesanales Goxa",
    category: "Café y chocolates",
  },
  {
    id: 8,
    name: "Cerveza Toro",
    description: "Cerveza artesanal de cuerpo medio para compartir en parrilla.",
    variants: [{ label: "480ml", price: "S/ 16.90" }],
    imageSrc: "/cerveza-toro.png",
    alt: "Cerveza Toro artesanal",
    category: "Parrillas",
  },
  {
    id: 9,
    name: "Chorizos Parrilleros",
    description: "Chorizos artesanales con especias locales, listos para la parrilla.",
    variants: [{ label: "400g", price: "S/ 30" }],
    imageSrc: "/chorizos.png",
    alt: "Chorizos parrilleros",
    category: "Parrillas",
    badge: "Top",
  },
  {
    id: 10,
    name: "Carne Brangus",
    description: "Cortes seleccionados, ideales para una parrilla jugosa.",
    variants: [
      { label: "500g", price: "S/ 45" },
      { label: "1kg", price: "S/ 82" },
    ],
    imageSrc: "/branguz.png",
    alt: "Carne Brangus para parrilla",
    category: "Parrillas",
  },
  {
    id: 11,
    name: "Queso Bel Paese",
    description: "Queso suave de mesa, perfecto para desayunos y sándwiches.",
    variants: [{ label: "200g", price: "S/ 20" }],
    imageSrc: "/queso-belpaese.png",
    alt: "Queso Bel Paese",
    category: "Desayunos",
  },
  {
    id: 12,
    name: "Mantequilla Artesanal",
    description: "Mantequilla cremosa, ideal para panes y postres.",
    variants: [
      { label: "240g", price: "S/ 18" },
      { label: "450g", price: "S/ 32" },
    ],
    imageSrc: "/mantequilla.png",
    alt: "Mantequilla artesanal",
    category: "Desayunos",
  },
  {
    id: 13,
    name: "Harina de Tocosh",
    description: "Harina tradicional para bebidas nutritivas y recetas saludables.",
    variants: [{ label: "200g", price: "S/ 16" }],
    imageSrc: "/harina-tocosh.png",
    alt: "Harina de tocosh",
    category: "Salud"
  },
  {
    id: 14,
    name: "Cúrcuma en Polvo",
    description: "Cúrcuma natural con aroma intenso para infusiones y cocina.",
    variants: [{ label: "200g", price: "S/ 12.90" }],
    imageSrc: "/curcuma.png",
    alt: "Cúrcuma en polvo",
    category: "Salud",
  },
  {
    id: 15,
    name: "Penicilina Natural",
    description: "Mezcla tradicional de miel, limón y kión para reforzar defensas.",
    variants: [
      { label: "250ml", price: "S/ 20" },
      { label: "500ml", price: "S/ 36" },
    ],
    imageSrc: "/penicilina.png",
    alt: "Penicilina natural",
    category: "Salud",
  },
  {
    id: 16,
    name: "Pack Familiar GOXA",
    description: "Selección de favoritos para la mesa familiar.",
    variants: [{ label: "Pack", price: "S/ 120" }],
    imageSrc: "/pack-familia.png",
    alt: "Pack familiar GOXA",
    category: "Packs",
    badge: "Pack",
  },
  {
    id: 17,
    name: "Granola Spirulina Premium",
    description: "Mezcla crocante de cereales y frutos, ideal para desayunos.",
    variants: [
      { label: "300g", price: "S/ 18" },
      { label: "500g", price: "S/ 28" },
    ],
    imageSrc: "/granola.png",
    alt: "Granola artesanal",
    category: "Desayunos"
  },
];
