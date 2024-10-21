/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent, f as renderSlot } from './astro/server_76EXaX6B.mjs';
import 'kleur/colors';
import 'html-escaper';
import { f as fetchApi, $ as $$MainLayout } from './strapi_COWkrDQG.mjs';
import { $ as $$BlogCard } from './BlogCard_unHdrZ33.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$2 = createAstro("https://www.my-site.dev");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const { title, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="boton"${addAttribute(href, "href")}>${title}</a>`;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/Button.astro", void 0);

const $$Astro$1 = createAstro("https://www.my-site.dev");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevUrl, nextUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="blog pages" data-astro-cid-d776pwuy> ${prevUrl && renderTemplate`${renderComponent($$result, "Button", $$Button, { "title": "Back", "href": prevUrl, "data-astro-cid-d776pwuy": true })}`} ${nextUrl && renderTemplate`${renderComponent($$result, "Button", $$Button, { "title": "Next", "href": nextUrl, "data-astro-cid-d776pwuy": true })}`} </nav> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/Pagination.astro", void 0);

const $$BlogCardContainer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="blogCardContainer" data-astro-cid-sq23h6ft> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/blogCardContainer/BlogCardContainer.astro", void 0);

const $$Astro = createAstro("https://www.my-site.dev");
const prerender = true;
async function getStaticPaths({ paginate }) {
  const articles = await fetchApi({
    endpoint: "articles",
    // el tipo de contenido a obtener
    wrappedByKey: "data"
    // la clave para descomponer la respuesta
  });
  const sortedByDate = articles.sort((a, b) => Date.parse(b.attributes.publishedAt) - Date.parse(a.attributes.publishedAt));
  return paginate(sortedByDate, {
    pageSize: 4
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const RandomNumber = 1;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Mis blogs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "BlogCardContainer", $$BlogCardContainer, {}, { "default": ($$result3) => renderTemplate`${page.data.map(
    (article) => renderTemplate`${renderComponent($$result3, "BlogCard", $$BlogCard, { "title": article.attributes.title, "category": article.attributes.tags.split(","), "image": article.attributes.coverurl, "date": new Date(article.attributes.publishedAt).toDateString(), "views": RandomNumber, "url_post": "/blog/" + article.attributes.slug, "from": "tags/" })}`
  )}` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} </main> ` })}`;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/blog/[...page].astro", void 0);

const $$file = "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

export { $$ as default, $$file as file, getStaticPaths, prerender, $$url as url };
