import { Metadata } from "next";
import Image from "next/image";
import { Facebook, Instagram, MapPin, MessageCircle, Music, Music2, Video } from "lucide-react";
import { TikTokIcon } from "@/components/icons/tiktok-icon";

export const metadata: Metadata = {
  title: "Quiénes somos | GOXA natural de Oxapampa",
  description:
    "Conoce la historia familiar de GOXA, la razón detrás de nuestros productos premium y cómo conectamos a las familias con Oxapampa desde Lima y todo el Perú.",
};

const highlightValues = [
  {
    label: "Herencia familiar",
    detail: "Empresa familiar",
    description:
      "Hacemos todo con cariño y empeño, cuidando cada proceso para llevar a tu mesa solo lo mejor de Oxapampa.",
  },
  {
    label: "Origen autentico",
    detail: "Oxapampa · Pasco",
    description:
      "Seleccionamos materias primas directamente desde Oxapampa para conservar el sabor, aroma y frescura.",
  },
  {
    label: "Visión joven",
    detail: "Eficiencia y distribución",
    description:
      "Logística afinada para llevar los productos a Lima y a toda la costa manteniendo altos estándares.",
  },
];

const contactDetails = [
  {
    label: "WhatsApp",
    value: "+51 998 855 069",
    description: "Un mensaje y te respondemos con catálogo y disponibilidad.",
    href: "https://wa.me/51998855069?text=Hola%20GOXA%2C%20quiero%20conocer%20sus%20productos%20premium",
    icon: MessageCircle,
  },
  {
    label: "Ubicación",
    value: "Oxapampa · Pasco (producción) / Lima & Perú (distribución)",
    description: "Cuidamos cada detalle del origen hasta la entrega en tu mesa.",
    href: "https://www.google.com/maps/place/Oxapampa,+Pasco,+Per%C3%BA",
    icon: MapPin,
  },
];

const recommendations = [
  {
    handle: "sofiacarreras1",
    text: "👏👏👏🍯💗💗 es excelente la miel que vendes!!! 😍😍",
  },
  {
    handle: "ruh.peru",
    text: "Son demasiado buenas, recomendación total!!",
  },
  {
    handle: "jackie_fuller_b",
    text: "Son espectaculares!!!",
  },
  {
    handle: "germanrc00",
    text: "🔥🔥 buenazas, recomendado",
  },
  {
    handle: "sandrazarak",
    text: "Super ricas! Generosas, jugosas y de gran calidad",
  },
  {
    handle: "__jrobinsonc__",
    text: "Que tales burgers! 🔥 brutales",
  },
  {
    handle: "carlapenagos",
    text: "DELICIOSOOOO!! Super recomendado!",
  },
];

const videoEmbedUrl = "https://www.youtube.com/embed/ZXesAtWXYvY?feature=share";
export default function QuienesSomosPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden rounded-b-[3rem] bg-slate-900 text-white">
        <Image
          src="/hero-3.png"
          alt="Fondo de Oxapampa para Quiénes somos"
          fill
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/80 via-emerald-900/70 to-emerald-800/80" />
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-emerald-200">
            Somos GOXA
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Quiénes somos
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/90">
            En GOXA producimos y distribuimos productos premium desde Oxapampa, Perú.
          </p>
          <p className="mt-3 max-w-3xl text-lg text-white/90">
            Somos una empresa familiar con más de 30 años de experiencia en el mundo comercial, que une la
            experiencia de generaciones con una visión joven enfocada en eficiencia y distribución.
          </p>
          <p className="mt-3 max-w-3xl text-lg text-white/90">
            Nuestro propósito es conectar a las familias con alimentos de alta calidad, que aporten a su salud,
            bienestar y calidad de vida, cuidando el origen, los procesos y cada detalle del producto.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/51998855069"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-lg font-semibold text-slate-900 transition hover:shadow-lg"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-lg font-semibold text-white transition hover:border-white"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {highlightValues.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">{item.label}</p>
              <p className="mt-3 text-3xl font-bold text-slate-900">{item.detail}</p>
              <p className="mt-4 text-base text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr,0.9fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-amber-100 p-3 text-amber-600">
                <Video className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-amber-500">
                Video institucional
              </p>
            </div>
            <h2 className="text-3xl font-semibold text-slate-900">Desde el corazón de Oxapampa</h2>
            <p className="text-base text-slate-600">
              Mira cómo viajamos desde la selva central hasta tu mesa, seleccionando cada ingrediente, tostando
              nuestros cafés y cuidando la cadena de frío de los quesos y carnes artesanales.
            </p>
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-900 shadow-2xl mx-auto max-w-[420px] sm:max-w-[520px]">
              <div className="aspect-[9/16]">
                <iframe
                  src={videoEmbedUrl}
                  title="Video institucional de GOXA en Oxapampa"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-slate-200 bg-gradient-to-b from-white via-emerald-50 to-white p-6 shadow-lg">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">Contacto</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">Todos nuestros canales abiertos</h3>
              <p className="mt-3 text-sm text-slate-600">
                Escríbenos o llámanos, sacamos tus pedidos en la misma semana y te cuidamos con logística propia.
              </p>
            </div>

            <div className="space-y-5">
              {contactDetails.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-emerald-400 hover:shadow"
                  >
                    <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">
                        {contact.label}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-slate-900">{contact.value}</p>
                      <p className="text-sm text-slate-500">{contact.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="rounded-2xl border border-dashed border-slate-200 p-4 text-sm text-slate-600">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                Redes sociales
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/goxa_pe"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-emerald-800"
                >
                  <Instagram className="h-4 w-4" />
                  @goxa_pe
                </a>
                <a
                  href="https://www.facebook.com/people/Goxa/61566229425220/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-emerald-800"
                >
                  <Facebook className="h-4 w-4" />
                  GOXA en Facebook
                </a>
                <a
                  href="https://www.tiktok.com/@goxa_peru"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-emerald-800"
                >
                  <Music2 />
                  @goxa_peru
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 lg:py-20">
        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">
              Recomendaciones
            </p>
           
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((rec) => (
              <article key={rec.handle} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">@{rec.handle}</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{rec.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
