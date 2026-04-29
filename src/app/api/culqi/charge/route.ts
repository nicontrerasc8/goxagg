import { NextRequest, NextResponse } from "next/server";

type ChargeItem = {
  productId?: number;
  productName?: string;
  variantLabel?: string;
  quantity?: number;
  price?: number;
};

type ChargeRequestBody = {
  tokenId?: string;
  email?: string;
  amount?: number;
  currencyCode?: string;
  items?: ChargeItem[];
};

const CULQI_CHARGES_URL = "https://api.culqi.com/v2/charges";

function jsonError(message: string, status: number) {
  return NextResponse.json({ message }, { status });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  const secretKey = process.env.CULQI_SECRET_KEY;

  if (!secretKey) {
    return jsonError("Falta configurar CULQI_SECRET_KEY en el servidor.", 500);
  }

  let body: ChargeRequestBody;

  try {
    body = await request.json();
  } catch {
    return jsonError("El cuerpo de la solicitud no es valido.", 400);
  }

  const tokenId = body.tokenId?.trim();
  const email = body.email?.trim().toLowerCase();
  const amount = Number(body.amount);
  const currencyCode = body.currencyCode || "PEN";
  const items = Array.isArray(body.items) ? body.items : [];

  if (!tokenId) {
    return jsonError("Falta el token de Culqi.", 400);
  }

  if (!email || !isValidEmail(email)) {
    return jsonError("El email del cliente no es valido.", 400);
  }

  if (!Number.isInteger(amount) || amount <= 0) {
    return jsonError("El monto del pago no es valido.", 400);
  }

  if (!["PEN", "USD"].includes(currencyCode)) {
    return jsonError("La moneda no es valida.", 400);
  }

  const description = items.length
    ? `GOXA - ${items.length} producto${items.length === 1 ? "" : "s"}`
    : "GOXA - Compra online";

  const culqiResponse = await fetch(CULQI_CHARGES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount,
      capture: true,
      currency_code: currencyCode,
      description,
      email,
      source_id: tokenId,
      metadata: {
        source: "goxa-web",
        items: JSON.stringify(
          items.map((item) => ({
            productId: item.productId,
            productName: item.productName,
            variantLabel: item.variantLabel,
            quantity: item.quantity,
            price: item.price,
          }))
        ),
      },
    }),
  });

  const responseText = await culqiResponse.text();
  let data: unknown = responseText;

  try {
    data = responseText ? JSON.parse(responseText) : null;
  } catch {
    data = responseText;
  }

  if (!culqiResponse.ok) {
    const message =
      typeof data === "object" && data && "merchant_message" in data
        ? String((data as { merchant_message?: unknown }).merchant_message)
        : "Culqi rechazo el cargo.";

    return NextResponse.json(
      {
        message,
        culqi: data,
      },
      { status: culqiResponse.status }
    );
  }

  return NextResponse.json({ charge: data });
}
