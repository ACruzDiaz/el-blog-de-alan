import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, e as renderComponent } from './astro/server_76EXaX6B.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_PhRz9g4Y.mjs';
import 'html-escaper';

const $$Astro = createAstro("https://www.my-site.dev");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    text,
    href,
    icon,
    classes,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    "link",
    classes
  ], "class:list")}${spreadAttributes(rest)}> ${icon && icon.side === "left" && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": icon.name, "alt": "Logo", "height": "24", "width": "24" })}`} <span>${text}</span> ${icon && icon.side === "right" && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": icon.name, "alt": "Logo", "height": "24", "width": "24" })}`} </a>`;
}, "C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/components/Link.astro", void 0);

export { $$Link as $ };
