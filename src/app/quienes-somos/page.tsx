"use client";


import Image from "next/image";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Music2,
  Video,
} from "lucide-react";



/* ==============================
   DATA
============================== */

const highlightValues = [
  {
    label: "Herencia familiar",
    detail: "Empresa familiar",
    description:
      "Hacemos todo con cariño y empeño, cuidando cada proceso para llevar a tu mesa solo lo mejor de Oxapampa.",
  },
  {
    label: "Origen auténtico",
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
  { handle: "sofiacarreras1", text: "👏👏👏🍯💗💗 es excelente la miel que vendes!!! 😍😍" },
  { handle: "ruh.peru", text: "Son demasiado buenas, recomendación total!!" },
  { handle: "jackie_fuller_b", text: "Son espectaculares!!!" },
  { handle: "germanrc00", text: "🔥🔥 buenazas, recomendado" },
  { handle: "sandrazarak", text: "Super ricas! Generosas, jugosas y de gran calidad" },
  { handle: "__jrobinsonc__", text: "Que tales burgers! 🔥 brutales" },
  { handle: "carlapenagos", text: "DELICIOSOOOO!! Super recomendado!" },
];

const videoEmbedUrl =
  "https://www.youtube.com/embed/ZXesAtWXYvY?autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1";

/* ==============================
   VIDEO COMPONENT
============================== */

function VideoEleganteGOXA() {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative mx-auto max-w-[420px] sm:max-w-[520px] overflow-hidden rounded-[32px] border border-slate-200 shadow-2xl">
      <div className="aspect-[9/16] bg-slate-900">
        {!play ? (
          <button
            onClick={() => setPlay(true)}
            className="group absolute inset-0 flex items-center justify-center"
            aria-label="Reproducir video institucional"
          >
            <Image
              src="/hero-3.png"
              alt="GOXA desde Oxapampa"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-slate-400/80 shadow-xl transition group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 translate-x-[2px] text-slate-900"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        ) : (
          <iframe
            src={videoEmbedUrl}
            title="Video institucional de GOXA en Oxapampa"
            className="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}

/* ==============================
   PAGE
============================== */

export default function QuienesSomosPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden rounded-b-[3rem] bg-slate-900 text-white">
        <Image
          src="/hero-3.png"
          alt="Fondo de Oxapampa"
          fill
          priority
          className="absolute inset-0 -z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/60 via-emerald-900/60 to-emerald-800/0" />

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-emerald-200">
            Somos GOXA
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Quiénes somos
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/90">
            En GOXA producimos y distribuimos productos premium desde Oxapampa, Perú.
          </p>
          <p className="mt-3 max-w-3xl text-lg text-white/90">
            Somos una empresa familiar con más de 30 años de experiencia, uniendo tradición
            y visión joven enfocada en eficiencia y distribución.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/51998855069"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-amber-400 px-6 py-3 text-lg font-semibold text-slate-900 hover:shadow-lg"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="/"
              className="rounded-full border border-white/60 px-6 py-3 text-lg font-semibold"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {highlightValues.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border bg-slate-50 p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-bold">{item.detail}</p>
              <p className="mt-4 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* VIDEO + CONTACT */}
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

            <h2 className="text-3xl font-semibold">Desde el corazón de Oxapampa</h2>
            <p className="text-slate-600">
              Mira cómo viajamos desde la selva central hasta tu mesa cuidando cada detalle.
            </p>

            <VideoEleganteGOXA />
          </div>

          <div className="space-y-6 rounded-3xl border bg-gradient-to-b from-white via-emerald-50 to-white p-6 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">
              Contacto
            </p>
            <h3 className="text-2xl font-semibold">Todos nuestros canales abiertos</h3>

            <div className="space-y-5">
              {contactDetails.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border bg-white p-4 hover:shadow"
                  >
                    <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                        {c.label}
                      </p>
                      <p className="text-lg font-semibold">{c.value}</p>
                      <p className="text-sm text-slate-500">{c.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="rounded-2xl border-dashed border p-4 text-sm text-slate-600">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                Redes sociales
              </p>
              <div className="mt-4 flex gap-4">
                <a href="https://www.instagram.com/goxa_pe" target="_blank">Instagram</a>
                <a href="https://www.facebook.com/people/Goxa/61566229425220/" target="_blank">Facebook</a>
                <a href="https://www.tiktok.com/@goxa_peru" target="_blank">TikTok</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDATIONS */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-3xl border bg-slate-50 p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
            Recomendaciones
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((rec) => (
              <article key={rec.handle} className="rounded-2xl border bg-white p-4">
                <p className="font-semibold">@{rec.handle}</p>
                <p className="mt-2 text-sm text-slate-600">{rec.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
