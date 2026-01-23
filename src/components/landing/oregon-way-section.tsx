"use client";

import React from "react";

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
      🧑‍🍳 Elaboración cuidadosa
    </span>
    <span className="px-4 py-2 rounded-full bg-white/70 border border-green-900/10 text-green-900 text-sm font-semibold">
      🏔️ Identidad de origen
    </span>
    <span className="px-4 py-2 rounded-full bg-white/70 border border-green-900/10 text-green-900 text-sm font-semibold">
      ✨ Calidad que se percibe
    </span>
  </div>
</div>


          {/* Ilustración estilo “line art” */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-green-900/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-900/[0.03] to-amber-500/[0.05]" />
            <div className="relative p-6 sm:p-10">
              <svg
                viewBox="0 0 900 500"
                className="w-full h-auto"
                aria-label="Ilustración granja"
              >
                <g fill="none" stroke="#2F4B39" strokeWidth="4" opacity="0.9">
                  <path d="M60 360 C140 320, 220 310, 320 340 C420 370, 520 380, 620 350 C720 320, 800 330, 860 360" />
                  <path d="M290 340 L290 220 L430 140 L570 220 L570 340" />
                  <path d="M330 340 L330 250 L430 190 L530 250 L530 340" />
                  <path d="M430 190 L430 340" />
                  <path d="M365 285 L410 285" />
                  <path d="M450 285 L495 285" />
                  <path d="M620 340 L620 210 L690 210 L690 340" />
                  <path d="M620 210 C620 170, 690 170, 690 210" />
                  <path d="M720 340 C740 320, 780 320, 800 340 C820 360, 780 380, 760 370" />
                  <path d="M745 335 C752 325, 768 325, 775 335" />
                  <path d="M200 350 C210 330, 240 330, 250 350 C260 370, 240 390, 220 380" />
                </g>
                <g fill="none" stroke="#2F4B39" strokeWidth="3" opacity="0.5">
                  <path d="M720 150 C760 110, 820 110, 860 150" />
                  <path d="M650 140 C690 100, 750 100, 790 140" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
