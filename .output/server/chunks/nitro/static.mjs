import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"45b26-jsuoAjem+NJK9Cm3HfKEs7jeSEg\"",
    "mtime": "2022-01-06T09:37:06.394Z",
    "path": "../public/favicon.ico"
  },
  "/_nuxt/Col-6dea6bf6.mjs": {
    "type": "application/javascript",
    "etag": "\"2ce-rTv3yS4ibz7376NTJI3rwI8xnl4\"",
    "mtime": "2022-01-06T09:37:06.418Z",
    "path": "../public/_nuxt/Col-6dea6bf6.mjs"
  },
  "/_nuxt/H2-acdd2885.mjs": {
    "type": "application/javascript",
    "etag": "\"388-mx/7zR8vGIPBFIayEfCaXbdTD0k\"",
    "mtime": "2022-01-06T09:37:06.417Z",
    "path": "../public/_nuxt/H2-acdd2885.mjs"
  },
  "/_nuxt/IntroProgramming-df36718b.mjs": {
    "type": "application/javascript",
    "etag": "\"2f1a-m4ZTIu/F4wM/vEnCT2C3cMmuhC8\"",
    "mtime": "2022-01-06T09:37:06.417Z",
    "path": "../public/_nuxt/IntroProgramming-df36718b.mjs"
  },
  "/_nuxt/ItemRow-171decd7.mjs": {
    "type": "application/javascript",
    "etag": "\"25c-9WYeGel6+lpkbGOdnItQa8FAano\"",
    "mtime": "2022-01-06T09:37:06.416Z",
    "path": "../public/_nuxt/ItemRow-171decd7.mjs"
  },
  "/_nuxt/Items-8b949683.mjs": {
    "type": "application/javascript",
    "etag": "\"49b-siHfYV8WxAybJFYCIsJdKX+cuGk\"",
    "mtime": "2022-01-06T09:37:06.416Z",
    "path": "../public/_nuxt/Items-8b949683.mjs"
  },
  "/_nuxt/LanguagesList-73f17e21.mjs": {
    "type": "application/javascript",
    "etag": "\"124e-Anm7LDjCj8f4y3SLWzPZzkEMgag\"",
    "mtime": "2022-01-06T09:37:06.416Z",
    "path": "../public/_nuxt/LanguagesList-73f17e21.mjs"
  },
  "/_nuxt/MetaHead-3320241c.mjs": {
    "type": "application/javascript",
    "etag": "\"22d-I+AyNekhjH3DnJNamxFzgPSteYs\"",
    "mtime": "2022-01-06T09:37:06.416Z",
    "path": "../public/_nuxt/MetaHead-3320241c.mjs"
  },
  "/_nuxt/NavBar-418e21b8.mjs": {
    "type": "application/javascript",
    "etag": "\"376c-yLxxCLAmzVV8kk2/LCoNy/f9SyM\"",
    "mtime": "2022-01-06T09:37:06.415Z",
    "path": "../public/_nuxt/NavBar-418e21b8.mjs"
  },
  "/_nuxt/Parallax-535acaa6.mjs": {
    "type": "application/javascript",
    "etag": "\"beb-wU4VP972EYh1vR27DcjhUWlqdkM\"",
    "mtime": "2022-01-06T09:37:06.415Z",
    "path": "../public/_nuxt/Parallax-535acaa6.mjs"
  },
  "/_nuxt/Previewable-c0fb9008.mjs": {
    "type": "application/javascript",
    "etag": "\"2cc-3iMJWIfv9jAjDs1iKMPd7P2WAAI\"",
    "mtime": "2022-01-06T09:37:06.414Z",
    "path": "../public/_nuxt/Previewable-c0fb9008.mjs"
  },
  "/_nuxt/Welcome-524f4e12.mjs": {
    "type": "application/javascript",
    "etag": "\"6be-DmKZaIhG4EsoXz6YL2fbBTL4LaA\"",
    "mtime": "2022-01-06T09:37:06.414Z",
    "path": "../public/_nuxt/Welcome-524f4e12.mjs"
  },
  "/_nuxt/_post-79e4c461.mjs": {
    "type": "application/javascript",
    "etag": "\"17c-p8eSyfP0kE/LpVvDYMImXesjaBI\"",
    "mtime": "2022-01-06T09:37:06.414Z",
    "path": "../public/_nuxt/_post-79e4c461.mjs"
  },
  "/_nuxt/about-36bece61.mjs": {
    "type": "application/javascript",
    "etag": "\"ad-2MQi0C+HNXLc/0VGYO1zRAFTinc\"",
    "mtime": "2022-01-06T09:37:06.413Z",
    "path": "../public/_nuxt/about-36bece61.mjs"
  },
  "/_nuxt/bootstrap-92ee0f79.mjs": {
    "type": "application/javascript",
    "etag": "\"20c22-FXVqCUIC3guWXp4w6/Tbg2D//PU\"",
    "mtime": "2022-01-06T09:37:06.406Z",
    "path": "../public/_nuxt/bootstrap-92ee0f79.mjs"
  },
  "/_nuxt/default-d35bee48.mjs": {
    "type": "application/javascript",
    "etag": "\"191-EM7ZbTMD4V7fdiQQd3MShZZmvU8\"",
    "mtime": "2022-01-06T09:37:06.406Z",
    "path": "../public/_nuxt/default-d35bee48.mjs"
  },
  "/_nuxt/entry-bc9ad2d5.mjs": {
    "type": "application/javascript",
    "etag": "\"66-s1xkRvqvK6mmoUhIKoJRQnT5evw\"",
    "mtime": "2022-01-06T09:37:06.405Z",
    "path": "../public/_nuxt/entry-bc9ad2d5.mjs"
  },
  "/_nuxt/index-c07e4f74.mjs": {
    "type": "application/javascript",
    "etag": "\"11c6-dwleWEjEfSrPvCJzcITSCjByxfI\"",
    "mtime": "2022-01-06T09:37:06.403Z",
    "path": "../public/_nuxt/index-c07e4f74.mjs"
  },
  "/_nuxt/index-c7c2f041.mjs": {
    "type": "application/javascript",
    "etag": "\"439-n7QfKrypKNeJJAQRJOlk5rXpsyY\"",
    "mtime": "2022-01-06T09:37:06.403Z",
    "path": "../public/_nuxt/index-c7c2f041.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1821-rb9KoTCaXzVNiTDU7qeLo9yEtQQ\"",
    "mtime": "2022-01-06T09:37:06.402Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/medium-b65a7ace.mjs": {
    "type": "application/javascript",
    "etag": "\"66-19LeL1VVXCP44btN/6EgisfSUjA\"",
    "mtime": "2022-01-06T09:37:06.402Z",
    "path": "../public/_nuxt/medium-b65a7ace.mjs"
  },
  "/_nuxt/nonavbar-b3e44361.mjs": {
    "type": "application/javascript",
    "etag": "\"1e1-S0g660VI2POwgwHxTQC9rp0TmcQ\"",
    "mtime": "2022-01-06T09:37:06.401Z",
    "path": "../public/_nuxt/nonavbar-b3e44361.mjs"
  },
  "/favicon/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": "\"567a-kmodvYXrhKlR6hjaz4W4Hl03SVo\"",
    "mtime": "2022-01-06T09:37:06.399Z",
    "path": "../public/favicon/android-chrome-192x192.png"
  },
  "/favicon/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": "\"4545-5FH0xnzLrgDT8UaYnZkXLqntIj0\"",
    "mtime": "2022-01-06T09:37:06.399Z",
    "path": "../public/favicon/android-chrome-512x512.png"
  },
  "/favicon/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"4d91-0zlZ68euwgZQgzOu+eqgyhDlyTE\"",
    "mtime": "2022-01-06T09:37:06.398Z",
    "path": "../public/favicon/apple-touch-icon.png"
  },
  "/favicon/browserconfig.xml": {
    "type": "application/xml",
    "etag": "\"ff-ui8FNvvr8iLT1LLLq7ztQn4HyH0\"",
    "mtime": "2022-01-06T09:37:06.398Z",
    "path": "../public/favicon/browserconfig.xml"
  },
  "/favicon/favicon-144x144.png": {
    "type": "image/png",
    "etag": "\"34c4-YcoKQV7vd02xzwvhse4d2DW3z7A\"",
    "mtime": "2022-01-06T09:37:06.398Z",
    "path": "../public/favicon/favicon-144x144.png"
  },
  "/favicon/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"4f9-4G3oozaU0f2yBmA8+XYvm1OEIbo\"",
    "mtime": "2022-01-06T09:37:06.397Z",
    "path": "../public/favicon/favicon-16x16.png"
  },
  "/favicon/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"990-pUfBYxtm9FkmxC2Nq/2UC6ZEdu8\"",
    "mtime": "2022-01-06T09:37:06.397Z",
    "path": "../public/favicon/favicon-32x32.png"
  },
  "/favicon/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"45b26-jsuoAjem+NJK9Cm3HfKEs7jeSEg\"",
    "mtime": "2022-01-06T09:37:06.396Z",
    "path": "../public/favicon/favicon.ico"
  },
  "/favicon/mstile-150x150.png": {
    "type": "image/png",
    "etag": "\"3bc9-pn1Ja+SU5CSrmwjvrqzs+zjB+5U\"",
    "mtime": "2022-01-06T09:37:06.395Z",
    "path": "../public/favicon/mstile-150x150.png"
  },
  "/favicon/safari-pinned-tab.svg": {
    "type": "image/svg+xml",
    "etag": "\"4b10-S58u+kJyrdH+KDcUoNJN5FxTqZU\"",
    "mtime": "2022-01-06T09:37:06.395Z",
    "path": "../public/favicon/safari-pinned-tab.svg"
  },
  "/icon/studio.png": {
    "type": "image/png",
    "etag": "\"62c2e-74h3UxoRtv8Oo1c6EzAdiMdluKk\"",
    "mtime": "2022-01-06T09:37:06.392Z",
    "path": "../public/icon/studio.png"
  },
  "/icon/studio.webp": {
    "type": "image/webp",
    "etag": "\"6910-mcgUgC4C6cB3laGIRS09NwWuLVg\"",
    "mtime": "2022-01-06T09:37:06.391Z",
    "path": "../public/icon/studio.webp"
  },
  "/icon/xcode.png": {
    "type": "image/png",
    "etag": "\"147cb-LDaZ7z7zNPdvAfmQ6S+eJAgLTAE\"",
    "mtime": "2022-01-06T09:37:06.390Z",
    "path": "../public/icon/xcode.png"
  },
  "/icon/xcode.webp": {
    "type": "image/webp",
    "etag": "\"2e0a-5xHZg7tFZVndRjOSVuSo9r4BxnE\"",
    "mtime": "2022-01-06T09:37:06.390Z",
    "path": "../public/icon/xcode.webp"
  },
  "/ogp/twitter.png": {
    "type": "image/png",
    "etag": "\"10cce-gS2RlaNVZ4Doh4tt9nyMaWLGazk\"",
    "mtime": "2022-01-06T09:37:06.387Z",
    "path": "../public/ogp/twitter.png"
  },
  "/ogp/twitter.webp": {
    "type": "image/webp",
    "etag": "\"36ae-F6BKjAnmEh1/FFzcrzu3gBh9qUY\"",
    "mtime": "2022-01-06T09:37:06.387Z",
    "path": "../public/ogp/twitter.webp"
  },
  "/_nuxt/assets/Col.34029456.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-TcHuuZRZJ0zqLchZscc52cW4TA0\"",
    "mtime": "2022-01-06T09:37:06.413Z",
    "path": "../public/_nuxt/assets/Col.34029456.css"
  },
  "/_nuxt/assets/IntroProgramming.a432d504.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c85-ECse64gclDyWPkTJanDXQ/BCKnM\"",
    "mtime": "2022-01-06T09:37:06.412Z",
    "path": "../public/_nuxt/assets/IntroProgramming.a432d504.css"
  },
  "/_nuxt/assets/LanguagesList.0575777d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"171-id1usrqrnnwFmSvBm44HRLI6zBc\"",
    "mtime": "2022-01-06T09:37:06.412Z",
    "path": "../public/_nuxt/assets/LanguagesList.0575777d.css"
  },
  "/_nuxt/assets/Welcome.fff5d52b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6b7-OvbJWh2fg26t2XO6PgaDSh9SVQs\"",
    "mtime": "2022-01-06T09:37:06.412Z",
    "path": "../public/_nuxt/assets/Welcome.fff5d52b.css"
  },
  "/_nuxt/assets/bootstrap.45e9f8fb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d40-oJGk8ZcRx4fWB0HcCwAc/XSIuIU\"",
    "mtime": "2022-01-06T09:37:06.411Z",
    "path": "../public/_nuxt/assets/bootstrap.45e9f8fb.css"
  },
  "/_nuxt/assets/carousel.238db1ff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"688-WkfDIpkI+Iaub6cAmZw6W6V3564\"",
    "mtime": "2022-01-06T09:37:06.411Z",
    "path": "../public/_nuxt/assets/carousel.238db1ff.css"
  },
  "/_nuxt/assets/full-type2.939c16a1.svg": {
    "type": "image/svg+xml",
    "etag": "\"9301-KrzXZZIBF84czgSDWNWpOPd2tkk\"",
    "mtime": "2022-01-06T09:37:06.411Z",
    "path": "../public/_nuxt/assets/full-type2.939c16a1.svg"
  },
  "/_nuxt/assets/js.f491ab55.webp": {
    "type": "image/webp",
    "etag": "\"10fe8-pd+bmzCm2fIP8rl9AbDZpRLWi7w\"",
    "mtime": "2022-01-06T09:37:06.410Z",
    "path": "../public/_nuxt/assets/js.f491ab55.webp"
  },
  "/_nuxt/assets/medium.479bb130.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d1c-ubEG64Qj3fGh2RCe6ckvzuRhZug\"",
    "mtime": "2022-01-06T09:37:06.410Z",
    "path": "../public/_nuxt/assets/medium.479bb130.svg"
  },
  "/_nuxt/assets/nuxt.df36685c.webp": {
    "type": "image/webp",
    "etag": "\"1614c-0WrdQzpvX99fJukIO1TXC9HxEh4\"",
    "mtime": "2022-01-06T09:37:06.409Z",
    "path": "../public/_nuxt/assets/nuxt.df36685c.webp"
  },
  "/_nuxt/assets/pc.cacd61ab.webp": {
    "type": "image/webp",
    "etag": "\"843e-uzt7IweXFp6b1QnoLM5XpNg4PjI\"",
    "mtime": "2022-01-06T09:37:06.409Z",
    "path": "../public/_nuxt/assets/pc.cacd61ab.webp"
  },
  "/_nuxt/assets/python.d0102963.webp": {
    "type": "image/webp",
    "etag": "\"11d98-2jGZmZGS+ieF/RTkcYYpvyZxh20\"",
    "mtime": "2022-01-06T09:37:06.408Z",
    "path": "../public/_nuxt/assets/python.d0102963.webp"
  },
  "/_nuxt/assets/ribbon-lg.eb452e64.svg": {
    "type": "image/svg+xml",
    "etag": "\"344-ExLQxJT0g+5ufKBGelZFJJU/OZM\"",
    "mtime": "2022-01-06T09:37:06.408Z",
    "path": "../public/_nuxt/assets/ribbon-lg.eb452e64.svg"
  },
  "/_nuxt/assets/ribbon-sm.7ea7e094.svg": {
    "type": "image/svg+xml",
    "etag": "\"4d2-ybkDShW1wF+qlyx3vKtknutZ+HE\"",
    "mtime": "2022-01-06T09:37:06.408Z",
    "path": "../public/_nuxt/assets/ribbon-sm.7ea7e094.svg"
  },
  "/_nuxt/assets/xcode.f61b938f.webp": {
    "type": "image/webp",
    "etag": "\"19020-laAsG9HS2jRbrMIjTGf1+85Bkls\"",
    "mtime": "2022-01-06T09:37:06.407Z",
    "path": "../public/_nuxt/assets/xcode.f61b938f.webp"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/Users/shuteiei/Documents/Nuxt/comb-web/dist" + "/" + "1641461821";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
