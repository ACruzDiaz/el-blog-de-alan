import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_76EXaX6B.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_page_.CpbbKJT4.css"},{"type":"inline","content":"main[data-astro-cid-zetdm5md]{display:flex;flex-direction:column;padding-bottom:5rem}img[data-astro-cid-zetdm5md]{max-width:400px}p[data-astro-cid-zetdm5md]#notFoundH1{display:flex;flex-direction:column;color:var(--secondary-color);span{color:var(--accent-color);font-size:var(--font-xxxlarge);font-weight:700}.errorMSG{color:var(--secondary-color);font-size:var(--font-large);font-weight:200;margin-top:.5rem}font-size:var(--font-xxlarge);font-weight:400}@media (min-width: 1024px){main[data-astro-cid-zetdm5md]{padding-top:3rem;display:grid;justify-items:center;align-items:center;grid-template-columns:1fr 1fr;grid-template-rows:5fr 1fr;grid-template-areas:\"imagen titulos\" \"link link\"}#notFoundH1[data-astro-cid-zetdm5md]{grid-area:titulos}#notFoundIMG[data-astro-cid-zetdm5md]{grid-area:imagen}.notFoundLINK[data-astro-cid-zetdm5md]{grid-area:link}}\na[data-astro-cid-5ov73oor]{display:flex;flex-direction:column;color:var(--primary-color);align-items:center;height:3rem;width:3rem}.logo[data-astro-cid-fzovzvf5]{font-size:x-large;font-weight:800;padding:0 var(--large-margin);color:var(--primary-color)}#navBar[data-astro-cid-fzovzvf5]{background-color:var(--secondary-color);display:flex;flex-direction:row;height:4.5rem;align-items:center;ul{display:flex;flex-direction:row;gap:var(--medium-margin);margin-left:auto;margin-right:var(--large-margin)}}@media (max-width:500px){header[data-astro-cid-fzovzvf5]{position:relative}#navBar[data-astro-cid-fzovzvf5]{z-index:100;width:100%;position:fixed;bottom:0;justify-content:none;ul{display:flex;margin-left:auto;gap:var(--large-margin);margin-right:auto}}.logo[data-astro-cid-fzovzvf5]{visibility:hidden;width:0;padding:0}}:root{--primary-color: #3E433E;--secondary-color: #E9C7A5;--accent-color: #FD6043;--large-margin: 4rem;--medium-margin:2rem;--small-margin: 1rem;--font-small: .75rem;--font-regular: 1rem;--font-large: 1.25rem;--font-xlarge: 1.5rem;--font-xxlarge: 2rem;--font-xxxlarge: 3rem}body{background-color:var(--primary-color);box-sizing:border-box;position:relative}main{margin:var(--small-margin)}h2{font-size:var(--font-large);color:var(--secondary-color);font-weight:700}h3{font-size:var(--font-regular);color:var(--secondary-color);font-weight:700}.fondoTW{background-color:var(--secondary-color)}.boton{background-color:var(--accent-color);color:var(--secondary-color);padding:1rem;margin-top:1rem;margin-bottom:1rem;font-size:var(--font-large);font-weight:700;text-align:center}@media (max-width:500px){body{margin-bottom:4.5rem}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_page_.CpbbKJT4.css"},{"type":"inline","content":"a[data-astro-cid-5ov73oor]{display:flex;flex-direction:column;color:var(--primary-color);align-items:center;height:3rem;width:3rem}.logo[data-astro-cid-fzovzvf5]{font-size:x-large;font-weight:800;padding:0 var(--large-margin);color:var(--primary-color)}#navBar[data-astro-cid-fzovzvf5]{background-color:var(--secondary-color);display:flex;flex-direction:row;height:4.5rem;align-items:center;ul{display:flex;flex-direction:row;gap:var(--medium-margin);margin-left:auto;margin-right:var(--large-margin)}}@media (max-width:500px){header[data-astro-cid-fzovzvf5]{position:relative}#navBar[data-astro-cid-fzovzvf5]{z-index:100;width:100%;position:fixed;bottom:0;justify-content:none;ul{display:flex;margin-left:auto;gap:var(--large-margin);margin-right:auto}}.logo[data-astro-cid-fzovzvf5]{visibility:hidden;width:0;padding:0}}:root{--primary-color: #3E433E;--secondary-color: #E9C7A5;--accent-color: #FD6043;--large-margin: 4rem;--medium-margin:2rem;--small-margin: 1rem;--font-small: .75rem;--font-regular: 1rem;--font-large: 1.25rem;--font-xlarge: 1.5rem;--font-xxlarge: 2rem;--font-xxxlarge: 3rem}body{background-color:var(--primary-color);box-sizing:border-box;position:relative}main{margin:var(--small-margin)}h2{font-size:var(--font-large);color:var(--secondary-color);font-weight:700}h3{font-size:var(--font-regular);color:var(--secondary-color);font-weight:700}.fondoTW{background-color:var(--secondary-color)}.boton{background-color:var(--accent-color);color:var(--secondary-color);padding:1rem;margin-top:1rem;margin-bottom:1rem;font-size:var(--font-large);font-weight:700;text-align:center}@media (max-width:500px){body{margin-bottom:4.5rem}}\na[data-astro-cid-gfs7335c]{color:var(--primary-color);font-weight:500}.tag[data-astro-cid-gfs7335c]{margin:.25em;border:solid 1px var(--primary-color);border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:var(--secondary-color)}.tagsBoxContainer[data-astro-cid-p6flmzzd]{display:flex;flex-wrap:wrap}h2[data-astro-cid-p6flmzzd]{padding-bottom:1rem}\nfooter[data-astro-cid-sz7xmlte]{margin-top:auto}body{display:flex;flex-direction:column;min-height:100dvh}\n"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"class i extends HTMLElement{constructor(){super(),document.addEventListener(\"DOMContentLoaded\",()=>{const o=document.getElementById(\"sigEvento\"),s=document.getElementById(\"antEvento\"),c=document.getElementById(\"arrowContainerjs\"),a=document.getElementById(\"linkImagen\"),r=document.getElementById(\"imageSrc\"),d=document.getElementById(\"eventoFecha\");let e=0;const t=JSON.parse(this.dataset.message);c.addEventListener(\"click\",n=>{n.target===o?e>=t.length-1?e=0:e++:n.target===s&&(e<=0?e=t.length-1:e--),console.log(t[e]),a.setAttribute(\"href\",t[e].poster),r.setAttribute(\"src\",t[e].poster);const m=new Date(t[e].date).toLocaleString(\"es-US\",{weekday:\"long\",year:\"numeric\",month:\"long\",day:\"numeric\"});d.innerText=m})})}}customElements.define(\"eventico-loco\",i);\n"}],"styles":[{"type":"external","src":"/_astro/_page_.CpbbKJT4.css"},{"type":"inline","content":"a[data-astro-cid-5ov73oor]{display:flex;flex-direction:column;color:var(--primary-color);align-items:center;height:3rem;width:3rem}.logo[data-astro-cid-fzovzvf5]{font-size:x-large;font-weight:800;padding:0 var(--large-margin);color:var(--primary-color)}#navBar[data-astro-cid-fzovzvf5]{background-color:var(--secondary-color);display:flex;flex-direction:row;height:4.5rem;align-items:center;ul{display:flex;flex-direction:row;gap:var(--medium-margin);margin-left:auto;margin-right:var(--large-margin)}}@media (max-width:500px){header[data-astro-cid-fzovzvf5]{position:relative}#navBar[data-astro-cid-fzovzvf5]{z-index:100;width:100%;position:fixed;bottom:0;justify-content:none;ul{display:flex;margin-left:auto;gap:var(--large-margin);margin-right:auto}}.logo[data-astro-cid-fzovzvf5]{visibility:hidden;width:0;padding:0}}:root{--primary-color: #3E433E;--secondary-color: #E9C7A5;--accent-color: #FD6043;--large-margin: 4rem;--medium-margin:2rem;--small-margin: 1rem;--font-small: .75rem;--font-regular: 1rem;--font-large: 1.25rem;--font-xlarge: 1.5rem;--font-xxlarge: 2rem;--font-xxxlarge: 3rem}body{background-color:var(--primary-color);box-sizing:border-box;position:relative}main{margin:var(--small-margin)}h2{font-size:var(--font-large);color:var(--secondary-color);font-weight:700}h3{font-size:var(--font-regular);color:var(--secondary-color);font-weight:700}.fondoTW{background-color:var(--secondary-color)}.boton{background-color:var(--accent-color);color:var(--secondary-color);padding:1rem;margin-top:1rem;margin-bottom:1rem;font-size:var(--font-large);font-weight:700;text-align:center}@media (max-width:500px){body{margin-bottom:4.5rem}}\n.logoClouds[data-astro-cid-4scqkks5]{margin:0 2rem;display:flex;gap:2rem;flex-wrap:wrap;justify-content:space-around;align-items:center;padding:2rem 0;height:50%;a{>img{filter:invert(.94);min-width:48px}}}div[data-astro-cid-ort3yjiy]{background-color:transparent;>h1[data-astro-cid-ort3yjiy]{font-size:large;font-weight:800}}h2[data-astro-cid-guosopyq]{margin-top:2rem;padding-bottom:var(--small-margin);text-align:end}div[data-astro-cid-275l7iml]{display:flex;flex-direction:column;justify-content:center;align-items:center;>a[data-astro-cid-275l7iml]{width:min(100%,320px);height:364px;border:1px dotted var(--accent-color);overflow:hidden;>img[data-astro-cid-275l7iml]{-o-object-fit:cover;object-fit:cover}}>span[data-astro-cid-275l7iml]#eventoFecha{color:var(--secondary-color);text-align:center}}#sigEvento[data-astro-cid-275l7iml],#antEvento[data-astro-cid-275l7iml]{color:var(--primary-color);font-weight:900;margin:1rem 0;font-size:larger;border:1px solid black;background-color:var(--accent-color);padding:.125rem 1rem;border-radius:.25rem;&:hover{background-color:var(--secondary-color)}}.arrowContainer[data-astro-cid-275l7iml]{display:flex;flex-direction:row;width:auto;align-items:center;justify-content:space-evenly;margin-bottom:.5rem}section[data-astro-cid-275l7iml]{background-color:var(--secondary-color)}.categoryContainer[data-astro-cid-kr6pdtjg]{display:flex;justify-content:space-evenly;flex-wrap:wrap;gap:8px}.categoryCard[data-astro-cid-5zyjmdih]{min-width:150px;max-width:200px;height:256px;display:flex;position:relative;flex-basis:100%;overflow:hidden}img[data-astro-cid-5zyjmdih]{z-index:0;-o-object-fit:cover;object-fit:cover;filter:brightness(1)}h3[data-astro-cid-5zyjmdih]{position:absolute;z-index:10;text-align:center;align-self:flex-end;width:100%;overflow-wrap:break-word;font-size:xx-large;padding-bottom:1rem;background-color:#00000040}.enfasis[data-astro-cid-knrymfuv]{font-size:var(--font-xxlarge);line-height:2.25rem;>span[data-astro-cid-knrymfuv]{color:var(--primary-color)}padding:.5rem 0}.presentacionContainer[data-astro-cid-knrymfuv]{background-color:var(--secondary-color);padding:2rem 1rem;height:100%;text-align:center}.transparentBg[data-astro-cid-j7pv25f6]{background-color:transparent}@media (min-width: 1024px){main[data-astro-cid-j7pv25f6]{display:grid;width:90%;max-width:1256px;margin:0 auto;gap:.5rem;grid-template-columns:2.5fr 1fr 1fr;grid-template-rows:1fr 1fr 1fr 1fr;grid-template-areas:\"aside-top aside-top aside-flex\" \"articulos articulos aside-flex\" \"articulos articulos aside-flex\" \"articulos articulos aside-flex\";>#aside-column[data-astro-cid-j7pv25f6]{padding-left:1.5rem;grid-area:aside-flex;#Redes{height:500px;margin-bottom:5rem}}>#aside-top[data-astro-cid-j7pv25f6]{overflow:hidden;grid-area:aside-top;display:flex;#Presentación{width:30%}#Categorias{width:80%;margin-right:.5rem}}>#aside-column[data-astro-cid-j7pv25f6]{grid-area:aside-flex;overflow:hidden}>#articulos-interes[data-astro-cid-j7pv25f6]{grid-area:articulos}}}\narticle[data-astro-cid-e3grugc2]{box-shadow:.5rem .5rem .5rem;div{div{a{color:var(--accent-color);font-weight:500}}h3{color:var(--primary-color)}}}\nfooter[data-astro-cid-sz7xmlte]{margin-top:auto}body{display:flex;flex-direction:column;min-height:100dvh}\n.secondaryBlogCard[data-astro-cid-zfnwmsei]{position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;height:174px;min-width:200px;flex-basis:20%;img{width:100%;height:60%;-o-object-fit:cover;object-fit:cover;margin-bottom:.5rem}span{position:absolute;top:90px;background-color:var(--accent-color);color:var(--secondary-color);padding:.125rem .5rem;font-size:var(--font-small)}h3{overflow-wrap:anywhere;text-overflow:clip}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.my-site.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/blog/[blogs].astro",{"propagation":"none","containsHead":true}],["C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/blog/[...page].astro",{"propagation":"none","containsHead":true}],["C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/tags/[tag].astro",{"propagation":"none","containsHead":true}],["C:/Users/danta/OneDrive/Escritorio/MiPortafolio/book_blog/src/pages/tags/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/[blogs]@_@astro":"pages/blog/_blogs_.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_Bt5XUiVY.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_Coqjh72e.mjs","/src/pages/404.astro":"chunks/404_CONjuuIq.mjs","/src/pages/blog/[blogs].astro":"chunks/_blogs__CNAnk0Sf.mjs","/src/pages/blog/[...page].astro":"chunks/_...page__DTScPDje.mjs","/src/pages/tags/[tag].astro":"chunks/_tag__cpkKYJxQ.mjs","/src/pages/tags/index.astro":"chunks/index_CVP-vcT-.mjs","/src/pages/index.astro":"chunks/index_GJd6Q2aE.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.C8Ls6ENQ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_page_.CpbbKJT4.css","/favicon.svg","/icons/binary.svg","/icons/books.svg","/icons/music.svg","/styles/style.css","/images/404.png","/images/guitarra.jpg","/images/ideas.jpg","/images/literatura.jpg","/images/mas.webp","/images/portada-blog.jpg","/images/programacion.jpg","/images/restaurant.jpg","/images/tennis.jpg"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
