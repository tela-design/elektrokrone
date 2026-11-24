"use client";

import { useActionState } from "react";
import { sendInquiry, type FormState } from "@/app/actions";
import { services } from "@/content/services";

const initial: FormState = { ok: false, message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendInquiry, initial);

  return (
    <form action={action} className="contact-form">
      <div className="form-row">
        <label>
          Name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          E-Mail
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>

      <div className="form-row">
        <label>
          Telefon (optional)
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Anliegen
          <select name="service" defaultValue="">
            <option value="">bitte wählen</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Anderes Anliegen">Anderes Anliegen</option>
          </select>
        </label>
      </div>

      <label>
        Ihre Nachricht
        <textarea name="message" rows={5} required minLength={10} />
      </label>

      {/* honeypot, für menschen unsichtbar */}
      <div className="hp" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>
          Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen und stimme zu, dass meine Angaben zur
          Bearbeitung meiner Anfrage verarbeitet werden.
        </span>
      </label>

      <button className="btn btn-primary" type="submit" disabled={pending}>
        {pending ? "Wird gesendet …" : "Nachricht senden"}
      </button>

      {state.message && (
        <p role="status" className={state.ok ? "form-ok" : "form-error"}>
          {state.message}
        </p>
      )}
    </form>
  );
}
