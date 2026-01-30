export type Category = "Todos" | "Miel" | "Café y chocolates" | "Desayunos" | "Parrillas" | "Salud" | "Packs";

export type ProductVariant = {
  label: string;
  price: string;
};

export type PopupSection = {
  heading: string;
  points: string[];
};

export type ProductPopup = {
  title: string;
  description: string;
  sections: PopupSection[];
  notes?: string[];
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
  popup?: ProductPopup;
};

export const products: Product[] = [
  // MIEL
  {
    id: 1,
    name: "Miel de Abeja de Oxapampa",
    description: "100% natural y pura, cosecha artesanal de selva central. Mejora el sistema inmunológico y es fuente de energía natural.",
    variants: [
      { label: "600g", price: "S/ 30" },
      { label: "1.3 kg", price: "S/ 55" },
    ],
    imageSrc: "/miel.png",
    alt: "Miel Oxapampa Goxa",
    category: "Miel",
    badge: "Top",
    popup: {
      title: "Miel de Abeja de Oxapampa",
      description: "Directo de Oxapampa, miel de abejas 100% natural que conserva su sabor autentico y es el endulzante natural mas sano.",
      sections: [
        {
          heading: "Beneficios naturales",
          points: [
            "Fuente de energia natural para iniciar el dia o recuperar fuerzas despues del esfuerzo.",
            "Minerales como potasio, calcio y zinc en pequeñas cantidades para complementar la dieta.",
            "Propiedades antibacterianas, antimicrobianas, antiinflamatorias y antioxidantes.",
            "Favorece la digestion, alivia la tos, ayuda a la cicatrizacion y refuerza el sistema inmune y la salud intestinal.",
          ],
        },
        {
          heading: "Uso sugerido",
          points: [
            "Endulza infusiones, jugos o avenas en lugar de azucar refinado.",
            "Una cucharada en ayunas o antes de actividades fisicas intensas para aprovechar su energia.",
          ],
        },
      ],
    },
  },
  {
    id: 2,
    name: "Polen de Abeja",
    description: "Granulado natural, superalimento rico en proteínas, vitaminas, antioxidantes y minerales como el fósforo (cerebro).",
    variants: [{ label: "320g", price: "S/ 25" }],
    imageSrc: "/polen.png",
    alt: "Polen Oxapampa Goxa",
    category: "Miel",
    badge: "Top",
    popup: {
      title: "Polen de Abeja",
      description: "El polen es un superalimento natural de la selva con antioxidantes, vitaminas y minerales que aumentan las defensas.",
      sections: [
        {
          heading: "Beneficios clave",
          points: [
            "Fortalece el sistema inmune y ayuda a combatir infecciones.",
            "Fuente potente de energia natural que mejora el rendimiento muscular.",
            "Regula el apetito y favorece una digestion saludable.",
          ],
        },
        {
          heading: "Nutricion concentrada",
          points: [
            "Vitaminas del complejo B ademas de C, D y E.",
            "Minerales como fosforo, zinc, hierro, magnesio, potasio y calcio.",
            "Mejora la circulacion sanguinea y respalda la funcion cardiaca y los tratamientos cardiovasculares.",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    name: "Goxa Power (Gel Natural)",
    description: "Mezcla potente de miel, polen, jalea real y propóleo. Aumenta la testosterona y la energía vital.",
    variants: [{ label: "250g", price: "S/ 28.90" }],
    imageSrc: "/gel.png",
    alt: "Goxa Power Gel",
    category: "Miel",
    badge: "Top",
    popup: {
      title: "Goxa Power (Gel Natural)",
      description: "Combina miel, polen, jalea real y propoleo para entregar energia y defensas 100% natural.",
      sections: [
        {
          heading: "Combinacion energetica",
          points: [
            "Vitaminas B, C, D, E y A junto a Zinc, Magnesio y Manganeso.",
            "Aporta proteinas y minerales que complementan la alimentacion y la recuperacion muscular.",
            "Incrementa testosterona y energia vital para jornadas intensas.",
          ],
        },
        {
          heading: "Defensa respiratoria",
          points: [
            "Aliado para combatir bronquitis, asma, tos y resfrios con una combinacion antibacteriana.",
            "Refuerza las defensas para prevenir enfermedades respiratorias.",
          ],
        },
        {
          heading: "Modo de uso",
          points: [
            "Una cucharada en ayunas o antes de actividad fisica para activar el organismo.",
            "Mezclar con agua tibia, jugos o yogur si se prefiere una textura mas suave.",
          ],
        },
      ],
    },
  },
  {
    id: 4,
    name: "Propóleo",
    description: "Antibiótico natural para reforzar defensas.",
    variants: [{ label: "20ml", price: "S/ 24" }],
    imageSrc: "/propoleo.png",
    alt: "Propóleo",
    category: "Miel",
    badge: "Top",
    popup: {
      title: "Propoleo",
      description: "Antibiotico natural de la colmena que refuerza defensas y combate afecciones respiratorias comunes.",
      sections: [
        {
          heading: "Propiedades esenciales",
          points: [
            "Refuerza el sistema inmunologico con accion antibacteriana, antimicotica, antiinflamatoria y cicatrizante.",
            "Cura heridas, quemaduras y acne gracias a su capacidad regenerativa.",
            "Alivia gastritis, ulceras y diarrea cuando se usa con paciencia.",
          ],
        },
        {
          heading: "Uso recomendado",
          points: [
            "Tomar dos veces al dia despues de las comidas: adultos 12-15 gotas y ninos 8-10 gotas en medio vaso de agua tibia o infusion.",
            "Durante resfrios o influenza, mezclar con miel, gel y polen para potenciar la respuesta.",
          ],
        },
      ],
      notes: [
        "Tratamiento recomendado para prevenir resfrios, influenza, bronquitis y tos.",
        "En ayunas, diluir una cucharadita de miel, gel y polen en media taza de agua tibia y luego agregar 12 gotas de propoleo.",
      ],
    },
  },

  // CAFÉ Y CHOCOLATES
  {
    id: 5,
    name: "Café Señor Ox",
    description: "Café orgánico premium cultivado a 2000 m.s.n.m. con certificado BIOAY y nutrido con agua mineral de manantial de los Andes.",
    variants: [
      { label: "Molido 250g", price: "S/ 25" }
    ],
    imageSrc: "/cafe.png",
    alt: "Café de Oxapampa",
    category: "Café y chocolates",
    badge: "Top",
    popup: {
      title: "Café Señor Ox",
      description: "Descubre la esencia pura de Oxapampa en cada taza con café premium orgánico cultivado a 2000 m.s.n.m.",
      sections: [
        {
          heading: "Origen y certificacion",
          points: [
            "Cultivado en Oxapampa y nutrido con agua mineral de manantial de los Andes.",
            "Certificado BIOAY que respalda un producto sostenible y natural.",
          ],
        },
        {
          heading: "Perfil sensorial",
          points: [
            "Aroma intenso y sabor equilibrado que despierta los sentidos desde la primera infusion.",
            "Ideal para preparar en prensa francesa, filtro o espresso moderado.",
          ],
        },
      ],
    },
  },
  {
    id: 6,
    name: "Chocolates Artesanales 75% Cacao",
    description: "Chocolate GOXA 75% cacao, endulzado con panela, sin aditivos ni conservantes.",
    variants: [{ label: "6 unidades", price: "S/ 16" }],
    imageSrc: "/chocolates.png",
    alt: "Chocolates artesanales Goxa",
    category: "Café y chocolates",
    popup: {
      title: "Chocolates Artesanales 75% Cacao",
      description: "Chocolate 75% cacao elaborado en Oxapampa con panela y manteca de cacao sin conservantes.",
      sections: [
        {
          heading: "Origen y elaboracion",
          points: [
            "Cacao de alta pureza combinado con panela natural y manteca de cacao.",
            "Hecho en Oxapampa sin aditivos ni conservantes artificiales.",
          ],
        },
        {
          heading: "Sabor y uso",
          points: [
            "Textura firme y aterciopelada para disfrutar en tabla de chocolates o regalar.",
            "Perfecto con cafes de altura, frutas secas o como snack energetico.",
          ],
        },
      ],
    },
  },
{
    id: 7,
    name: "Yogurt Probiótico",
    description: "Yogurt con cultivos vivos que fortalecen digestión y sistema inmunológico.",
    variants: [{ label: "1L", price: "S/ 12" }],
    imageSrc: "/yogurt-mosel.png",
    alt: "Yogurt probiótico",
    category: "Desayunos",
    popup: {
      title: "Yogurt Probiotico",
      description: "Elaborado en Oxapampa con leche fresca de la region, sin conservantes ni colorantes artificiales.",
      sections: [
        {
          heading: "Beneficios funcionales",
          points: [
            "Cultivos vivos y probioticos que fortalecen la digestion, flora intestinal y defensas.",
            "Combate y previene enfermedades intestinales como colon irritable, Crohn y inflamacion.",
            "Apoya en procesos como cancer, candidiasis, hemorroides e infecciones urinarias gracias a su equilibrio intestinal.",
          ],
        },
        {
          heading: "Sabores y consumo",
          points: [
            "Sabores: fresa, frambuesa, mora, lucuma y durazno.",
            "Disfrutar con miel, frutas frescas o granola para un desayuno completo y reparador.",
          ],
        },
      ],
    },
  }, 
  {
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
    popup: {
      title: "Yogurt Griego",
      description: "Yogurt natural y cremoso con 0% grasas, 0% azucar añadida y alto contenido de proteina.",
      sections: [
        {
          heading: "Composicion y beneficios",
          points: [
            "Cepas probioticas que mejoran la digestion y protegen la flora intestinal.",
            "Alto en proteina y calcio para fortalecer huesos, musculos y salud cerebral.",
            "0% grasas y azucar añadida para un complemento ligero y lleno de energia.",
          ],
        },
        {
          heading: "Consumo sugerido",
          points: [
            "Disfrutar con miel, frutas o granola para un desayuno o postre nutritivo.",
            "Ideal como complemento alimenticio que potencia el rendimiento deportivo y la salud cardiovascular.",
          ],
        },
      ],
    },
  },
  // DESAYUNOS
  
  {
    id: 9,
    name: "Queso Brie",
    description: "Queso estilo francés premiado internacionalmente, pasta blanda.",
    variants: [{ label: "250g", price: "S/ 30" }],
    imageSrc: "/queso-brie.png",
    alt: "Queso Brie",
    category: "Desayunos",
    popup: {
      title: "Queso Brie",
      description: "Queso estilo francés oxapampino, premiado, de pasta blanda y corteza blanca comestible.",
      sections: [
        {
          heading: "Sabor y textura",
          points: [
            "Textura cremosa y suave especialmente al estar maduro.",
            "Sabor delicado, ligeramente dulce con notas a mantequilla, nuez y champiñón.",
          ],
        },
        {
          heading: "Maridaje",
          points: [
            "Perfecto para tablas de quesos con pan, frutas o vino blanco.",
            "Se funde fácilmente al calentar para platos gourmet o tostas rústicas.",
          ],
        },
      ],
    },
  },
  {
    id: 10,
    name: "Queso Camembert",
    description: "Queso francés con sabor intenso y textura cremosa.",
    variants: [{ label: "250g", price: "S/ 30" }],
    imageSrc: "/queso-brie.png",
    alt: "Queso Camembert",
    category: "Desayunos",
    popup: {
      title: "Queso Camembert",
      description: "Queso estilo francés con sabor intenso, corteza blanca y centro cremoso de Oxapampa.",
      sections: [
        {
          heading: "Perfil organoléptico",
          points: [
            "Corteza blanca aterciopelada y un interior denso que se vuelve casi líquido al madurar.",
            "Sabor fuerte y terroso con notas marcadas a champiñón.",
          ],
        },
        {
          heading: "Uso versátil",
          points: [
            "Excelente para hornear, tablas, piqueos o sándwiches calientes.",
            "Combina con panes rústicos, frutas frescas y vinos blancos suaves.",
          ],
        },
      ],
    },
  },
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
    popup: {
      title: "Mantequilla Artesanal",
      description: "Elaborada con crema de leche pasteurizada 100% vaca, fermentos lácticos propios y sal justa.",
      sections: [
        {
          heading: "Elaboración tradicional",
          points: [
            "Crema de leche pasteurizada con fermentos lácticos y sin conservantes.",
            "Textura sabrosa y balanceada gracias al toque exacto de sal.",
          ],
        },
        {
          heading: "Beneficios nutricionales",
          points: [
            "Ácidos grasos que protegen contra infecciones intestinales.",
            "Fuente de vitaminas A, D, E, B12 y K2 que ayudan a prevenir calcificación arterial e hipotiroidismo.",
          ],
        },
      ],
    },
  },
  {
    id: 12,
    name: "Queso Bel Paese",
    description: "Queso italiano artesanal de pasta blanda, sin conservantes. Perfecto para sándwiches y comidas.",
    variants: [{ label: "200g", price: "S/ 20" }],
    imageSrc: "/queso-belpaese.png",
    alt: "Queso Bel Paese",
    category: "Desayunos",
    popup: {
      title: "Queso Bel Paese",
      description: "Queso artesanal estilo italiano, de pasta blanda y sin conservantes para paladares suaves.",
      sections: [
        {
          heading: "Caracter",
          points: [
            "Textura cremosa y ligeramente elastica con sabor lacteo y notas a mantequilla.",
            "Equilibrado, no resulta fuerte ni picante, ideal para quienes prefieren sabores suaves.",
          ],
        },
        {
          heading: "Usos recomendados",
          points: [
            "Se funde muy bien en pizzas, salsas, risottos y sandwiches calientes.",
            "Tambien se disfruta solo con pan, frutas frescas o vinos blancos suaves.",
          ],
        },
      ],
    },
  },
   {
    id: 29,
    name: "Granola Gourmet",
    description: "Mezcla crocante de cereales y frutos rojos, endulzado con panela. Libre de preservantes y colorantes. Ideal para desayunos y snacks.",
    variants: [
      { label: "350g", price: "S/ 18" }
    ],
    imageSrc: "/granola2.png",
    alt: "Granola artesanal",
    category: "Desayunos",
    popup: {
      title: "Granola Gourmet",
      description: "Mezcla crocante de cereales y frutos rojos endulzada con panela, sin preservantes ni colorantes.",
      sections: [
        {
          heading: "Sabor y textura",
          points: [
            "Crocante y ligeramente dulce gracias a la panela.",
            "Frutos rojos que aportan acidez natural y color.",
          ],
        },
        {
          heading: "Momento ideal",
          points: [
            "Perfecta con yogur, leche vegetal o fruta en desayunos y snacks.",
            "Aporta fibra, energia y se mantiene crujiente en bowls energeticos.",
          ],
        },
      ],
    },
  },
  {
    id: 13,
    name: "Granola Spirulina Premium",
    description: "Deliciosa granola con ojuelas de avena, spirulina (aumenta la energía), pasas y granos, endulzada con panela. Libre de preservantes y colorantes. Ideal para desayunos.",
    variants: [
      { label: "350g", price: "S/ 25" }
    ],
    imageSrc: "/granola1.png",
    alt: "Granola artesanal",
    category: "Desayunos",
    popup: {
      title: "Granola Spirulina Premium",
      description: "Granola con avena, spirulina, pasas y granos endulzada con panela, sin preservantes ni colorantes.",
      sections: [
        {
          heading: "Beneficios",
          points: [
            "Spirulina que aumenta la energia y la resistencia al fatigar.",
            "Ingredientes integrales que aportan fibra y minerales esenciales.",
          ],
        },
        {
          heading: "Consumo sugerido",
          points: [
            "Ideal para desayunos, bowls de yogur o snacks energizantes.",
            "Mantiene su textura natural sin necesidad de hornear nuevamente.",
          ],
        },
      ],
    },
  },

  // PARRILLAS
  {
    id: 14,
    name: "Hamburguesas Premium Branguz",
    description: "Elaborada 100% con carne de res de pastura, sin conservantes ni quimicos. ",
    variants: [
      { label: "600g", price: "S/ 38" },
      { label: "680g", price: "S/ 45" },
    ],
    imageSrc: "/branguz.png",
    alt: "Hamburguesas premium",
    category: "Parrillas",
    badge: "Top",
    popup: {
      title: "Hamburguesas Premium Branguz",
      description: "Carne 100% de res de pastura raza Brahman y Angus criada libre en Oxapampa.",
      sections: [
        {
          heading: "Origen y sabor",
          points: [
            "Reses criadas en pasturas verdes de Oxapampa para un sabor intenso y natural.",
            "Sin conservantes ni químicos, con marmoleo equilibrado.",
          ],
        },
        {
          heading: "Recomendacion al cocinar",
          points: [
            "Cocinar a fuego medio para resaltar su sabor ahumado y jugoso.",
            "Sirve como complemento para comidas, parrillas o loncheras.",
          ],
        },
      ],
    },
  },
  {
    id: 15,
    name: "Chorizo Oxapampino",
    description: "Chorizos artesanales con carne de cerdo ahumados con especias tradicionales y libre de octógonos.",
    variants: [{ label: "400g", price: "S/ 30" }],
    imageSrc: "/chorizos.png",
    alt: "Chorizo oxapampino",
    category: "Parrillas",
    popup: {
      title: "Chorizo Oxapampino",
      description: "Chorizo artesanal ahumado con mezcla de cerdo y especias tradicionales, sin conservantes ni octógonos.",
      sections: [
        {
          heading: "Sabor tradicional",
          points: [
            "Ahumado con especias tradicionales que resaltan su jugosidad.",
            "Formato artesanal listo para parrilla o olla a presión.",
          ],
        },
        {
          heading: "Preparacion sugerida",
          points: [
            "Cocinar a fuego medio en parrilla, olla a presión o sartén.",
            "Acompaña menestras, arroces o sándwiches rústicos.",
          ],
        },
      ],
    },
  },
  {
    id: 16,
    name: "Costillas Ahumadas",
    description: "Deliciosas costillas de cerdo sazonadas y ahumadas artesanalmente.",
    variants: [
      { label: "250g", price: "S/ 25" },
      { label: "500g", price: "S/ 38" },
    ],
    imageSrc: "/costillas.png",
    alt: "Costillas ahumadas",
    category: "Parrillas",
    popup: {
      title: "Costillas Ahumadas",
      description: "Costillas de cerdo seleccionadas, sazonadas y ahumadas artesanalmente con especias especiales.",
      sections: [
        {
          heading: "Preparacion",
          points: [
            "Calentar en parrilla, horno o sartén para extraer su sabor ahumado.",
            "Sazonadas con especias que realzan la carne sin opacarla.",
          ],
        },
        {
          heading: "Acompañamiento",
          points: [
            "Perfectas en reuniones, ensaladas y menestras con un toque ahumado.",
            "También quedan muy bien con arroces o vegetales grillados.",
          ],
        },
      ],
    },
  },
  {
    id: 17,
    name: "Cecina Ahumada",
    description: "Cortes selectos de cerdo con ahumado artesanal a leña.",
    variants: [{ label: "500g", price: "S/ 34" }],
    imageSrc: "/cecina.png",
    alt: "Cecina ahumada",
    category: "Parrillas",
    popup: {
      title: "Cecina Ahumada",
      description: "Cortes selectos de cerdo ahumados lentamente sobre leña para lograr sabor potente y equilibrado.",
      sections: [
        {
          heading: "Caracteristicas",
          points: [
            "Proceso artesanal de ahumado lento que aporta notas a madera y carne curada.",
            "Equilibrio entre salado y ahumado, textura tierna y jugosa con aroma único.",
          ],
        },
        {
          heading: "Usos ideales",
          points: [
            "Perfecta en parrillas, menestras, arroces o tablas de antipasto.",
            "Combina con ensaladas, vegetales grillados o panes rústicos.",
          ],
        },
      ],
    },
  },
  {
    id: 18,
    name: "Cerveza Toro Bravo",
    description: "Doble Red IPA artesanal con 10% de alcohol, cuerpo intenso.",
    variants: [{ label: "480ml", price: "S/ 16.90" }],
    imageSrc: "/cerveza-toro.png",
    alt: "Cerveza Toro artesanal",
    category: "Parrillas",
    popup: {
      title: "Cerveza Toro Bravo",
      description: "Doble Red IPA de 10% alcohol con color rojizo intenso y lupulos marcados.",
      sections: [
        {
          heading: "Perfil sensorial",
          points: [
            "Notas a caramelo, maltas tostadas y lupulos intensos.",
            "Cuerpo complejo con amargor firme y final aromatico.",
          ],
        },
        {
          heading: "Momento ideal",
          points: [
            "Ideal para quienes buscan cervezas potentes y con personalidad unica.",
            "Combina con carnes ahumadas, postres de chocolate o tablas especiadas.",
          ],
        },
      ],
    },
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
    popup: {
      title: "Cúrcuma con Pimienta",
      description: "Mezcla funcional para activar el sistema inmunológico y combatir inflamaciones.",
      sections: [
        {
          heading: "Beneficios",
          points: [
            "Antiinflamatorio y antioxidante que alivia dolores articulares y mejora digestión y salud hepática.",
            "Protege corazón y cerebro y tiene propiedades anticancerígenas y antidepresivas.",
            "Propiedades antimicrobianas y antisépticas ideales como complemento diario.",
          ],
        },
        {
          heading: "Consumo recomendado",
          points: [
            "Una cucharada en jugos o leches vegetales para potenciar el desayuno.",
            "Se combina con pimienta para mejorar la absorción de curcumina.",
          ],
        },
      ],
    },
  },
  {
    id: 20,
    name: "Sacha Jergón",
    description: "Tubérculo anticanceroso y antiinflamatorio, de la selva peruana. Fortalece el sistema inmunológico.",
    variants: [{ label: "100g", price: "S/ 15" }],
    imageSrc: "/sacha-jergon.png",
    alt: "Sacha Jergón",
    category: "Salud",
    popup: {
      title: "Sacha Jergón",
      description: "Tubérculo de la selva peruana con propiedades anticancerígenas, antitumorales y antiinflamatorias.",
      sections: [
        {
          heading: "Beneficios",
          points: [
            "Fortalece el sistema inmunológico y ayuda a combatir problemas respiratorios como tos, bronquitis y asma.",
            "Rico en vitamina C, calcio, hierro, fibra y potasio para apoyar la salud general.",
            "Ayuda a prevenir úlceras gastrointestinales y actúa como cicatrizante tópico en infecciones virales.",
          ],
        },
        {
          heading: "Modo de uso",
          points: [
            "Una cucharada diluida en agua tibia o infusiones para tomar en ayunas o antes de comidas.",
            "Complementa alimentos y jugos para reforzar defensas en temporada de resfriados.",
          ],
        },
      ],
    },
  },
  {
    id: 21,
    name: "Tocosh (Penicilina Natural)",
    description: "Papa fermentada, antibiótico natural que combate gastritis y úlceras.",
    variants: [{ label: "200g", price: "S/ 16" }],
    imageSrc: "/penicilina.png",
    alt: "Harina de tocosh",
    category: "Salud",
    popup: {
      title: "Tocosh",
      description: "Papa fermentada considerada penicilina natural con múltiples beneficios antimicrobianos y digestivos.",
      sections: [
        {
          heading: "Beneficios",
          points: [
            "Acción antibiótica natural que combate gastritis, úlceras y resfriados.",
            "Regenera la flora intestinal y fortalece el sistema inmunológico.",
            "Alivia afecciones respiratorias y renales, además de ser antioxidante y antiinflamatorio.",
          ],
        },
        {
          heading: "Modo de consumo",
          points: [
            "Una cucharada antes de las comidas diluida en agua para aprovechar sus propiedades.",
            "Se puede combinar con jugos o infusiones tibias para suavizar su sabor.",
          ],
        },
      ],
    },
  },
  {
    id: 25,
    name: "Jabón Artesanal Oxapampa",
    description: "Jabones producidos con ingredientes botánicos y aceites escenciales totalmente naturales. ",
    variants: [
      { label: "100g", price: "S/ 16" },
  
    ],
    imageSrc: "/jabon.png",
    alt: "Jabón natural Oxapampa",
    category: "Salud",
    popup: {
      title: "Jabón Artesanal Oxapampa",
      description: "Jabones con ingredientes botánicos y aceites esenciales totalmente naturales.",
      sections: [
        {
          heading: "Cuidado de la piel",
          points: [
            "Formulado con botánicos y aceites esenciales que limpian sin resecar.",
            "Ideal para pieles sensibles gracias a su base natural y sin conservantes.",
          ],
        },
        {
          heading: "Ritual",
          points: [
            "Usar en baño diario massageando suavemente para activar aromas frescos.",
            "Complementa rituales de autocuidado y relajación en casa.",
          ],
        },
      ],
    },
  },
  {
    id: 26,
    name: "Fideos de Quinoa y Arroz",
    description: "Fideos integrales libres de gluten elaborados con quinoa, arroz y kiwicha libres de gluten para pastas ligeras.",
    variants: [
      { label: "200g", price: "S/ 14" },
    ],
    imageSrc: "/fideos.png",
    alt: "Fideos de quinoa y arroz",
    category: "Salud",
    popup: {
      title: "Fideos de Quinoa y Arroz",
      description: "Fideos integrales libres de gluten elaborados con quinoa, arroz y kiwicha para platos ligeros.",
      sections: [
        {
          heading: "Nutrición",
          points: [
            "Quinoa y kiwicha aportan aminoácidos, fibra y minerales sin gluten.",
            "Leves y digestivos para acompañar salsas, salteados o caldos.",
          ],
        },
        {
          heading: "Recomendación culinaria",
          points: [
            "Cocinar en agua hirviendo hasta que queden al dente y mezclar con vegetales frescos.",
            "Ideales para platos vegetarianos o como base de bowls nutritivos.",
          ],
        },
      ],
    },
  },
  // {
  //   id: 22,
  //   name: "Penicilina Natural",
  //   description: "Mezcla tradicional de miel, limón y kión para reforzar defensas.",
  //   variants: [
  //     { label: "250ml", price: "S/ 20" },
  //     { label: "500ml", price: "S/ 36" },
  //   ],
  //   imageSrc: "/penicilina.png",
  //   alt: "Penicilina natural",
  //   category: "Salud",
  // },

  // PACKS
  {
    id: 23,
    name: "Pack Familiar Salud",
    description: "El combo ideal para proteger a toda la familia con productos naturales y preventivo a resfríos, gripes, influenza, etc.",
    variants: [{ label: "Pack", price: "S/ 107.9" }],
    imageSrc: "/pack-energia.png",
    alt: "Pack Miel y derivados",
    category: "Packs",
        badge: "Pack",
    popup: {
      title: "Pack Familiar Salud",
      description: "Combo ideal para proteger a toda la familia con productos naturales contra resfríos, gripes e influenza.",
      sections: [
        {
          heading: "Contenido",
          points: [
            "Incluye miel, propóleo y otros aliados naturales para fortalecer defensas.",
            "Pensado para mantener energía durante temporadas frías sin medicamentos.",
          ],
        },
        {
          heading: "Uso recomendado",
          points: [
            "Compartir en desayunos y tomar diariamente en dosis pequeñas.",
            "Perfecto para familias que buscan prevención segura y natural.",
          ],
        },
      ],
    },
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
    popup: {
      title: "Pack Familiar GOXA",
      description: "Selección de favoritos GOXA para la mesa familiar: quesos, café y más productos premium.",
      sections: [
        {
          heading: "Incluye",
          points: [
            "Variedad de quesos, café y complementos que reflejan la mesa oxapampina.",
            "Ideal para compartir en reuniones, celebraciones o como regalo especial.",
          ],
        },
        {
          heading: "Recomendación",
          points: [
            "Degustarlo con pan artesanal, frutas y vinos ligeros.",
            "Perfecto para quien quiere llevar a casa lo mejor de la región.",
          ],
        },
      ],
    },
  },
];
