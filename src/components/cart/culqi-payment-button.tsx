"use client";

import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/cart-context";

type CulqiCheckoutInstance = {
  token?: {
    id?: string;
    email?: string;
  };
  order?: unknown;
  error?: unknown;
  open: () => void;
  close: () => void;
  culqi?: () => void;
};

declare global {
  interface Window {
    CulqiCheckout?: new (
      publicKey: string,
      config: Record<string, unknown>
    ) => CulqiCheckoutInstance;
  }
}

const CULQI_SCRIPT_SRC = "https://js.culqi.com/checkout-js";

let culqiScriptPromise: Promise<void> | null = null;

function loadCulqiScript() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Culqi solo puede cargarse en el navegador."));
  }

  if (window.CulqiCheckout) {
    return Promise.resolve();
  }

  if (!culqiScriptPromise) {
    culqiScriptPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>(
        `script[src="${CULQI_SCRIPT_SRC}"]`
      );

      if (existingScript) {
        existingScript.addEventListener("load", () => resolve(), { once: true });
        existingScript.addEventListener("error", () => reject(new Error("No se pudo cargar Culqi.")), {
          once: true,
        });
        return;
      }

      const script = document.createElement("script");
      script.src = CULQI_SCRIPT_SRC;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("No se pudo cargar Culqi."));
      document.body.appendChild(script);
    });
  }

  return culqiScriptPromise;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function CulqiPaymentButton() {
  const { items, totalPrice, clearCart } = useCart();
  const [email, setEmail] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  const publicKey = process.env.NEXT_PUBLIC_CULQI_PUBLIC_KEY;
  const amount = Math.round(totalPrice * 100);

  const handlePayWithCulqi = async () => {
    const normalizedEmail = email.trim().toLowerCase();

    if (!publicKey) {
      toast.error("Falta configurar NEXT_PUBLIC_CULQI_PUBLIC_KEY.");
      return;
    }

    if (!isValidEmail(normalizedEmail)) {
      toast.error("Ingresa un email valido para continuar con Culqi.");
      return;
    }

    if (items.length === 0 || amount <= 0) {
      toast.error("Tu carrito esta vacio.");
      return;
    }

    setIsPaying(true);

    try {
      await loadCulqiScript();

      if (!window.CulqiCheckout) {
        throw new Error("Culqi no esta disponible.");
      }

      const paymentMethods = {
        tarjeta: true,
        yape: true,
        billetera: false,
        bancaMovil: false,
        agente: false,
        cuotealo: false,
      };

      const culqi = new window.CulqiCheckout(publicKey, {
        settings: {
          title: "GOXA",
          currency: "PEN",
          amount,
        },
        client: {
          email: normalizedEmail,
        },
        options: {
          lang: "es",
          installments: true,
          modal: true,
          paymentMethods,
          paymentMethodsSort: Object.keys(paymentMethods),
        },
        appearance: {
          theme: "default",
          hiddenCulqiLogo: false,
          hiddenBannerContent: false,
          hiddenBanner: false,
          hiddenToolBarAmount: false,
          hiddenEmail: false,
          menuType: "select",
          buttonCardPayText: `Pagar S/ ${totalPrice.toFixed(2)}`,
          defaultStyle: {
            bannerColor: "#14532d",
            buttonBackground: "#047857",
            menuColor: "#047857",
            linksColor: "#047857",
            buttonTextColor: "#ffffff",
            priceColor: "#14532d",
          },
          variables: {
            fontFamily: "Poppins, Arial, sans-serif",
            borderRadius: "12px",
            colorPrimary: "#047857",
            colorPrimaryText: "#ffffff",
            colorText: "#052e16",
            colorTextSecondary: "#475569",
            colorTextPlaceholder: "#94a3b8",
          },
        },
      });

      culqi.culqi = async () => {
        if (culqi.token?.id) {
          try {
            const response = await fetch("/api/culqi/charge", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                tokenId: culqi.token.id,
                email: culqi.token.email || normalizedEmail,
                amount,
                currencyCode: "PEN",
                items: items.map((item) => ({
                  productId: item.productId,
                  productName: item.productName,
                  variantLabel: item.variantLabel,
                  quantity: item.quantity,
                  price: item.price,
                })),
              }),
            });

            const result = await response.json();

            if (!response.ok) {
              throw new Error(result?.message || "No se pudo completar el pago.");
            }

            culqi.close();
            clearCart();
            toast.success("Pago realizado correctamente con Culqi.");
          } catch (error) {
            const message =
              error instanceof Error ? error.message : "No se pudo completar el pago.";
            toast.error(message);
          } finally {
            setIsPaying(false);
          }
          return;
        }

        if (culqi.order) {
          culqi.close();
          toast.success("Orden creada correctamente en Culqi.");
          setIsPaying(false);
          return;
        }

        console.error("Culqi error", culqi.error);
        toast.error("Culqi no pudo procesar el pago.");
        setIsPaying(false);
      };

      culqi.open();
    } catch (error) {
      const message = error instanceof Error ? error.message : "No se pudo abrir Culqi.";
      toast.error(message);
      setIsPaying(false);
    }
  };

  return (
    <div className="space-y-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
      {/* <div>
        <p className="text-sm font-bold text-green-950">Pagar online con Culqi</p>
        <p className="mt-1 text-xs leading-relaxed text-green-900/65">
          Ingresa tu correo para recibir la confirmacion del pago.
        </p>
      </div>
      <Input
        type="email"
        inputMode="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="tu@email.com"
        className="h-11 rounded-xl border-emerald-200 bg-white text-green-950"
      />
      <Button
        type="button"
        onClick={handlePayWithCulqi}
        disabled={isPaying}
        className="h-[52px] w-full rounded-xl bg-emerald-700 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800"
      >
        {isPaying ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <CreditCard className="h-5 w-5" />
        )}
        Pagar con Culqi
      </Button> */}
    </div>
  );
}
