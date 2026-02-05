import Link from "next/link";
import { Facebook, Instagram, Music2 } from "lucide-react";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-poppins font-bold mb-3 tracking-wide">GOXA</h3>
          <p className="text-white/90 mb-4">Productos naturales y gourmet de Oxapampa</p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-sm text-white/90">
            <Link
              href="/"
              className="text-white/90 underline-offset-4 hover:text-white"
            >
              Compra en línea
            </Link>
            <Link
              href="/"
              className="text-white/90 underline-offset-4 hover:text-white"
            >
              Ver catálogo
            </Link>
            <Link
              href="/inicio"
              className="text-white/90 underline-offset-4 hover:text-white"
            >
              Conocer la marca
            </Link>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-8 border-t border-green-700 pt-8">
          <a
            href="https://www.facebook.com/people/Goxa/61566229425220/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="S�guenos en Facebook"
            className="text-green-200 hover:text-white transition-colors duration-300"
          >
            <Facebook className="w-7 h-7" />
          </a>

          <a
            href="https://www.instagram.com/goxa_pe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="S�guenos en Instagram"
            className="text-green-200 hover:text-white transition-colors duration-300"
          >
            <Instagram className="w-7 h-7" />
          </a>
          <a
            href="https://www.tiktok.com/@goxa_peru"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="S�guenos en TikTok"
            className="text-green-200 hover:text-white transition-colors duration-300"
          >
            <Music2 className="w-7 h-7" />
          </a>
        </div>

        <p className="mt-8 text-xs text-white/70">� {currentYear} GOXA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
