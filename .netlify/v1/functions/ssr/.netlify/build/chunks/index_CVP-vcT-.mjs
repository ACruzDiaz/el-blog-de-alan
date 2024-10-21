/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, e as renderComponent } from './astro/server_76EXaX6B.mjs';
import 'kleur/colors';
import 'html-escaper';
import { f as fetchApi, $ as $$MainLayout } from './strapi_COWkrDQG.mjs';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://www.my-site.dev");
const $$TagsBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TagsBox;
  const { tagName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="tag"${addAttribute("/tags/" + tagName, "href")} data-astro-cid-gfs7335c>${tagName.toUpperCase()}</a> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/tagsBox/TagsBox.astro", void 0);

const $$TagsBoxContainer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 data-astro-cid-p6flmzzd>Categorias</h2> <div class="tagsBoxContainer" data-astro-cid-p6flmzzd> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/tagsBox/TagsBoxContainer.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const articles = await fetchApi({
    endpoint: "articles",
    // el tipo de contenido a obtener
    wrappedByKey: "data"
    // la clave para descomponer la respuesta
  });
  let categoriesList = articles.map((category) => category.attributes.tags.split(",")).flat();
  categoriesList = categoriesList.map((category) => category.toLocaleLowerCase().trim());
  const allCategories = [...new Set(categoriesList)];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Indice de categorias" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "TagsBoxContainer", $$TagsBoxContainer, {}, { "default": ($$result3) => renderTemplate`${allCategories.map((tagN) => renderTemplate`${renderComponent($$result3, "TagsBox", $$TagsBox, { "tagName": tagN })}`)}` })} </main> ` })}`;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/tags/index.astro";
const $$url = "/tags";

export { $$Index as default, $$file as file, $$url as url };
