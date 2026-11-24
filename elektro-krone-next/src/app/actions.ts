"use server";

export type FormState = { ok: boolean; message: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// nimmt die anfrage entgegen und leitet sie an INQUIRY_WEBHOOK_URL weiter
export async function sendInquiry(_prev: FormState, data: FormData): Promise<FormState> {
  // honeypot: bots füllen das versteckte feld aus
  if (String(data.get("website") ?? "")) {
    return { ok: true, message: "Vielen Dank für Ihre Nachricht." };
  }

  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const service = String(data.get("service") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name || !EMAIL.test(email) || message.length < 10) {
    return { ok: false, message: "Bitte füllen Sie Name, eine gültige E-Mail und Ihre Nachricht aus." };
  }
  if (data.get("consent") !== "on") {
    return { ok: false, message: "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu." };
  }

  const url = process.env.INQUIRY_WEBHOOK_URL;
  if (!url) {
    return { ok: false, message: "Das Formular ist noch nicht verbunden. Bitte schreiben Sie uns oder rufen Sie an." };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, phone, service, message }),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`status ${res.status}`);
  } catch {
    return { ok: false, message: "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie an." };
  }

  return { ok: true, message: "Vielen Dank. Wir melden uns zeitnah bei Ihnen." };
}
