/* empty css                          */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, c as createAstro, f as renderSlot, e as renderComponent } from './astro/server_76EXaX6B.mjs';
import 'kleur/colors';
import 'html-escaper';
import { f as fetchApi, $ as $$MainLayout } from './strapi_COWkrDQG.mjs';
import 'clsx';
/* empty css                         */
import { $ as $$BlogCard } from './BlogCard_unHdrZ33.mjs';
import { $ as $$Link } from './Link_DFb5lR69.mjs';
import { $ as $$SecondaryCardContainer } from './SecondaryCardContainer_DI20f3f1.mjs';

const $$LogoClouds = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class=" logoClouds" data-astro-cid-4scqkks5> <a href="#" class="" data-astro-cid-4scqkks5> <img class=""${addAttribute("/src/social_icons/brand-soundcloud.svg", "src")} alt="soundcloud" width="48" height="48" data-astro-cid-4scqkks5> </a> <a class="" href="#" data-astro-cid-4scqkks5> <img class=""${addAttribute("/src/social_icons/brand-youtube.svg", "src")} alt="youtube" width="48" height="48" data-astro-cid-4scqkks5> </a> <a href="#" class="" data-astro-cid-4scqkks5> <img class=""${addAttribute("/src/social_icons/brand-facebook.svg", "src")} alt="facebook" width="48" height="48" data-astro-cid-4scqkks5> </a> <a class="" href="#" data-astro-cid-4scqkks5> <img class=""${addAttribute("/src/social_icons/brand-instagram.svg", "src")} alt="instagram" width="48" height="48" data-astro-cid-4scqkks5> </a> <a class="" href="#" data-astro-cid-4scqkks5> <img class=""${addAttribute("/src/social_icons/brand-reddit.svg", "src")} alt="reddit" width="48" height="48" data-astro-cid-4scqkks5> </a> </div> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/LogoClouds.astro", void 0);

const $$SoundCloudList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-ort3yjiy> <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1852110555&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" data-astro-cid-ort3yjiy></iframe> <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;" data-astro-cid-ort3yjiy> <a href="https://soundcloud.com/alan-cruz-881716211" title="Alan Cruz" target="_blank" style="color: #cccccc; text-decoration: none;" data-astro-cid-ort3yjiy>Alan Cruz</a> · <a href="https://soundcloud.com/alan-cruz-881716211/sets/alan-electro-playlist" title="Alan Electro Playlist" target="_blank" style="color: #cccccc; text-decoration: none;" data-astro-cid-ort3yjiy>Alan Electro Playlist</a></div> </div> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/SoundCloudList.astro", void 0);

const $$Astro$2 = createAstro("https://www.my-site.dev");
const $$Seccion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Seccion;
  const { sectionTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(sectionTitle, "id")} data-astro-cid-guosopyq> <h2 data-astro-cid-guosopyq>${sectionTitle}</h2> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/Seccion.astro", void 0);

const $$Astro$1 = createAstro("https://www.my-site.dev");
const $$Eventos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Eventos;
  const eventos = await fetchApi({
    endpoint: "eventos?populate=poster",
    // el tipo de contenido a obtener
    wrappedByKey: "data"
    // la clave para descomponer la respuesta
  });
  let fechaActual = (/* @__PURE__ */ new Date()).getTime();
  const { avoidShowOutdated = false } = Astro2.props;
  const eventosFiltered = eventos.filter(
    (evento) => new Date(evento.attributes.fechaEvento).getTime() > fechaActual * avoidShowOutdated
  );
  const imageList = eventosFiltered.map((evento) => {
    return {
      poster: `${"http://localhost:1337"}` + evento.attributes.poster.data.attributes.formats.small.url,
      date: evento.attributes.fechaEvento
    };
  });
  const imageListJson = JSON.stringify(imageList);
  return renderTemplate`${renderComponent($$result, "eventico-loco", "eventico-loco", { "data-message": imageListJson, "data-astro-cid-275l7iml": true })} ${maybeRenderHead()}<div data-astro-cid-275l7iml> <a id="linkImagen"${addAttribute(imageList[0].poster, "href")} data-astro-cid-275l7iml> <img id="imageSrc" alt="poster"${addAttribute(imageList[0].poster, "src")} data-astro-cid-275l7iml> </a> <span id="eventoFecha" data-astro-cid-275l7iml> ${new Date(eventos[0].attributes.fechaEvento).toLocaleString("es-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </span> <div class="arrowContainer" id="arrowContainerjs" data-astro-cid-275l7iml> <button id="antEvento" type="button" data-astro-cid-275l7iml>${"<"}</button> <button id="sigEvento" type="button" data-astro-cid-275l7iml>${">"}</button> </div> </div>  `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/Eventos.astro", void 0);

