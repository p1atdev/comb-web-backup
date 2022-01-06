import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"45b26-jsuoAjem+NJK9Cm3HfKEs7jeSEg\"",
    "mtime": "2022-01-06T11:35:43.925Z",
    "path": "../public/favicon.ico"
  },
  "/_nuxt/Col-e59644d5.mjs": {
    "type": "application/javascript",
    "etag": "\"2ce-jxFo6aUKXED4AyqChG0eErUamdI\"",
    "mtime": "2022-01-06T11:35:43.972Z",
    "path": "../public/_nuxt/Col-e59644d5.mjs"
  },
  "/_nuxt/H2-16cfdab6.mjs": {
    "type": "application/javascript",
    "etag": "\"388-c9StskBbADgY5dtN+eX3gpkma0M\"",
    "mtime": "2022-01-06T11:35:43.972Z",
    "path": "../public/_nuxt/H2-16cfdab6.mjs"
  },
  "/_nuxt/IntroProgramming-8511ddcb.mjs": {
    "type": "application/javascript",
    "etag": "\"2f1a-7cDBTdrylWm9uEM26nVmde4WKZo\"",
    "mtime": "2022-01-06T11:35:43.972Z",
    "path": "../public/_nuxt/IntroProgramming-8511ddcb.mjs"
  },
  "/_nuxt/ItemRow-651c60fb.mjs": {
    "type": "application/javascript",
    "etag": "\"25c-SysV6snuu6/Uh2/OmuIiZJyO7x4\"",
    "mtime": "2022-01-06T11:35:43.971Z",
    "path": "../public/_nuxt/ItemRow-651c60fb.mjs"
  },
  "/_nuxt/Items-7b82209d.mjs": {
    "type": "application/javascript",
    "etag": "\"49b-uZUQEyGiAASA+M2PE1En0ZOy0fk\"",
    "mtime": "2022-01-06T11:35:43.971Z",
    "path": "../public/_nuxt/Items-7b82209d.mjs"
  },
  "/_nuxt/LanguagesList-2e617b65.mjs": {
    "type": "application/javascript",
    "etag": "\"124e-IsTuIEqBruJYnlLndTJmjPSf5HI\"",
    "mtime": "2022-01-06T11:35:43.970Z",
    "path": "../public/_nuxt/LanguagesList-2e617b65.mjs"
  },
  "/_nuxt/MetaHead-279ae1ea.mjs": {
    "type": "application/javascript",
    "etag": "\"2b8-LZXfMQPeSalUOpZJ0Gaoc+sSXjk\"",
    "mtime": "2022-01-06T11:35:43.970Z",
    "path": "../public/_nuxt/MetaHead-279ae1ea.mjs"
  },
  "/_nuxt/NavBar-83767cee.mjs": {
    "type": "application/javascript",
    "etag": "\"aa2-gMc9pNbvfqPfms/hWnFiS9RVWqQ\"",
    "mtime": "2022-01-06T11:35:43.970Z",
    "path": "../public/_nuxt/NavBar-83767cee.mjs"
  },
  "/_nuxt/Parallax-4b393d65.mjs": {
    "type": "application/javascript",
    "etag": "\"c36-KnFw0sEmCbHbvJfuYnhatbMLHjE\"",
    "mtime": "2022-01-06T11:35:43.969Z",
    "path": "../public/_nuxt/Parallax-4b393d65.mjs"
  },
  "/_nuxt/Previewable-d21a85fa.mjs": {
    "type": "application/javascript",
    "etag": "\"2c7-IjeZnVF0qBTYj1tTvxP14K/XGZA\"",
    "mtime": "2022-01-06T11:35:43.969Z",
    "path": "../public/_nuxt/Previewable-d21a85fa.mjs"
  },
  "/_nuxt/Welcome-cc5563a4.mjs": {
    "type": "application/javascript",
    "etag": "\"912-aR51L1Pm9rkEZ/AWSqnEau6lh5c\"",
    "mtime": "2022-01-06T11:35:43.969Z",
    "path": "../public/_nuxt/Welcome-cc5563a4.mjs"
  },
  "/_nuxt/_post-b7df827f.mjs": {
    "type": "application/javascript",
    "etag": "\"17c-1bJJPt3zWxvmeyKOIrIOuo2/FoU\"",
    "mtime": "2022-01-06T11:35:43.968Z",
    "path": "../public/_nuxt/_post-b7df827f.mjs"
  },
  "/_nuxt/about-eda8b60e.mjs": {
    "type": "application/javascript",
    "etag": "\"1ca-eMgvHAL5abnf1UM8O/wuvxq7H6s\"",
    "mtime": "2022-01-06T11:35:43.968Z",
    "path": "../public/_nuxt/about-eda8b60e.mjs"
  },
  "/_nuxt/bootstrap-6a8c093e.mjs": {
    "type": "application/javascript",
    "etag": "\"20c4e-+dWjg+x68lV7bKMwEMLE2WYN1gs\"",
    "mtime": "2022-01-06T11:35:43.960Z",
    "path": "../public/_nuxt/bootstrap-6a8c093e.mjs"
  },
  "/_nuxt/default-81d1dd0e.mjs": {
    "type": "application/javascript",
    "etag": "\"191-QfTWHa5dDCNx1lbqro5mAJCRO2U\"",
    "mtime": "2022-01-06T11:35:43.960Z",
    "path": "../public/_nuxt/default-81d1dd0e.mjs"
  },
  "/_nuxt/entry-e0adf92a.mjs": {
    "type": "application/javascript",
    "etag": "\"66-mwZ+uTR5aNJmJAPrYDYwGnli5pU\"",
    "mtime": "2022-01-06T11:35:43.959Z",
    "path": "../public/_nuxt/entry-e0adf92a.mjs"
  },
  "/_nuxt/index-2ac50d27.mjs": {
    "type": "application/javascript",
    "etag": "\"11c6-5OIhi7Af+bOdwN/Hr7n/UJTcqtk\"",
    "mtime": "2022-01-06T11:35:43.957Z",
    "path": "../public/_nuxt/index-2ac50d27.mjs"
  },
  "/_nuxt/index-f9526b0f.mjs": {
    "type": "application/javascript",
    "etag": "\"439-ZgKkAF4r+8+bQye4I866lw0mcCk\"",
    "mtime": "2022-01-06T11:35:43.956Z",
    "path": "../public/_nuxt/index-f9526b0f.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1842-4CqyC4iq0LHKbKiDXMoHnoafHVU\"",
    "mtime": "2022-01-06T11:35:43.956Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/medium-b65a7ace.mjs": {
    "type": "application/javascript",
    "etag": "\"66-19LeL1VVXCP44btN/6EgisfSUjA\"",
    "mtime": "2022-01-06T11:35:43.955Z",
    "path": "../public/_nuxt/medium-b65a7ace.mjs"
  },
  "/_nuxt/nonavbar-2e5eb904.mjs": {
    "type": "application/javascript",
    "etag": "\"1e6-OIHqWWw9jOvXJY6wII9yQqylZPY\"",
    "mtime": "2022-01-06T11:35:43.955Z",
    "path": "../public/_nuxt/nonavbar-2e5eb904.mjs"
  },
  "/favicon/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": "\"567a-kmodvYXrhKlR6hjaz4W4Hl03SVo\"",
    "mtime": "2022-01-06T11:35:43.933Z",
    "path": "../public/favicon/android-chrome-192x192.png"
  },
  "/favicon/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": "\"4545-5FH0xnzLrgDT8UaYnZkXLqntIj0\"",
    "mtime": "2022-01-06T11:35:43.933Z",
    "path": "../public/favicon/android-chrome-512x512.png"
  },
  "/favicon/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"4d91-0zlZ68euwgZQgzOu+eqgyhDlyTE\"",
    "mtime": "2022-01-06T11:35:43.932Z",
    "path": "../public/favicon/apple-touch-icon.png"
  },
  "/favicon/browserconfig.xml": {
    "type": "application/xml",
    "etag": "\"ff-ui8FNvvr8iLT1LLLq7ztQn4HyH0\"",
    "mtime": "2022-01-06T11:35:43.931Z",
    "path": "../public/favicon/browserconfig.xml"
  },
  "/favicon/favicon-144x144.png": {
    "type": "image/png",
    "etag": "\"34c4-YcoKQV7vd02xzwvhse4d2DW3z7A\"",
    "mtime": "2022-01-06T11:35:43.930Z",
    "path": "../public/favicon/favicon-144x144.png"
  },
  "/favicon/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"4f9-4G3oozaU0f2yBmA8+XYvm1OEIbo\"",
    "mtime": "2022-01-06T11:35:43.929Z",
    "path": "../public/favicon/favicon-16x16.png"
  },
  "/favicon/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"990-pUfBYxtm9FkmxC2Nq/2UC6ZEdu8\"",
    "mtime": "2022-01-06T11:35:43.928Z",
    "path": "../public/favicon/favicon-32x32.png"
  },
  "/favicon/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"45b26-jsuoAjem+NJK9Cm3HfKEs7jeSEg\"",
    "mtime": "2022-01-06T11:35:43.928Z",
    "path": "../public/favicon/favicon.ico"
  },
  "/favicon/mstile-150x150.png": {
    "type": "image/png",
    "etag": "\"3bc9-pn1Ja+SU5CSrmwjvrqzs+zjB+5U\"",
    "mtime": "2022-01-06T11:35:43.927Z",
    "path": "../public/favicon/mstile-150x150.png"
  },
  "/favicon/safari-pinned-tab.svg": {
    "type": "image/svg+xml",
    "etag": "\"4b10-S58u+kJyrdH+KDcUoNJN5FxTqZU\"",
    "mtime": "2022-01-06T11:35:43.926Z",
    "path": "../public/favicon/safari-pinned-tab.svg"
  },
  "/icon/studio.png": {
    "type": "image/png",
    "etag": "\"62c2e-74h3UxoRtv8Oo1c6EzAdiMdluKk\"",
    "mtime": "2022-01-06T11:35:43.923Z",
    "path": "../public/icon/studio.png"
  },
  "/icon/studio.webp": {
    "type": "image/webp",
    "etag": "\"6910-mcgUgC4C6cB3laGIRS09NwWuLVg\"",
    "mtime": "2022-01-06T11:35:43.922Z",
    "path": "../public/icon/studio.webp"
  },
  "/icon/xcode.png": {
    "type": "image/png",
    "etag": "\"147cb-LDaZ7z7zNPdvAfmQ6S+eJAgLTAE\"",
    "mtime": "2022-01-06T11:35:43.921Z",
    "path": "../public/icon/xcode.png"
  },
  "/icon/xcode.webp": {
    "type": "image/webp",
    "etag": "\"2e0a-5xHZg7tFZVndRjOSVuSo9r4BxnE\"",
    "mtime": "2022-01-06T11:35:43.920Z",
    "path": "../public/icon/xcode.webp"
  },
  "/ogp/twitter.png": {
    "type": "image/png",
    "etag": "\"10cce-gS2RlaNVZ4Doh4tt9nyMaWLGazk\"",
    "mtime": "2022-01-06T11:35:43.918Z",
    "path": "../public/ogp/twitter.png"
  },
  "/ogp/twitter.webp": {
    "type": "image/webp",
    "etag": "\"36ae-F6BKjAnmEh1/FFzcrzu3gBh9qUY\"",
    "mtime": "2022-01-06T11:35:43.917Z",
    "path": "../public/ogp/twitter.webp"
  },
  "/_nuxt/assets/Col.34029456.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-TcHuuZRZJ0zqLchZscc52cW4TA0\"",
    "mtime": "2022-01-06T11:35:43.967Z",
    "path": "../public/_nuxt/assets/Col.34029456.css"
  },
  "/_nuxt/assets/IntroProgramming.73ac45c3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3af7-7F9E1eY4FcUd/y/FH3O3isjV46s\"",
    "mtime": "2022-01-06T11:35:43.967Z",
    "path": "../public/_nuxt/assets/IntroProgramming.73ac45c3.css"
  },
  "/_nuxt/assets/LanguagesList.0575777d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"171-id1usrqrnnwFmSvBm44HRLI6zBc\"",
    "mtime": "2022-01-06T11:35:43.967Z",
    "path": "../public/_nuxt/assets/LanguagesList.0575777d.css"
  },
  "/_nuxt/assets/Welcome.c041edaf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6b7-KD3YxwqeCn8+I1PO9FNXc8eGwwQ\"",
    "mtime": "2022-01-06T11:35:43.966Z",
    "path": "../public/_nuxt/assets/Welcome.c041edaf.css"
  },
  "/_nuxt/assets/bootstrap.c1b79232.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2bf6-3KhLoDzY3WRnW+aD5B8wc3aL3fc\"",
    "mtime": "2022-01-06T11:35:43.966Z",
    "path": "../public/_nuxt/assets/bootstrap.c1b79232.css"
  },
  "/_nuxt/assets/carousel.238db1ff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"688-WkfDIpkI+Iaub6cAmZw6W6V3564\"",
    "mtime": "2022-01-06T11:35:43.965Z",
    "path": "../public/_nuxt/assets/carousel.238db1ff.css"
  },
  "/_nuxt/assets/full-type2.939c16a1.svg": {
    "type": "image/svg+xml",
    "etag": "\"9301-KrzXZZIBF84czgSDWNWpOPd2tkk\"",
    "mtime": "2022-01-06T11:35:43.965Z",
    "path": "../public/_nuxt/assets/full-type2.939c16a1.svg"
  },
  "/_nuxt/assets/js.f491ab55.webp": {
    "type": "image/webp",
    "etag": "\"10fe8-pd+bmzCm2fIP8rl9AbDZpRLWi7w\"",
    "mtime": "2022-01-06T11:35:43.965Z",
    "path": "../public/_nuxt/assets/js.f491ab55.webp"
  },
  "/_nuxt/assets/medium.479bb130.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d1c-ubEG64Qj3fGh2RCe6ckvzuRhZug\"",
    "mtime": "2022-01-06T11:35:43.964Z",
    "path": "../public/_nuxt/assets/medium.479bb130.svg"
  },
  "/_nuxt/assets/nuxt.df36685c.webp": {
    "type": "image/webp",
    "etag": "\"1614c-0WrdQzpvX99fJukIO1TXC9HxEh4\"",
    "mtime": "2022-01-06T11:35:43.964Z",
    "path": "../public/_nuxt/assets/nuxt.df36685c.webp"
  },
  "/_nuxt/assets/pc.cacd61ab.webp": {
    "type": "image/webp",
    "etag": "\"843e-uzt7IweXFp6b1QnoLM5XpNg4PjI\"",
    "mtime": "2022-01-06T11:35:43.963Z",
    "path": "../public/_nuxt/assets/pc.cacd61ab.webp"
  },
  "/_nuxt/assets/python.d0102963.webp": {
    "type": "image/webp",
    "etag": "\"11d98-2jGZmZGS+ieF/RTkcYYpvyZxh20\"",
    "mtime": "2022-01-06T11:35:43.962Z",
    "path": "../public/_nuxt/assets/python.d0102963.webp"
  },
  "/_nuxt/assets/ribbon-lg.eb452e64.svg": {
    "type": "image/svg+xml",
    "etag": "\"344-ExLQxJT0g+5ufKBGelZFJJU/OZM\"",
    "mtime": "2022-01-06T11:35:43.962Z",
    "path": "../public/_nuxt/assets/ribbon-lg.eb452e64.svg"
  },
  "/_nuxt/assets/ribbon-sm.7ea7e094.svg": {
    "type": "image/svg+xml",
    "etag": "\"4d2-ybkDShW1wF+qlyx3vKtknutZ+HE\"",
    "mtime": "2022-01-06T11:35:43.962Z",
    "path": "../public/_nuxt/assets/ribbon-sm.7ea7e094.svg"
  },
  "/_nuxt/assets/xcode.f61b938f.webp": {
    "type": "image/webp",
    "etag": "\"19020-laAsG9HS2jRbrMIjTGf1+85Bkls\"",
    "mtime": "2022-01-06T11:35:43.961Z",
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
const STATIC_ASSETS_BASE = "/Users/shuteiei/Documents/Nuxt/comb-web/dist" + "/" + "1641468939";
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
