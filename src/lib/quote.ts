// Comunicación mínima entre las tarjetas de servicio y el formulario de cotización,
// sin estado global: las tarjetas emiten un evento y el formulario lo escucha.
export const QUOTE_ADD_EVENT = "metaludik:cotizar-agregar";

export function addServiceToQuote(slug: string) {
  window.dispatchEvent(new CustomEvent<string>(QUOTE_ADD_EVENT, { detail: slug }));
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
