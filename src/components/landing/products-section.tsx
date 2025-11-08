"use client";

// Importamos React y los iconos
import React from 'react';
import { 
  Droplet, 
  Leaf, 
  Flower, 
  UtensilsCrossed, 
  MessageCircle 
} from "lucide-react"; 
// NOTA: He quitado la importación de 'next/image' y 'Card' de shadcn 
// para hacer un componente 100% autocontenido con <img> y <div>.
// También quité 'WhatsAppButton' y lo reemplacé con un <button> estilizado.


// --- 1. Definición de Tipos para TypeScript (TSX) ---
interface Product {
  id: number;
  name: string;
  description: string;
  imageSrc: string; // URL de la imagen
  alt: string;      // Texto alternativo para accesibilidad
  price: string;
}

// Interfaz para nuestra nueva sección de "por qué elegirnos"
interface ValueProp {
  id: number;
  icon: React.ElementType; // Usamos React.ElementType para pasar el componente del icono
  title: string;
  description: string;
}

// --- 2. Datos Constantes ---

// Arreglo de productos (sin cambios)
const featuredProducts: ReadonlyArray<Product> = [
  {
    id: 1,
    name: "Miel Pura de Oxapampa",
    description: "100% natural, sin aditivos ni pasteurización. Cosecha fresca.",
    imageSrc: "/miel.JPG",
    alt: "Frasco de miel pura de Oxapampa",
    price: "S/ 25", // Limpiado para que el tag de precio sea consistente
  },
  {
    id: 2,
    name: "Propóleo Concentrado",
    description: "Antibiótico natural. Ideal para reforzar las vías respiratorias y defensas.",
    imageSrc: "/propoleo.JPG",
    alt: "Extracto líquido de propóleo concentrado",
    price: "S/ 30",
  },
  {
    id: 3,
    name: "Polen de Flores",
    description: "Fuente de energía y vitaminas. Recolectado de la flora silvestre.",
    imageSrc: "/polen.JPG",
    alt: "Granos de polen de abeja",
    price: "S/ 45",
  },
  {
    id: 4,
    name: "Gel de Jalea Real",
    description: "Concentrado de vitaminas y minerales para vitalidad y concentración.",
    imageSrc: "/gel.JPG",
    alt: "Gel de jalea real en envase",
    price: "S/ 35",
  },
  {
    id: 5,
    name: "Pack Miel + Polen + Propóleo",
    description: "Combinación energética ideal para fortalecer tus defensas.",
    imageSrc: "/packpolenpropoleo.JPG",
    alt: "Pack de miel, polen y propóleo",
    price: "S/ 95",
  },
  {
    id: 6,
    name: "Pack Total Salud",
    description: "Incluye miel, propóleo, polen y gel de jalea real. Energía completa.",
    imageSrc: "/packtotal.JPG",
    alt: "Pack total de productos naturales GOXA",
    price: "S/ 120",
  },
  // --- He reducido a 6 para un grid más limpio (3x2 o 2x3). 
  // --- Si prefieres 8, solo descomenta los siguientes.
  // {
  //   id: 7,
  //   name: "Pack Yogurt + Miel",
  //   description: "Dúo perfecto para el desayuno. Refrescante y natural.",
  //   imageSrc: "/packyogurtmiel.JPG",
  //   alt: "Pack de yogurt natural con miel",
  //   price: "S/ 40",
  // },
  // {
  //   id: 8,
  //   name: "Pack Promocional GOXA",
  //   description: "Ideal para regalo. Incluye productos seleccionados.",
  //   imageSrc: "/pack1.JPG",
  //   alt: "Pack promocional con productos GOXA",
  //   price: "S/ 110",
  // },
];

