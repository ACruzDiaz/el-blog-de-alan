import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_76EXaX6B.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://www.my-site.dev");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { title, category, image, date, views, url_post, from = "/tags/", pathname = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="fondoTW flex flex-col dark:bg-gray-50" data-astro-cid-e3grugc2> <a rel="noopener noreferrer"${addAttribute(url_post, "href")} aria-label="Te nulla oportere reprimique his dolorum" data-astro-cid-e3grugc2> <img${addAttribute(title, "alt")} class="object-cover w-full h-52 dark:bg-gray-500"${addAttribute(image, "src")} data-astro-cid-e3grugc2> </a> <div class="flex flex-col flex-1 p-6" data-astro-cid-e3grugc2> <div class="flex flex-row gap-1" data-astro-cid-e3grugc2> ${category.map(
    (el) => renderTemplate`<a rel="noopener noreferrer"${addAttribute(from + el.trim().toLowerCase() + "/", "href")} class="text-xs tracking-wider uppercase hover:underline" data-astro-cid-e3grugc2>${el}</a>`
  )} </div> <h3 class="flex-1 py-2 text-lg font-semibold leading-snug" data-astro-cid-e3grugc2>${title}</h3> <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600" data-astro-cid-e3grugc2> <span data-astro-cid-e3grugc2>${date}</span> <span data-astro-cid-e3grugc2>${views} views</span> </div> </div> </article> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/BlogCard.astro", void 0);

export { $$BlogCard as $ };
