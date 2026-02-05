"use client";

import Image from "next/image";
import Link from "next/link";

export default function OregonWaySection() {
  return (
    <section className="bg-[#F4F1EA] py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-amber-700 font-bold tracking-[0.22em] uppercase">
              El gozo de oxapampa
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-green-900 tracking-tight">
              Oxapampa se siente, el sabor lo confirma
            </h2>
            <div className="mt-6 space-y-5 text-green-950/80 leading-relaxed">
              <p>
                En GOXA seleccionamos insumos de la Selva Central bajo criterios claros de
                calidad y respeto por su entorno. Cada proceso es cuidado con precisión,
                manteniendo el carácter natural de cada ingrediente.
              </p>
              <p>
                Nuestra forma de trabajar es sobria y consistente: natural, honesta y bien
                ejecutada. Cuando el origen es auténtico, el resultado se expresa por sí solo.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white/70 border border-green-900/10 text-green-900 text-sm font-semibold">
                🌿 Ingredientes naturales
              </span>
              <span className="px-4 py-2 rounded-full bg-white/70 border border-green-900/10 text-green-900 text-sm font-semibold">
                🧺 Elaboración cuidadosa
              </span>
              <span className="px-4 py-2 rounded-full bg-white/70 border border-green-900/10 text-green-900 text-sm font-semibold">
                🧭 Identidad de origen
              </span>
              <span className="px-4 py-2 rounded-full bg-white/70 border border-green-900/10 text-green-900 text-sm font-semibold">
                ✨ Calidad que se percibe
              </span>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-10 py-3 text-base font-semibold text-green-950 shadow-lg border border-white/30 transition hover:bg-amber-300"
              >
                Compra an línea
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-900/[0.05] to-amber-500/[0.06]" />
            <div className="relative sm:px-6 sm:py-8">
              <div className="mx-auto w-full overflow-hidden rounded-[26px] border border-transparent bg-white shadow-2xl shadow-emerald-900/20">
                <Image
                  src="/hero-2.png"
                  alt="Paisaje de Oxapampa"
                  width={900}
                  height={500}
                  className="h-full w-full min-h-[420px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
