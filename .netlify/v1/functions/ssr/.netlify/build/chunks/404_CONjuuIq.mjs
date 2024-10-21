/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, m as maybeRenderHead } from './astro/server_76EXaX6B.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Link } from './Link_DFb5lR69.mjs';
import { $ as $$AstroNav } from './AstroNav_B-MX6qhM.mjs';
/* empty css                           */
/* empty css                       */

const $$Astro = createAstro("https://www.my-site.dev");
const $$NotFoundLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NotFoundLayout;
  return renderTemplate`<html class="h-full"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="/styles/style.css"><title>Pagina no encontrada</title>${renderHead()}</head> <body class="h-full"> ${renderComponent($$result, "AstroNav", $$AstroNav, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/layouts/NotFoundLayout.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "NotFoundLayout", $$NotFoundLayout, { "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-zetdm5md> <p id="notFoundH1" data-astro-cid-zetdm5md><span data-astro-cid-zetdm5md>Ooopss! </span> Algo a salido mal... <span class="errorMSG" data-astro-cid-zetdm5md>Error 404</span></p> <img id="notFoundIMG" src="/images/404.png" alt="404 error" data-astro-cid-zetdm5md> ${renderComponent($$result2, "Link", $$Link, { "text": "Regresar al inicio", "href": "/", "classes": "boton notFoundLINK", "data-astro-cid-zetdm5md": true })} </main> ` })} `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/404.astro", void 0);

const $$file = "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
