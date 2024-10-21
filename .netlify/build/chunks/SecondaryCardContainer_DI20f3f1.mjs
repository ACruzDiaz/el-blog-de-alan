import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent } from './astro/server_76EXaX6B.mjs';
import 'kleur/colors';
import 'html-escaper';
import { f as fetchApi } from './strapi_COWkrDQG.mjs';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro("https://www.my-site.dev");
const $$SecondaryBlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SecondaryBlogCard;
  const { primeraCategoria, image, title, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute("/blog/" + slug, "href")} class="secondaryBlogCard" data-astro-cid-zfnwmsei> <img${addAttribute(image, "src")}${addAttribute("tarjeta" + primeraCategoria, "alt")} data-astro-cid-zfnwmsei> <span data-astro-cid-zfnwmsei>${primeraCategoria}</span> <h3 data-astro-cid-zfnwmsei>${title}</h3> </a> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/secondaryBlogCard/SecondaryBlogCard.astro", void 0);

const $$SecondaryCardContainer = createComponent(async ($$result, $$props, $$slots) => {
  const articles = await fetchApi({
    endpoint: "articles",
    // el tipo de contenido a obtener
    wrappedByKey: "data"
    // la clave para descomponer la respuesta
  });
  return renderTemplate`${maybeRenderHead()}<div class="secondaryCardContainer"> ${articles.map((article) => renderTemplate`${renderComponent($$result, "SecondaryBlogCard", $$SecondaryBlogCard, { "title": article.attributes.title, "primeraCategoria": article.attributes.tags.split(",")[0].toUpperCase(), "image": article.attributes.coverurl, "slug": article.attributes.slug })}`).slice(0, 5)} </div> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/blogCardContainer/SecondaryCardContainer.astro", void 0);

export { $$SecondaryCardContainer as $ };
