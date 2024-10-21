/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_76EXaX6B.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BlogCard } from './BlogCard_unHdrZ33.mjs';
import { f as fetchApi, $ as $$MainLayout } from './strapi_COWkrDQG.mjs';
/* empty css                         */

const $$Astro = createAstro("https://www.my-site.dev");
const prerender = true;
async function getStaticPaths() {
  const articles = await fetchApi({
    endpoint: "articles",
    // el tipo de contenido a obtener
    wrappedByKey: "data"
    // la clave para descomponer la respuesta
  });
  let categoriesList = articles.map((category) => category.attributes.tags.split(",")).flat();
  categoriesList = categoriesList.map((category) => category.toLocaleLowerCase().trim());
  const allCategories = [...new Set(categoriesList)];
  return allCategories.map((el) => ({ params: { tag: el }, props: { posts: articles } }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  let categoriesLista = posts.map((category) => category.attributes.tags.split(",")).flat();
  categoriesLista = categoriesLista.map((category) => category.toLocaleLowerCase().trim());
  const filteredPosts = posts.filter((post) => {
    let postTags = post.attributes.tags.split(",");
    postTags = postTags.map((items) => items.toLowerCase().trim());
    const isThereTags = postTags.filter((tagsFiltered) => tag === tagsFiltered);
    return isThereTags.length > 0;
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": tag, "data-astro-cid-tge3q7ae": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-tge3q7ae> ${filteredPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": post.attributes.title, "category": post.attributes.tags.split(","), "image": post.attributes.coverurl, "date": new Date(post.attributes.publishedAt).toDateString(), "views": "1", "url_post": "/blog/" + post.attributes.slug, "pathname": Astro2.url.pathname, "data-astro-cid-tge3q7ae": true })}`)} </main> ` })} `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

export { $$tag as default, $$file as file, getStaticPaths, prerender, $$url as url };
