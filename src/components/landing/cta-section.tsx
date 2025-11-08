"use client";

import React from 'react';
import { MessageCircle, Clock, Truck, Star } from "lucide-react";

// NOTA: Se ha quitado el import de WhatsAppButton y se ha reemplazado por botones nativos de React
// con estilos Tailwind para asegurar que el componente sea 100% autocontenido y funcional.

export default function CTASection() {
  return (
    // CAMBIO: Fondo con un gradiente verde profundo para un look premium y más contraste
    <section className="py-20 bg-gradient-to-br from-green-800 to-green-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main CTA */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Listo para probar lo auténtico?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contáctanos ahora y recibe los mejores productos de Oxapampa en tu domicilio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            
             <a href="https://wa.me/51998855069">
            <button
              className="flex items-center justify-center text-xl px-8 py-4 rounded-full shadow-2xl 
                         bg-amber-400 text-green-900 font-bold transition-all duration-300 transform hover:scale-105 hover:bg-amber-300 w-full sm:w-auto"
              // onClick={() => window.open(`https://wa.me/TUNUMERO?text=Quiero hacer un pedido GOXA`)} 
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Comprar por WhatsApp
            </button>
            </a>
   
          </div>

          {/* Urgency elements (Pills) */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-white">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 font-medium">
              <Clock className="w-5 h-5 text-amber-300" /> {/* Ícono en ámbar para resaltar */}
              Stock limitado
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 font-medium">
              <Truck className="w-5 h-5 text-amber-300" />
              Envío rápido a Lima
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 font-medium">
              <Star className="w-5 h-5 text-amber-300" />
              Calidad garantizada
            </div>
          </div>

          {/* Trust elements (Stats Grid) - Más audaz y limpio */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-4 border-white/20">
            <h3 className="text-3xl font-bold text-white mb-6">
              ¿Por qué confiar en GOXA?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                {/* Stats más grandes */}
                <div className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-2">500+</div>
                <div className="text-lg font-medium">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-2">4.9/5</div>
                <div className="text-lg font-medium">Calificación promedio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-2">24-48h</div>
                <div className="text-lg font-medium">Tiempo de entrega</div>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-12 text-white/80 text-lg">
            <p className="mb-2">📱 **WhatsApp:** +51 987 654 321</p>
            <p className="mb-2">📧 **Email:** contacto@goxa.pe</p>
            <p>📍 Entregas en Lima | Origen en Oxapampa</p>
          </div>
        </div>
      </div>
    </section>
  );
}