import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"45b26-jsuoAjem+NJK9Cm3HfKEs7jeSEg\"",
    "mtime": "2022-01-06T13:23:21.081Z",
    "path": "../public/favicon.ico"
  },
  "/_nuxt/Col-2e88a71b.mjs": {
    "type": "application/javascript",
    "etag": "\"2ce-UyszD/SPbjcblDetsXEpA1+/uqw\"",
    "mtime": "2022-01-06T13:23:21.144Z",
    "path": "../public/_nuxt/Col-2e88a71b.mjs"
  },
  "/_nuxt/H2-1d8c58ed.mjs": {
    "type": "application/javascript",
    "etag": "\"388-yzryRkEklSxdP/nnUUO4axVcIP8\"",
    "mtime": "2022-01-06T13:23:21.144Z",
    "path": "../public/_nuxt/H2-1d8c58ed.mjs"
  },
  "/_nuxt/IntroProgramming-bed8ad21.mjs": {
    "type": "application/javascript",
    "etag": "\"2f1a-iF3xzkFOz8i3Fymz3Bj8EqViSXw\"",
    "mtime": "2022-01-06T13:23:21.143Z",
    "path": "../public/_nuxt/IntroProgramming-bed8ad21.mjs"
  },
  "/_nuxt/ItemRow-c2bc348c.mjs": {
    "type": "application/javascript",
    "etag": "\"25c-lPD1gccouuFTeOE18qc7MlkjHv4\"",
    "mtime": "2022-01-06T13:23:21.142Z",
    "path": "../public/_nuxt/ItemRow-c2bc348c.mjs"
  },
  "/_nuxt/Items-8e6ba0d6.mjs": {
    "type": "application/javascript",
    "etag": "\"49b-Iti+u/nMdi3bSV77uZlRgtCKqus\"",
    "mtime": "2022-01-06T13:23:21.142Z",
    "path": "../public/_nuxt/Items-8e6ba0d6.mjs"
  },
  "/_nuxt/LanguagesList-8b08ebab.mjs": {
    "type": "application/javascript",
    "etag": "\"124e-Ero7jPs5B4ZN+/Gj/e0dfpcMOko\"",
    "mtime": "2022-01-06T13:23:21.141Z",
    "path": "../public/_nuxt/LanguagesList-8b08ebab.mjs"
  },
  "/_nuxt/MetaHead-173308e7.mjs": {
    "type": "application/javascript",
    "etag": "\"2b8-KwAtQK5FgRPQmg/hPo0sfsR+Odg\"",
    "mtime": "2022-01-06T13:23:21.141Z",
    "path": "../public/_nuxt/MetaHead-173308e7.mjs"
  },
  "/_nuxt/NavBar-8489ac1c.mjs": {
    "type": "application/javascript",
    "etag": "\"aa2-bZ7odDInLLDpkcoZYX8VvVpZ2WY\"",
    "mtime": "2022-01-06T13:23:21.139Z",
    "path": "../public/_nuxt/NavBar-8489ac1c.mjs"
  },
  "/_nuxt/Parallax-904ef780.mjs": {
    "type": "application/javascript",
    "etag": "\"c36-ZFmlcM5Wy5i6AkrNnJDIsr9oyPo\"",
    "mtime": "2022-01-06T13:23:21.138Z",
    "path": "../public/_nuxt/Parallax-904ef780.mjs"
  },
  "/_nuxt/Previewable-58c17d0d.mjs": {
    "type": "application/javascript",
    "etag": "\"2c7-zZzy0IMPylNeMCefrsy/dLuHF54\"",
    "mtime": "2022-01-06T13:23:21.137Z",
    "path": "../public/_nuxt/Previewable-58c17d0d.mjs"
  },
  "/_nuxt/Welcome-829217e6.mjs": {
    "type": "application/javascript",
    "etag": "\"92a-yoWLn35jk8867lw1QIgWsESm/H0\"",
    "mtime": "2022-01-06T13:23:21.136Z",
    "path": "../public/_nuxt/Welcome-829217e6.mjs"
  },
  "/_nuxt/_post-acc0fe64.mjs": {
    "type": "application/javascript",
    "etag": "\"120-RdRgkuwX28DsJQHIPxlPrYt7/A0\"",
    "mtime": "2022-01-06T13:23:21.135Z",
    "path": "../public/_nuxt/_post-acc0fe64.mjs"
  },
  "/_nuxt/about-cd6d7067.mjs": {
    "type": "application/javascript",
    "etag": "\"1ca-LKKtJmqWInEHMbbYuQ0AhD2LdFI\"",
    "mtime": "2022-01-06T13:23:21.135Z",
    "path": "../public/_nuxt/about-cd6d7067.mjs"
  },
  "/_nuxt/bootstrap-4441b115.mjs": {
    "type": "application/javascript",
    "etag": "\"20c4e-XVLMV7jJdjcPr2Uaqq7XUp+CScs\"",
    "mtime": "2022-01-06T13:23:21.112Z",
    "path": "../public/_nuxt/bootstrap-4441b115.mjs"
  },
  "/_nuxt/default-81b7a540.mjs": {
    "type": "application/javascript",
    "etag": "\"18c-2Q+cg0m7ihxwBfGAV9XDXpBP2DQ\"",
    "mtime": "2022-01-06T13:23:21.111Z",
    "path": "../public/_nuxt/default-81b7a540.mjs"
  },
  "/_nuxt/entry-e24cf8e3.mjs": {
    "type": "application/javascript",
    "etag": "\"66-ncLItLAQKcPhFJYwXydnOKAkw5c\"",
    "mtime": "2022-01-06T13:23:21.111Z",
    "path": "../public/_nuxt/entry-e24cf8e3.mjs"
  },
  "/_nuxt/index-412ede7c.mjs": {
    "type": "application/javascript",
    "etag": "\"467-clCo0w2sxapAQhevW0qDd2rYPI8\"",
    "mtime": "2022-01-06T13:23:21.103Z",
    "path": "../public/_nuxt/index-412ede7c.mjs"
  },
  "/_nuxt/index-94c7b457.mjs": {
    "type": "application/javascript",
    "etag": "\"11c6-26ITPY6Y8jfR8x2F2RUCVMocLfM\"",
    "mtime": "2022-01-06T13:23:21.101Z",
    "path": "../public/_nuxt/index-94c7b457.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1842-LB8EPX5kjKP0yeqQeJwMbnp6mo0\"",
    "mtime": "2022-01-06T13:23:21.101Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/medium-b65a7ace.mjs": {
    "type": "application/javascript",
    "etag": "\"66-19LeL1VVXCP44btN/6EgisfSUjA\"",
    "mtime": "2022-01-06T13:23:21.100Z",
    "path": "../public/_nuxt/medium-b65a7ace.mjs"
  },
  "/_nuxt/nonavbar-5ad9fccb.mjs": {
    "type": "application/javascript",
    "etag": "\"1e1-n9FjNjrtRAzCYG7fB/cPwNG5ufU\"",
    "mtime": "2022-01-06T13:23:21.099Z",
    "path": "../public/_nuxt/nonavbar-5ad9fccb.mjs"
  },
  "/favicon/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": "\"567a-kmodvYXrhKlR6hjaz4W4Hl03SVo\"",
    "mtime": "2022-01-06T13:23:21.095Z",
    "path": "../public/favicon/android-chrome-192x192.png"
  },
  "/favicon/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": "\"4545-5FH0xnzLrgDT8UaYnZkXLqntIj0\"",
    "mtime": "2022-01-06T13:23:21.094Z",
    "path": "../public/favicon/android-chrome-512x512.png"
  },
  "/favicon/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"4d91-0zlZ68euwgZQgzOu+eqgyhDlyTE\"",
    "mtime": "2022-01-06T13:23:21.093Z",
    "path": "../public/favicon/apple-touch-icon.png"
  },
  "/favicon/browserconfig.xml": {
    "type": "application/xml",
    "etag": "\"ff-ui8FNvvr8iLT1LLLq7ztQn4HyH0\"",
    "mtime": "2022-01-06T13:23:21.092Z",
    "path": "../public/favicon/browserconfig.xml"
  },
  "/favicon/favicon-144x144.png": {
    "type": "image/png",
    "etag": "\"34c4-YcoKQV7vd02xzwvhse4d2DW3z7A\"",
    "mtime": "2022-01-06T13:23:21.092Z",
    "path": "../public/favicon/favicon-144x144.png"
  },
  "/favicon/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"4f9-4G3oozaU0f2yBmA8+XYvm1OEIbo\"",
    "mtime": "2022-01-06T13:23:21.091Z",
    "path": "../public/favicon/favicon-16x16.png"
  },
  "/favicon/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"990-pUfBYxtm9FkmxC2Nq/2UC6ZEdu8\"",
    "mtime": "2022-01-06T13:23:21.090Z",
    "path": "../public/favicon/favicon-32x32.png"
  },
  "/favicon/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"45b26-jsuoAjem+NJK9Cm3HfKEs7jeSEg\"",
    "mtime": "2022-01-06T13:23:21.086Z",
    "path": "../public/favicon/favicon.ico"
  },
  "/favicon/mstile-150x150.png": {
    "type": "image/png",
    "etag": "\"3bc9-pn1Ja+SU5CSrmwjvrqzs+zjB+5U\"",
    "mtime": "2022-01-06T13:23:21.084Z",
    "path": "../public/favicon/mstile-150x150.png"
  },
  "/favicon/safari-pinned-tab.svg": {
    "type": "image/svg+xml",
    "etag": "\"4b10-S58u+kJyrdH+KDcUoNJN5FxTqZU\"",
    "mtime": "2022-01-06T13:23:21.083Z",
    "path": "../public/favicon/safari-pinned-tab.svg"
  },
  "/icon/studio.png": {
    "type": "image/png",
    "etag": "\"62c2e-74h3UxoRtv8Oo1c6EzAdiMdluKk\"",
    "mtime": "2022-01-06T13:23:21.077Z",
    "path": "../public/icon/studio.png"
  },
  "/icon/studio.webp": {
    "type": "image/webp",
    "etag": "\"6910-mcgUgC4C6cB3laGIRS09NwWuLVg\"",
    "mtime": "2022-01-06T13:23:21.067Z",
    "path": "../public/icon/studio.webp"
  },
  "/icon/xcode.png": {
    "type": "image/png",
    "etag": "\"147cb-LDaZ7z7zNPdvAfmQ6S+eJAgLTAE\"",
    "mtime": "2022-01-06T13:23:21.066Z",
    "path": "../public/icon/xcode.png"
  },
  "/icon/xcode.webp": {
    "type": "image/webp",
    "etag": "\"2e0a-5xHZg7tFZVndRjOSVuSo9r4BxnE\"",
    "mtime": "2022-01-06T13:23:21.064Z",
    "path": "../public/icon/xcode.webp"
  },
  "/ogp/twitter.png": {
    "type": "image/png",
    "etag": "\"10cce-gS2RlaNVZ4Doh4tt9nyMaWLGazk\"",
    "mtime": "2022-01-06T13:23:21.057Z",
    "path": "../public/ogp/twitter.png"
  },
  "/ogp/twitter.webp": {
    "type": "image/webp",
    "etag": "\"36ae-F6BKjAnmEh1/FFzcrzu3gBh9qUY\"",
    "mtime": "2022-01-06T13:23:21.054Z",
    "path": "../public/ogp/twitter.webp"
  },
  "/_nuxt/assets/Col.34029456.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-TcHuuZRZJ0zqLchZscc52cW4TA0\"",
    "mtime": "2022-01-06T13:23:21.134Z",
    "path": "../public/_nuxt/assets/Col.34029456.css"
  },
  "/_nuxt/assets/IntroProgramming.73ac45c3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3af7-7F9E1eY4FcUd/y/FH3O3isjV46s\"",
    "mtime": "2022-01-06T13:23:21.133Z",
    "path": "../public/_nuxt/assets/IntroProgramming.73ac45c3.css"
  },
  "/_nuxt/assets/LanguagesList.0575777d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"171-id1usrqrnnwFmSvBm44HRLI6zBc\"",
    "mtime": "2022-01-06T13:23:21.133Z",
    "path": "../public/_nuxt/assets/LanguagesList.0575777d.css"
  },
  "/_nuxt/assets/Welcome.b28fd21a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6fb-MCMvmrwOQOxQOS8LI1TxQyV/rFI\"",
    "mtime": "2022-01-06T13:23:21.132Z",
    "path": "../public/_nuxt/assets/Welcome.b28fd21a.css"
  },
  "/_nuxt/assets/bootstrap.c1b79232.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2bf6-3KhLoDzY3WRnW+aD5B8wc3aL3fc\"",
    "mtime": "2022-01-06T13:23:21.131Z",
    "path": "../public/_nuxt/assets/bootstrap.c1b79232.css"
  },
  "/_nuxt/assets/carousel.238db1ff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"688-WkfDIpkI+Iaub6cAmZw6W6V3564\"",
    "mtime": "2022-01-06T13:23:21.131Z",
    "path": "../public/_nuxt/assets/carousel.238db1ff.css"
  },
  "/_nuxt/assets/full-type2.939c16a1.svg": {
    "type": "image/svg+xml",
    "etag": "\"9301-KrzXZZIBF84czgSDWNWpOPd2tkk\"",
    "mtime": "2022-01-06T13:23:21.130Z",
    "path": "../public/_nuxt/assets/full-type2.939c16a1.svg"
  },
  "/_nuxt/assets/js.f491ab55.webp": {
    "type": "image/webp",
    "etag": "\"10fe8-pd+bmzCm2fIP8rl9AbDZpRLWi7w\"",
    "mtime": "2022-01-06T13:23:21.129Z",
    "path": "../public/_nuxt/assets/js.f491ab55.webp"
  },
  "/_nuxt/assets/medium.479bb130.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d1c-ubEG64Qj3fGh2RCe6ckvzuRhZug\"",
    "mtime": "2022-01-06T13:23:21.128Z",
    "path": "../public/_nuxt/assets/medium.479bb130.svg"
  },
  "/_nuxt/assets/nuxt.df36685c.webp": {
    "type": "image/webp",
    "etag": "\"1614c-0WrdQzpvX99fJukIO1TXC9HxEh4\"",
    "mtime": "2022-01-06T13:23:21.127Z",
    "path": "../public/_nuxt/assets/nuxt.df36685c.webp"
  },
  "/_nuxt/assets/pc.cacd61ab.webp": {
    "type": "image/webp",
    "etag": "\"843e-uzt7IweXFp6b1QnoLM5XpNg4PjI\"",
    "mtime": "2022-01-06T13:23:21.122Z",
    "path": "../public/_nuxt/assets/pc.cacd61ab.webp"
  },
  "/_nuxt/assets/python.d0102963.webp": {
    "type": "image/webp",
    "etag": "\"11d98-2jGZmZGS+ieF/RTkcYYpvyZxh20\"",
    "mtime": "2022-01-06T13:23:21.119Z",
    "path": "../public/_nuxt/assets/python.d0102963.webp"
  },
  "/_nuxt/assets/ribbon-lg.eb452e64.svg": {
    "type": "image/svg+xml",
    "etag": "\"344-ExLQxJT0g+5ufKBGelZFJJU/OZM\"",
    "mtime": "2022-01-06T13:23:21.117Z",
    "path": "../public/_nuxt/assets/ribbon-lg.eb452e64.svg"
  },
  "/_nuxt/assets/ribbon-sm.7ea7e094.svg": {
    "type": "image/svg+xml",
    "etag": "\"4d2-ybkDShW1wF+qlyx3vKtknutZ+HE\"",
    "mtime": "2022-01-06T13:23:21.115Z",
    "path": "../public/_nuxt/assets/ribbon-sm.7ea7e094.svg"
  },
  "/_nuxt/assets/xcode.f61b938f.webp": {
    "type": "image/webp",
    "etag": "\"19020-laAsG9HS2jRbrMIjTGf1+85Bkls\"",
    "mtime": "2022-01-06T13:23:21.114Z",
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
const STATIC_ASSETS_BASE = "/Users/shuteiei/Documents/Nuxt/comb-web/dist" + "/" + "1641475395";
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
