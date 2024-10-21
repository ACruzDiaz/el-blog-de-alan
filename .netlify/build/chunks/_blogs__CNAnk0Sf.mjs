/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute, f as renderSlot } from './astro/server_76EXaX6B.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                           */
import { $ as $$MainLayout, f as fetchApi } from './strapi_COWkrDQG.mjs';
import { $ as $$SecondaryCardContainer } from './SecondaryCardContainer_DI20f3f1.mjs';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';

const $$Astro$1 = createAstro("https://www.my-site.dev");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { title, pubDate, coverurl } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "data-astro-cid-4dqtj3le": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-4dqtj3le> <section class="blogContent" data-astro-cid-4dqtj3le> <h1 class="blogLayoutH1" data-astro-cid-4dqtj3le>${title}</h1> <span class="blogLayoutPubDate" data-astro-cid-4dqtj3le>${pubDate}</span> <img class="blogLayoutImage"${addAttribute(coverurl, "src")}${addAttribute(title, "alt")} data-astro-cid-4dqtj3le> ${renderSlot($$result2, $$slots["default"])} </section> <section class="relatedArticles" data-astro-cid-4dqtj3le> <h1 class="accentTitle" data-astro-cid-4dqtj3le>Articulos relacionados</h1> ${renderSlot($$result2, $$slots["relatedArticlesSlot"])} </section> </main> ` })} `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/layouts/BlogLayout.astro", void 0);

const symbol = Symbol.for('@astropub/md');

const shared = /** @type {Shared} */ (
	globalThis[symbol] || (
		globalThis[symbol] = {
			markdownConfig: {},
		}
	)
);

/** @typedef {import('./shared').Shared} Shared */

class HTMLString extends String {
	get [Symbol.toStringTag]() {
		return 'HTMLString'
	}
}

async function markdown(
	/** @type {string} */ content,
	/** @type {MarkdownRenderingOptions} */ options = null
) {
	const processor = await createMarkdownProcessor({
		...shared.markdownConfig,
		...Object(options),
	});

	const result = await processor.render(content);
	return new HTMLString(result.code);
}

markdown.inline = async function inlinemarkdown(
	/** @type {string} */ content,
	/** @type {MarkdownRenderingOptions} */ options = null
) {
	const processor = await createMarkdownProcessor({
		...shared.markdownConfig,
		...Object(options),
	});

	const result = await processor.render(content);

	return new HTMLString(
		result.code.indexOf("<p>") === 0 &&
		result.code.indexOf("</p>") === result.code.length - 4
			? result.code.slice(3, -4)
			: result.code,
	);
};

/** @typedef {import('./markdown').MarkdownRenderingOptions} MarkdownRenderingOptions */

const $$Astro = createAstro("https://www.my-site.dev");
const prerender = true;
async function getStaticPaths() {
  const articles = await fetchApi({
    endpoint: "articles",
    // el tipo de contenido a obtener
    wrappedByKey: "data"
    // la clave para descomponer la respuesta
  });
  return articles.map((article) => ({ params: { blogs: article.attributes.slug }, props: article }));
}
const $$blogs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$blogs;
  const article = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": article.attributes.title, "pubDate": article.attributes.publishedAt, "coverurl": article.attributes.coverurl }, { "default": ($$result2) => renderTemplate`${markdown(article.attributes.content)} `, "relatedArticlesSlot": ($$result2) => renderTemplate`${renderComponent($$result2, "SecondaryCardContainer", $$SecondaryCardContainer, { "slot": "relatedArticlesSlot" })}` })}`;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/blog/[blogs].astro", void 0);

const $$file = "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/blog/[blogs].astro";
const $$url = "/blog/[blogs]";

export { $$blogs as default, $$file as file, getStaticPaths, prerender, $$url as url };