// NUEVO: Arreglo para la sección de Propuesta de Valor
const valueProps: ReadonlyArray<ValueProp> = [
  {
    id: 1,
    icon: Leaf,
    title: "100% Natural",
    description: "Sin preservantes ni químicos. Directo de la naturaleza a tu mesa."
  },
  {
    id: 2,
    icon: Droplet,
    title: "Procesos Puros",
    description: "Productos sin pasteurizar, conservando todos sus nutrientes y enzimas."
  },
  {
    id: 3,
    icon: Flower,
    title: "Flora Silvestre",
    description: "Nuestras abejas recolectan de la biodiversidad única de la Selva Central."
  },
  {
    id: 4,
    icon: UtensilsCrossed,
    title: "Sabor Artesanal",
    description: "El auténtico sabor de Oxapampa, con recetas y cuidados tradicionales."
  }
];

// --- 3. Componente ProductsSection en TSX (Mejorado) ---

export default function ProductsSection() {
  return (
    // Fondo más fresco y natural, a juego con el HeroSection
    <section className="py-20 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Sección de Encabezado Mejorada */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 tracking-tight">
            Nuestros Productos Estrella
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre la calidad y sabor auténtico de nuestros productos naturales de la Selva Central de Oxapampa.
          </p>
        </div>

        {/* ----- INICIO: NUEVA Sección "Propuesta de Valor" ----- */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {valueProps.map((prop) => {
            const Icon = prop.icon; // Obtenemos el componente del icono
            return (
              <div key={prop.id} className="flex flex-col items-center text-center p-4">
                <div className="flex-shrink-0 mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-600">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {prop.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
        {/* ----- FIN: NUEVA Sección "Propuesta de Valor" ----- */}


        {/* Grid de Productos Mejorado (usando 3 columnas para un look más "premium") */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product: Product) => (
            <div 
              key={product.id} 
              className="group overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 
                         transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Contenedor de Imagen */}
              {/* CAMBIO: Aumenté la altura de h-64 a h-96 (de 256px a 384px) 
                para dar más espacio a las imágenes de formato vertical.
              */}
              <div className="relative w-full h-96 overflow-hidden">
                <img 
                  src={product.imageSrc}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  onError={(e) => { 
                    e.currentTarget.src = "https://placehold.co/400x400/EEE/333?text=Producto"; 
                    e.currentTarget.onerror = null; 
                  }}
                />
                
                {/* Etiqueta de Precio (Estilo "Pill" con colores de marca) */}
                <div className="absolute top-4 right-4 bg-amber-400 text-green-900 px-3 py-1 rounded-full shadow-md">
                  <span className="text-sm font-bold">{product.price}</span>
                </div>
              </div>

              {/* Información del Producto */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 text-sm h-12"> {/* Altura fija para alinear tarjetas */}
                  {product.description}
                </p>

                {/* Botón de WhatsApp (Reemplazo de WhatsAppButton) */}
                <button 
                  className="flex items-center justify-center w-full py-2.5 px-4 rounded-lg 
                             bg-green-600 text-white font-semibold text-sm 
                             transition-all duration-300 ease-in-out
                             hover:bg-green-700 hover:shadow-lg transform group-hover:scale-105"
                  // onClick={() => window.open(`https://wa.me/TUNUMERO?text=Hola GOXA...`)} // Descomenta y añade tu lógica de WhatsApp aquí
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Consultar por WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Inferior (Más Impactante) */}
        <div className="text-center mt-20 p-10 bg-gradient-to-r from-green-700 to-green-800 rounded-2xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Buscas algo más?
          </h3>
          <p className="text-xl font-medium text-white/90 mb-8 max-w-lg mx-auto">
            Mira nuestro catálogo completo con Packs especiales, Café de la zona y Yogurt artesanal.
          </p>
          <a href="https://wa.me/51998855069">
          <button 
            className="py-3 px-8 rounded-full text-lg font-bold
                       bg-amber-400 text-green-900 
                       transition-all duration-300 ease-in-out 
                       transform hover:scale-105 hover:bg-amber-300 shadow-lg"
            // onClick={() => window.open(`https://wa.me/TUNUMERO?text=Hola GOXA...`)} // Descomenta y añade tu lógica de WhatsApp aquí
          >
            Ver Catálogo Completo 🌿
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}