const $$CategoryContainer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="categoryContainer" data-astro-cid-kr6pdtjg> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/categories/CategoryContainer.astro", void 0);

const $$Astro = createAstro("https://www.my-site.dev");
const $$CategoryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryCard;
  const { title, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute("tags/" + title.toLowerCase(), "href")} class="categoryCard" data-astro-cid-5zyjmdih> <img${addAttribute(image, "src")}${addAttribute("categoria " + title, "alt")} data-astro-cid-5zyjmdih> <h3 data-astro-cid-5zyjmdih>${title}</h3> </a> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/categories/CategoryCard.astro", void 0);

const categories = [
  {
    title: "FILOSOFÍA",
    image: "/images/ideas.jpg"
  },
  {
    title: "LITERATURA",
    image: "/images/literatura.jpg"
  },
  {
    title: "RESTAURANTES",
    image: "/images/restaurant.jpg"
  },
  {
    title: "GUITARRA",
    image: "/images/guitarra.jpg"
  },
  {
    title: "TENIS",
    image: "/images/tennis.jpg"
  },
  {
    title: "PROGRAMACIÓN",
    image: "/images/programacion.jpg"
  }
];

const $$PresentationCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img src="/images/portada-blog.jpg" alt="" class="" data-astro-cid-knrymfuv> <div class="presentacionContainer" data-astro-cid-knrymfuv> <span data-astro-cid-knrymfuv>¡Hola! Te saluda</span> <p class="enfasis" data-astro-cid-knrymfuv>Tu amigo digital <span class="font-extrabold" data-astro-cid-knrymfuv>Alan Cruz</span></p> <p data-astro-cid-knrymfuv>
🧑‍💻Y te doy la bienvenida a mi espacio digital, en donde encontraras recomendaciones de musica, libros y peliculas. Tambien tengo una sección de proyectos y por supuesto puedes contactarme en mis redes sociales.✌️
</p> </div> `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/PresentationCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const max = 500;
  const min = 1500;
  const RandomNumber = Math.floor(Math.random() * (max - min) + min);
  var today = /* @__PURE__ */ new Date();
  today.toLocaleDateString("en-US");
  const articles = await fetchApi({
    endpoint: "articles",
    // el tipo de contenido a obtener
    wrappedByKey: "data"
    // la clave para descomponer la respuesta
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "El blog de Alan", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <aside id="aside-top" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Seccion", $$Seccion, { "sectionTitle": "Categorias", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CategoryContainer", $$CategoryContainer, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${categories.map((categoria) => renderTemplate`${renderComponent($$result4, "CategoryCard", $$CategoryCard, { "title": categoria.title, "image": categoria.image, "data-astro-cid-j7pv25f6": true })}`)}` })} ` })} ${renderComponent($$result2, "Seccion", $$Seccion, { "sectionTitle": "Presentaci\xF3n", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PresentationCard", $$PresentationCard, { "data-astro-cid-j7pv25f6": true })} ` })} </aside> <aside id="aside-column" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Seccion", $$Seccion, { "sectionTitle": "Random", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SecondaryCardContainer", $$SecondaryCardContainer, { "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "Seccion", $$Seccion, { "sectionTitle": "Eventos", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Eventos", $$Eventos, { "avoidShowOutdated": false, "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "Seccion", $$Seccion, { "sectionTitle": "Musica", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SoundCloudList", $$SoundCloudList, { "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "Seccion", $$Seccion, { "sectionTitle": "Redes", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "LogoClouds", $$LogoClouds, { "data-astro-cid-j7pv25f6": true })} ` })} </aside> <section id="articulos-interes" class="transparentBg ml-auto py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Post</h2> <div class=" grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3" data-astro-cid-j7pv25f6> ${articles.map((article) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": article.attributes.title, "category": article.attributes.tags.split(","), "image": article.attributes.coverurl, "date": new Date(article.attributes.publishedAt).toDateString(), "views": RandomNumber, "url_post": "blog/" + article.attributes.slug, "from": "tags/", "data-astro-cid-j7pv25f6": true })}`).slice(0, 6)} ${renderComponent($$result2, "Link", $$Link, { "text": "Ver m\xE1s", "href": "/blog", "classes": "boton verMas", "data-astro-cid-j7pv25f6": true })} </div> </section> </main> ` })} `;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/index.astro", void 0);

const $$file = "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
