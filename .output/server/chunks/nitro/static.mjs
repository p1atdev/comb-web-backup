import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"45b26-jsuoAjem+NJK9Cm3HfKEs7jeSEg\"",
    "mtime": "2022-01-08T18:29:37.575Z",
    "path": "../public/favicon.ico"
  },
  "/_nuxt/Avatar-a351dc88.mjs": {
    "type": "application/javascript",
    "etag": "\"1fc-uFdd4YjlNWekzgwwfwa89aH4KPQ\"",
    "mtime": "2022-01-08T18:29:37.612Z",
    "path": "../public/_nuxt/Avatar-a351dc88.mjs"
  },
  "/_nuxt/Col-96a3f374.mjs": {
    "type": "application/javascript",
    "etag": "\"2d4-Q2walVvnYVo3GAkCREiYMzV71W8\"",
    "mtime": "2022-01-08T18:29:37.611Z",
    "path": "../public/_nuxt/Col-96a3f374.mjs"
  },
  "/_nuxt/H2-e03b2db0.mjs": {
    "type": "application/javascript",
    "etag": "\"131a-DcAteripbKlb34swLXtZyKJ+zPc\"",
    "mtime": "2022-01-08T18:29:37.610Z",
    "path": "../public/_nuxt/H2-e03b2db0.mjs"
  },
  "/_nuxt/IntroProgramming-62b53d23.mjs": {
    "type": "application/javascript",
    "etag": "\"2efd-UB8a+iO1TIeEQLlxk17atpEByWk\"",
    "mtime": "2022-01-08T18:29:37.610Z",
    "path": "../public/_nuxt/IntroProgramming-62b53d23.mjs"
  },
  "/_nuxt/ItemRow-bad2e07b.mjs": {
    "type": "application/javascript",
    "etag": "\"25e-IX+GTSPGvhqIRaShx71kixHNpRA\"",
    "mtime": "2022-01-08T18:29:37.609Z",
    "path": "../public/_nuxt/ItemRow-bad2e07b.mjs"
  },
  "/_nuxt/Items-a4444457.mjs": {
    "type": "application/javascript",
    "etag": "\"5b3-jh5AoJMYl5+xPBiuX4S3YzOhHA8\"",
    "mtime": "2022-01-08T18:29:37.608Z",
    "path": "../public/_nuxt/Items-a4444457.mjs"
  },
  "/_nuxt/LanguagesList-351eb9fd.mjs": {
    "type": "application/javascript",
    "etag": "\"124e-ny9A0gy7xKTvcCBGDHfsb2b32Xc\"",
    "mtime": "2022-01-08T18:29:37.608Z",
    "path": "../public/_nuxt/LanguagesList-351eb9fd.mjs"
  },
  "/_nuxt/List-b87c3e73.mjs": {
    "type": "application/javascript",
    "etag": "\"4d7-Pwxxmg2k+rftkUEVB1JPBQj8KM4\"",
    "mtime": "2022-01-08T18:29:37.607Z",
    "path": "../public/_nuxt/List-b87c3e73.mjs"
  },
  "/_nuxt/MetaHead-a8b9e203.mjs": {
    "type": "application/javascript",
    "etag": "\"2b8-T2YQJMVfWaKaLEyiBtSG/x3/A1g\"",
    "mtime": "2022-01-08T18:29:37.607Z",
    "path": "../public/_nuxt/MetaHead-a8b9e203.mjs"
  },
  "/_nuxt/NavBar-22b5424c.mjs": {
    "type": "application/javascript",
    "etag": "\"a86-WuoJ3SF/7L61utVVU/vhXveIFGM\"",
    "mtime": "2022-01-08T18:29:37.606Z",
    "path": "../public/_nuxt/NavBar-22b5424c.mjs"
  },
  "/_nuxt/Parallax-ed195111.mjs": {
    "type": "application/javascript",
    "etag": "\"c37-GM0RDUvSsscDc2OLVISXOpyxBYA\"",
    "mtime": "2022-01-08T18:29:37.606Z",
    "path": "../public/_nuxt/Parallax-ed195111.mjs"
  },
  "/_nuxt/PickUp-094d4a53.mjs": {
    "type": "application/javascript",
    "etag": "\"b78-SHAX5giv1fK/pFsmhvWPjZy5oOw\"",
    "mtime": "2022-01-08T18:29:37.605Z",
    "path": "../public/_nuxt/PickUp-094d4a53.mjs"
  },
  "/_nuxt/Previewable-0f9e2497.mjs": {
    "type": "application/javascript",
    "etag": "\"2d0-vzb/OPg3d6kIkWae727H97tchNI\"",
    "mtime": "2022-01-08T18:29:37.605Z",
    "path": "../public/_nuxt/Previewable-0f9e2497.mjs"
  },
  "/_nuxt/UpdateAt-5704db4f.mjs": {
    "type": "application/javascript",
    "etag": "\"3e4b8-WJCzbwyKGscTSLtg+AU5IqIqReE\"",
    "mtime": "2022-01-08T18:29:37.604Z",
    "path": "../public/_nuxt/UpdateAt-5704db4f.mjs"
  },
  "/_nuxt/Welcome-a5e9edf4.mjs": {
    "type": "application/javascript",
    "etag": "\"90e-anZoKFxZUbiBnU4u5q6icjBdgZo\"",
    "mtime": "2022-01-08T18:29:37.603Z",
    "path": "../public/_nuxt/Welcome-a5e9edf4.mjs"
  },
  "/_nuxt/_post-f84ee2d1.mjs": {
    "type": "application/javascript",
    "etag": "\"120-B9AslwHY4MSc/i3H0Nv8mvJ0Hjg\"",
    "mtime": "2022-01-08T18:29:37.602Z",
    "path": "../public/_nuxt/_post-f84ee2d1.mjs"
  },
  "/_nuxt/about-b45cd192.mjs": {
    "type": "application/javascript",
    "etag": "\"1ca-mJ6eeI2LxbdB94LQblKYatFTlVM\"",
    "mtime": "2022-01-08T18:29:37.602Z",
    "path": "../public/_nuxt/about-b45cd192.mjs"
  },
  "/_nuxt/bootstrap-2c1df753.mjs": {
    "type": "application/javascript",
    "etag": "\"2117d-HUNaowOz0OSe9Wznva7O8XOSIPI\"",
    "mtime": "2022-01-08T18:29:37.592Z",
    "path": "../public/_nuxt/bootstrap-2c1df753.mjs"
  },
  "/_nuxt/default-f99dfe22.mjs": {
    "type": "application/javascript",
    "etag": "\"175-E6GJIOL1ODSHYgrBVB0qfGnq9/0\"",
    "mtime": "2022-01-08T18:29:37.592Z",
    "path": "../public/_nuxt/default-f99dfe22.mjs"
  },
  "/_nuxt/entry-03d666ac.mjs": {
    "type": "application/javascript",
    "etag": "\"66-4Txlh8AT5nAtrYtwWNnI5i6yVek\"",
    "mtime": "2022-01-08T18:29:37.591Z",
    "path": "../public/_nuxt/entry-03d666ac.mjs"
  },
  "/_nuxt/index-203f9b87.mjs": {
    "type": "application/javascript",
    "etag": "\"44a-btQ2Y7CCBFd8MSpfW42W7NQ9x1g\"",
    "mtime": "2022-01-08T18:29:37.589Z",
    "path": "../public/_nuxt/index-203f9b87.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1cb3-Hu4pnYd39mQkeB2vsvfYsOKs3fQ\"",
    "mtime": "2022-01-08T18:29:37.588Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/medium-b65a7ace.mjs": {
    "type": "application/javascript",
    "etag": "\"66-19LeL1VVXCP44btN/6EgisfSUjA\"",
    "mtime": "2022-01-08T18:29:37.588Z",
    "path": "../public/_nuxt/medium-b65a7ace.mjs"
  },
  "/_nuxt/nonavbar-842b95b8.mjs": {
    "type": "application/javascript",
    "etag": "\"1e8-pw/u1WV/DPf1btX17KSTpQD4JgM\"",
    "mtime": "2022-01-08T18:29:37.588Z",
    "path": "../public/_nuxt/nonavbar-842b95b8.mjs"
  },
  "/_nuxt/posts-07fc92b6.mjs": {
    "type": "application/javascript",
    "etag": "\"df3-GXKrJf6g7vCYxcOqcNi2U/J7sY0\"",
    "mtime": "2022-01-08T18:29:37.586Z",
    "path": "../public/_nuxt/posts-07fc92b6.mjs"
  },
  "/favicon/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": "\"567a-kmodvYXrhKlR6hjaz4W4Hl03SVo\"",
    "mtime": "2022-01-08T18:29:37.583Z",
    "path": "../public/favicon/android-chrome-192x192.png"
  },
  "/favicon/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": "\"4545-5FH0xnzLrgDT8UaYnZkXLqntIj0\"",
    "mtime": "2022-01-08T18:29:37.582Z",
    "path": "../public/favicon/android-chrome-512x512.png"
  },
  "/favicon/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"4d91-0zlZ68euwgZQgzOu+eqgyhDlyTE\"",
    "mtime": "2022-01-08T18:29:37.581Z",
    "path": "../public/favicon/apple-touch-icon.png"
  },
  "/favicon/browserconfig.xml": {
    "type": "application/xml",
    "etag": "\"ff-ui8FNvvr8iLT1LLLq7ztQn4HyH0\"",
    "mtime": "2022-01-08T18:29:37.581Z",
    "path": "../public/favicon/browserconfig.xml"
  },
  "/favicon/favicon-144x144.png": {
    "type": "image/png",
    "etag": "\"34c4-YcoKQV7vd02xzwvhse4d2DW3z7A\"",
    "mtime": "2022-01-08T18:29:37.580Z",
    "path": "../public/favicon/favicon-144x144.png"
  },
  "/favicon/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"4f9-4G3oozaU0f2yBmA8+XYvm1OEIbo\"",
    "mtime": "2022-01-08T18:29:37.579Z",
    "path": "../public/favicon/favicon-16x16.png"
  },
  "/favicon/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"990-pUfBYxtm9FkmxC2Nq/2UC6ZEdu8\"",
    "mtime": "2022-01-08T18:29:37.579Z",
    "path": "../public/favicon/favicon-32x32.png"
  },
  "/favicon/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"45b26-jsuoAjem+NJK9Cm3HfKEs7jeSEg\"",
    "mtime": "2022-01-08T18:29:37.578Z",
    "path": "../public/favicon/favicon.ico"
  },
  "/favicon/mstile-150x150.png": {
    "type": "image/png",
    "etag": "\"3bc9-pn1Ja+SU5CSrmwjvrqzs+zjB+5U\"",
    "mtime": "2022-01-08T18:29:37.577Z",
    "path": "../public/favicon/mstile-150x150.png"
  },
  "/favicon/safari-pinned-tab.svg": {
    "type": "image/svg+xml",
    "etag": "\"4b10-S58u+kJyrdH+KDcUoNJN5FxTqZU\"",
    "mtime": "2022-01-08T18:29:37.576Z",
    "path": "../public/favicon/safari-pinned-tab.svg"
  },
  "/icon/studio.png": {
    "type": "image/png",
    "etag": "\"62c2e-74h3UxoRtv8Oo1c6EzAdiMdluKk\"",
    "mtime": "2022-01-08T18:29:37.574Z",
    "path": "../public/icon/studio.png"
  },
  "/icon/studio.webp": {
    "type": "image/webp",
    "etag": "\"6910-mcgUgC4C6cB3laGIRS09NwWuLVg\"",
    "mtime": "2022-01-08T18:29:37.573Z",
    "path": "../public/icon/studio.webp"
  },
  "/icon/xcode.png": {
    "type": "image/png",
    "etag": "\"147cb-LDaZ7z7zNPdvAfmQ6S+eJAgLTAE\"",
    "mtime": "2022-01-08T18:29:37.572Z",
    "path": "../public/icon/xcode.png"
  },
  "/icon/xcode.webp": {
    "type": "image/webp",
    "etag": "\"2e0a-5xHZg7tFZVndRjOSVuSo9r4BxnE\"",
    "mtime": "2022-01-08T18:29:37.571Z",
    "path": "../public/icon/xcode.webp"
  },
  "/ogp/twitter.png": {
    "type": "image/png",
    "etag": "\"10cce-gS2RlaNVZ4Doh4tt9nyMaWLGazk\"",
    "mtime": "2022-01-08T18:29:37.569Z",
    "path": "../public/ogp/twitter.png"
  },
  "/ogp/twitter.webp": {
    "type": "image/webp",
    "etag": "\"36ae-F6BKjAnmEh1/FFzcrzu3gBh9qUY\"",
    "mtime": "2022-01-08T18:29:37.568Z",
    "path": "../public/ogp/twitter.webp"
  },
  "/_nuxt/assets/Col.34029456.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-TcHuuZRZJ0zqLchZscc52cW4TA0\"",
    "mtime": "2022-01-08T18:29:37.601Z",
    "path": "../public/_nuxt/assets/Col.34029456.css"
  },
  "/_nuxt/assets/IntroProgramming.e664681a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"463b-NYerebE+J5Ffhx1DMjrmQqddTyo\"",
    "mtime": "2022-01-08T18:29:37.601Z",
    "path": "../public/_nuxt/assets/IntroProgramming.e664681a.css"
  },
  "/_nuxt/assets/LanguagesList.0575777d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"171-id1usrqrnnwFmSvBm44HRLI6zBc\"",
    "mtime": "2022-01-08T18:29:37.600Z",
    "path": "../public/_nuxt/assets/LanguagesList.0575777d.css"
  },
  "/_nuxt/assets/Welcome.198c8668.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6a1-HyfNcbCVQ/7eZkmUvEBhFbLVnZM\"",
    "mtime": "2022-01-08T18:29:37.600Z",
    "path": "../public/_nuxt/assets/Welcome.198c8668.css"
  },
  "/_nuxt/assets/bootstrap.48c4a876.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36f5-dqRB8cLnidCE1jUe4ZSYGd1L3GU\"",
    "mtime": "2022-01-08T18:29:37.599Z",
    "path": "../public/_nuxt/assets/bootstrap.48c4a876.css"
  },
  "/_nuxt/assets/carousel.238db1ff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"688-WkfDIpkI+Iaub6cAmZw6W6V3564\"",
    "mtime": "2022-01-08T18:29:37.599Z",
    "path": "../public/_nuxt/assets/carousel.238db1ff.css"
  },
  "/_nuxt/assets/full-type2.939c16a1.svg": {
    "type": "image/svg+xml",
    "etag": "\"9301-KrzXZZIBF84czgSDWNWpOPd2tkk\"",
    "mtime": "2022-01-08T18:29:37.598Z",
    "path": "../public/_nuxt/assets/full-type2.939c16a1.svg"
  },
  "/_nuxt/assets/js.f491ab55.webp": {
    "type": "image/webp",
    "etag": "\"10fe8-pd+bmzCm2fIP8rl9AbDZpRLWi7w\"",
    "mtime": "2022-01-08T18:29:37.597Z",
    "path": "../public/_nuxt/assets/js.f491ab55.webp"
  },
  "/_nuxt/assets/medium.479bb130.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d1c-ubEG64Qj3fGh2RCe6ckvzuRhZug\"",
    "mtime": "2022-01-08T18:29:37.596Z",
    "path": "../public/_nuxt/assets/medium.479bb130.svg"
  },
  "/_nuxt/assets/nuxt.df36685c.webp": {
    "type": "image/webp",
    "etag": "\"1614c-0WrdQzpvX99fJukIO1TXC9HxEh4\"",
    "mtime": "2022-01-08T18:29:37.596Z",
    "path": "../public/_nuxt/assets/nuxt.df36685c.webp"
  },
  "/_nuxt/assets/pc.cacd61ab.webp": {
    "type": "image/webp",
    "etag": "\"843e-uzt7IweXFp6b1QnoLM5XpNg4PjI\"",
    "mtime": "2022-01-08T18:29:37.595Z",
    "path": "../public/_nuxt/assets/pc.cacd61ab.webp"
  },
  "/_nuxt/assets/python.d0102963.webp": {
    "type": "image/webp",
    "etag": "\"11d98-2jGZmZGS+ieF/RTkcYYpvyZxh20\"",
    "mtime": "2022-01-08T18:29:37.595Z",
    "path": "../public/_nuxt/assets/python.d0102963.webp"
  },
  "/_nuxt/assets/ribbon-lg.eb452e64.svg": {
    "type": "image/svg+xml",
    "etag": "\"344-ExLQxJT0g+5ufKBGelZFJJU/OZM\"",
    "mtime": "2022-01-08T18:29:37.594Z",
    "path": "../public/_nuxt/assets/ribbon-lg.eb452e64.svg"
  },
  "/_nuxt/assets/ribbon-sm.7ea7e094.svg": {
    "type": "image/svg+xml",
    "etag": "\"4d2-ybkDShW1wF+qlyx3vKtknutZ+HE\"",
    "mtime": "2022-01-08T18:29:37.594Z",
    "path": "../public/_nuxt/assets/ribbon-sm.7ea7e094.svg"
  },
  "/_nuxt/assets/xcode.f61b938f.webp": {
    "type": "image/webp",
    "etag": "\"19020-laAsG9HS2jRbrMIjTGf1+85Bkls\"",
    "mtime": "2022-01-08T18:29:37.593Z",
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
const STATIC_ASSETS_BASE = "/Users/shuteiei/Documents/Nuxt/comb-web/dist" + "/" + "1641666571";
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
