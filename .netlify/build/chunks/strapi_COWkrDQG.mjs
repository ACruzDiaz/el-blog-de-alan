import { a as createComponent, r as renderTemplate, m as maybeRenderHead, c as createAstro, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot } from './astro/server_76EXaX6B.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                           */
import { $ as $$AstroNav } from './AstroNav_B-MX6qhM.mjs';
import 'clsx';
/* empty css                           */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="fondoTW px-4 divide-y dark:bg-gray-100 dark:text-gray-800" data-astro-cid-sz7xmlte> <div class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0" data-astro-cid-sz7xmlte> <div class="lg:w-1/3" data-astro-cid-sz7xmlte> <a rel="noopener noreferrer" href="#" class="flex justify-center space-x-3 lg:justify-start" data-astro-cid-sz7xmlte> <div class="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50" data-astro-cid-sz7xmlte> <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z" data-astro-cid-sz7xmlte></path> </svg> </div> <span class="self-center text-2xl font-semibold" data-astro-cid-sz7xmlte>El blog de Alan</span> </a> </div> </div> <div class="py-6 text-sm text-center dark:text-gray-600" data-astro-cid-sz7xmlte>© 2024 El blog de Alan. Almost all rights reserved...</div> </footer> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://www.my-site.dev");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth" data-astro-cid-ouamjn2i> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="/styles/style.css"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-ouamjn2i> ${renderComponent($$result, "AstroNav", $$AstroNav, { "data-astro-cid-ouamjn2i": true })} ${renderSlot($$result, $$slots["default"], renderTemplate` Default Text`)} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ouamjn2i": true })} </body></html>`;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/layouts/MainLayout.astro", void 0);

async function fetchApi({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList
}) {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }
  const url = new URL(`${"http://localhost:1337"}/api/${endpoint}`);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const res = await fetch(url.toString());
  let data = await res.json();
  if (wrappedByKey) {
    data = data[wrappedByKey];
  }
  if (wrappedByList) {
    data = data[0];
  }
  return data;
}

export { $$MainLayout as $, fetchApi as f };
