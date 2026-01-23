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
  // MIEL
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
    name: "Polen de Abeja",
    description: "Granulado natural, superalimento rico en proteínas y vitaminas.",
    variants: [{ label: "320g", price: "S/ 25" }],
    imageSrc: "/polen.png",
    alt: "Polen Oxapampa Goxa",
    category: "Miel",
  },
  {
    id: 3,
    name: "Goxa Power (Gel Natural)",
    description: "Mezcla potente de miel, polen, jalea real y propóleo.",
    variants: [{ label: "250g", price: "S/ 28.90" }],
    imageSrc: "/gel.png",
    alt: "Goxa Power Gel",
    category: "Miel",
  },
  {
    id: 4,
    name: "Propóleo",
    description: "Antibiótico natural para reforzar defensas.",
    variants: [{ label: "20ml", price: "S/ 24" }],
    imageSrc: "/propoleo.png",
    alt: "Propóleo",
    category: "Miel",
  },

  // CAFÉ Y CHOCOLATES
  {
    id: 5,
    name: "Café Señor Ox",
    description: "Café orgánico premium cultivado a 2000 m.s.n.m. con certificado BIOAY.",
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
    id: 6,
    name: "Chocolates Artesanales 75% Cacao",
    description: "Chocolate GOXA 75% cacao, endulzado con panela, sin conservantes.",
    variants: [{ label: "6 unidades", price: "S/ 16" }],
    imageSrc: "/chocolates.png",
    alt: "Chocolates artesanales Goxa",
    category: "Café y chocolates",
  },

  // DESAYUNOS
/*   {
    id: 7,
    name: "Yogurt Probiótico",
    description: "Yogurt con cultivos vivos que fortalecen digestión y defensas.",
    variants: [{ label: "1L", price: "S/ 12" }],
    imageSrc: "/yogurt-probiotico.png",
    alt: "Yogurt probiótico",
    category: "Desayunos",
  }, */
  /* {
    id: 8,
    name: "Yogurt Griego",
    description: "0% grasas, 0% azúcar añadida, alto en proteína.",
    variants: [
      { label: "500g", price: "S/ 14" },
      { label: "1L", price: "S/ 22" },
    ],
    imageSrc: "/yogurt-griego.png",
    alt: "Yogurt griego",
    category: "Desayunos",
  },
  {
    id: 9,
    name: "Queso Brie",
    description: "Queso estilo francés premiado internacionalmente, pasta blanda.",
    variants: [{ label: "250g", price: "S/ 30" }],
    imageSrc: "/queso-brie.png",
    alt: "Queso Brie",
    category: "Desayunos"
  }, */
/*   {
    id: 10,
    name: "Queso Camembert",
    description: "Queso francés con sabor intenso y textura cremosa.",
    variants: [{ label: "250g", price: "S/ 30" }],
    imageSrc: "/queso-camembert.png",
    alt: "Queso Camembert",
    category: "Desayunos",
  }, */
  {
    id: 11,
    name: "Mantequilla Artesanal",
    description: "Mantequilla 100% de vaca con fermentos lácticos, sin conservantes.",
    variants: [
      { label: "240g", price: "S/ 18" },
      { label: "450g", price: "S/ 32" },
    ],
    imageSrc: "/mantequilla.png",
    alt: "Mantequilla artesanal",
    category: "Desayunos",
  },
  {
    id: 12,
    name: "Queso Bel Paese",
    description: "Queso italiano artesanal de pasta blanda, perfecto para sándwiches.",
    variants: [{ label: "200g", price: "S/ 20" }],
    imageSrc: "/queso-belpaese.png",
    alt: "Queso Bel Paese",
    category: "Desayunos",
  },
  {
    id: 13,
    name: "Granola Spirulina Premium",
    description: "Mezcla crocante de cereales y frutos, ideal para desayunos.",
    variants: [
      { label: "300g", price: "S/ 18" },
      { label: "500g", price: "S/ 28" },
    ],
    imageSrc: "/granola.png",
    alt: "Granola artesanal",
    category: "Desayunos",
  },

  // PARRILLAS
  {
    id: 14,
    name: "Hamburguesas Premium",
    description: "Carne de res Brahman y Angus de pasturas libres de Oxapampa.",
    variants: [
      { label: "600g", price: "S/ 38" },
      { label: "680g", price: "S/ 45" },
    ],
    imageSrc: "/branguz.png",
    alt: "Hamburguesas premium",
    category: "Parrillas",
    badge: "Top",
  },
  {
    id: 15,
    name: "Chorizo Oxapampino",
    description: "Chorizos artesanales ahumados con especias tradicionales.",
    variants: [{ label: "400g", price: "S/ 30" }],
    imageSrc: "/chorizos.png",
    alt: "Chorizo oxapampino",
    category: "Parrillas",
  },
/*   {
    id: 16,
    name: "Costillas Ahumadas",
    description: "Costillas de cerdo sazonadas y ahumadas artesanalmente.",
    variants: [
      { label: "250g", price: "S/ 25" },
      { label: "500g", price: "S/ 38" },
    ],
    imageSrc: "/costillas.png",
    alt: "Costillas ahumadas",
    category: "Parrillas",
  }, */
/*   {
    id: 17,
    name: "Cecina Ahumada",
    description: "Cortes selectos de cerdo con ahumado artesanal a leña.",
    variants: [{ label: "500g", price: "S/ 34" }],
    imageSrc: "/cecina.png",
    alt: "Cecina ahumada",
    category: "Parrillas",
  }, */
  {
    id: 18,
    name: "Cerveza Toro Bravo",
    description: "Doble Red IPA artesanal con 10% de alcohol, cuerpo intenso.",
    variants: [{ label: "480ml", price: "S/ 16.90" }],
    imageSrc: "/cerveza-toro.png",
    alt: "Cerveza Toro artesanal",
    category: "Parrillas",

  },

  // SALUD
  {
    id: 19,
    name: "Cúrcuma con Pimienta",
    description: "Potente antiinflamatorio y antioxidante natural para tu salud.",
    variants: [{ label: "200g", price: "S/ 12.90" }],
    imageSrc: "/curcuma.png",
    alt: "Cúrcuma en polvo",
    category: "Salud",
  },
/*   {
    id: 20,
    name: "Sacha Jergón",
    description: "Tubérculo anticanceroso y antiinflamatorio de la selva peruana.",
    variants: [{ label: "100g", price: "S/ 15" }],
    imageSrc: "/sacha-jergon.png",
    alt: "Sacha Jergón",
    category: "Salud",
  }, */
  {
    id: 21,
    name: "Tocosh (Penicilina Natural)",
    description: "Papa fermentada, antibiótico natural que combate gastritis y úlceras.",
    variants: [{ label: "200g", price: "S/ 16" }],
    imageSrc: "/harina-tocosh.png",
    alt: "Harina de tocosh",
    category: "Salud",
  
  },
  {
    id: 22,
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

  // PACKS
  {
    id: 23,
    name: "Pack Familiar Salud",
    description: "El combo ideal para proteger a toda la familia con productos naturales.",
    variants: [{ label: "Pack", price: "S/ 107.9" }],
    imageSrc: "/pack-energia.png",
    alt: "Pack Miel y derivados",
    category: "Packs",
  },
  {
    id: 24,
    name: "Pack Familiar GOXA",
    description: "Selección de favoritos para la mesa familiar: quesos, café y más.",
    variants: [{ label: "Pack", price: "S/ 143.9" }],
    imageSrc: "/pack-familia.png",
    alt: "Pack familiar GOXA",
    category: "Packs",
    badge: "Pack",
  },
];