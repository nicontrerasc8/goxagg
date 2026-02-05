"use client";

import Link from "next/link";
import { Button } from "./button";

export const StickyComprarButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button
        asChild
        className="rounded-full shadow-2xl shadow-emerald-800/40 bg-gradient-to-r from-emerald-600 to-lime-500 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 text-lg font-semibold uppercase tracking-wide"
        >
          Comprar
        </Link>
      </Button>
    </div>
  );
};

export default StickyComprarButton;
