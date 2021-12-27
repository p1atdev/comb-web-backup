import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"45b26-jsuoAjem+NJK9Cm3HfKEs7jeSEg\"",
    "mtime": "2021-12-27T08:29:53.716Z",
    "path": "../public/favicon.ico"
  },
  "/_nuxt/H2Title-b8d02d26.mjs": {
    "type": "application/javascript",
    "etag": "\"2d1-qEN1FidGFP0M6C8TfoPGX6VG11Q\"",
    "mtime": "2021-12-27T08:29:53.737Z",
    "path": "../public/_nuxt/H2Title-b8d02d26.mjs"
  },
  "/_nuxt/IntroProgramming-2ef44623.mjs": {
    "type": "application/javascript",
    "etag": "\"15060-Ab2ZJgLf2uCrS7VGbDzq/w0uHww\"",
    "mtime": "2021-12-27T08:29:53.736Z",
    "path": "../public/_nuxt/IntroProgramming-2ef44623.mjs"
  },
  "/_nuxt/NavBar-89f26577.mjs": {
    "type": "application/javascript",
    "etag": "\"35ec-5PYFEH0J+q8AD47KB4o3n+xadoI\"",
    "mtime": "2021-12-27T08:29:53.735Z",
    "path": "../public/_nuxt/NavBar-89f26577.mjs"
  },
  "/_nuxt/NavBarCol-21a842dc.mjs": {
    "type": "application/javascript",
    "etag": "\"2d2-c4l+/dqB0a+YJ7KpNlPQqYqH3lU\"",
    "mtime": "2021-12-27T08:29:53.734Z",
    "path": "../public/_nuxt/NavBarCol-21a842dc.mjs"
  },
  "/_nuxt/NavBarItemRow-1212df7f.mjs": {
    "type": "application/javascript",
    "etag": "\"25c-ir/HlGVVwfME+EnrYcbb83148Ck\"",
    "mtime": "2021-12-27T08:29:53.734Z",
    "path": "../public/_nuxt/NavBarItemRow-1212df7f.mjs"
  },
  "/_nuxt/NavBarItems-40d1331e.mjs": {
    "type": "application/javascript",
    "etag": "\"4a0-7816D/+Q143/TsnD+WZr08S2tL8\"",
    "mtime": "2021-12-27T08:29:53.733Z",
    "path": "../public/_nuxt/NavBarItems-40d1331e.mjs"
  },
  "/_nuxt/Welcome-44e01d55.mjs": {
    "type": "application/javascript",
    "etag": "\"2669-5tBatUQnnJ4EqlMbK5ITEvP0++0\"",
    "mtime": "2021-12-27T08:29:53.732Z",
    "path": "../public/_nuxt/Welcome-44e01d55.mjs"
  },
  "/_nuxt/about-d33be171.mjs": {
    "type": "application/javascript",
    "etag": "\"a8-+R5pafXNGM/g4IOCANPpevn+BMU\"",
    "mtime": "2021-12-27T08:29:53.731Z",
    "path": "../public/_nuxt/about-d33be171.mjs"
  },
  "/_nuxt/bootstrap-52b67f9d.mjs": {
    "type": "application/javascript",
    "etag": "\"20a87-pFvSQj2FABDlaMiLBQtm2aJJw8o\"",
    "mtime": "2021-12-27T08:29:53.720Z",
    "path": "../public/_nuxt/bootstrap-52b67f9d.mjs"
  },
  "/_nuxt/default-bd240d61.mjs": {
    "type": "application/javascript",
    "etag": "\"1a4-pGNNuwBrSI4qdXAFc40SVdbIyUY\"",
    "mtime": "2021-12-27T08:29:53.720Z",
    "path": "../public/_nuxt/default-bd240d61.mjs"
  },
  "/_nuxt/entry-db4b1ae1.mjs": {
    "type": "application/javascript",
    "etag": "\"66-fkqfhBgW0J+kxtUMuOfdWZ95f0o\"",
    "mtime": "2021-12-27T08:29:53.720Z",
    "path": "../public/_nuxt/entry-db4b1ae1.mjs"
  },
  "/_nuxt/index-0cc2f158.mjs": {
    "type": "application/javascript",
    "etag": "\"5f1-ZITS6PNgojjfMUDWASjd1KZg3cI\"",
    "mtime": "2021-12-27T08:29:53.719Z",
    "path": "../public/_nuxt/index-0cc2f158.mjs"
  },
  "/_nuxt/index-994bb298.mjs": {
    "type": "application/javascript",
    "etag": "\"11bc-0DsSzu4jHQCxSmb10HQOZHmNWYI\"",
    "mtime": "2021-12-27T08:29:53.719Z",
    "path": "../public/_nuxt/index-994bb298.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1164-tKPJfr5VlAefirS0YBmM6uSCaGE\"",
    "mtime": "2021-12-27T08:29:53.718Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/medium-b65a7ace.mjs": {
    "type": "application/javascript",
    "etag": "\"66-19LeL1VVXCP44btN/6EgisfSUjA\"",
    "mtime": "2021-12-27T08:29:53.718Z",
    "path": "../public/_nuxt/medium-b65a7ace.mjs"
  },
  "/_nuxt/nonavbar-0a05411a.mjs": {
    "type": "application/javascript",
    "etag": "\"1dc-bErmm8GHfret8fflIEHHhBR9dUI\"",
    "mtime": "2021-12-27T08:29:53.718Z",
    "path": "../public/_nuxt/nonavbar-0a05411a.mjs"
  },
  "/ogp/twitter.png": {
    "type": "image/png",
    "etag": "\"10cce-gS2RlaNVZ4Doh4tt9nyMaWLGazk\"",
    "mtime": "2021-12-27T08:29:53.715Z",
    "path": "../public/ogp/twitter.png"
  },
  "/_nuxt/assets/IntroProgramming.0f69183c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1994-S98O/0fPIp+mYrWBS1FhnLoDqFM\"",
    "mtime": "2021-12-27T08:29:53.730Z",
    "path": "../public/_nuxt/assets/IntroProgramming.0f69183c.css"
  },
  "/_nuxt/assets/NavBarCol.2557b04c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-jf2UGUZXZcMrA7UDMfaY/Pfb5Uc\"",
    "mtime": "2021-12-27T08:29:53.730Z",
    "path": "../public/_nuxt/assets/NavBarCol.2557b04c.css"
  },
  "/_nuxt/assets/bootstrap.a482ea76.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2418-YDN+mmQCASa/AQ6+zY6Jgg3h5d8\"",
    "mtime": "2021-12-27T08:29:53.729Z",
    "path": "../public/_nuxt/assets/bootstrap.a482ea76.css"
  },
  "/_nuxt/assets/full-type2.939c16a1.svg": {
    "type": "image/svg+xml",
    "etag": "\"9301-KrzXZZIBF84czgSDWNWpOPd2tkk\"",
    "mtime": "2021-12-27T08:29:53.728Z",
    "path": "../public/_nuxt/assets/full-type2.939c16a1.svg"
  },
  "/_nuxt/assets/js.e62a84f4.png": {
    "type": "image/png",
    "etag": "\"3f8ae-eNvPExg7izTzYbAhqCVpDQDOjuo\"",
    "mtime": "2021-12-27T08:29:53.727Z",
    "path": "../public/_nuxt/assets/js.e62a84f4.png"
  },
  "/_nuxt/assets/medium.479bb130.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d1c-ubEG64Qj3fGh2RCe6ckvzuRhZug\"",
    "mtime": "2021-12-27T08:29:53.726Z",
    "path": "../public/_nuxt/assets/medium.479bb130.svg"
  },
  "/_nuxt/assets/nuxt.a137bd3c.png": {
    "type": "image/png",
    "etag": "\"48416-YfjDbq5jSROL4UHmY7daqfhhFDc\"",
    "mtime": "2021-12-27T08:29:53.726Z",
    "path": "../public/_nuxt/assets/nuxt.a137bd3c.png"
  },
  "/_nuxt/assets/pc.27c747f4.png": {
    "type": "image/png",
    "etag": "\"2606c-//zpmD3IPECCBPGKbRez7DIbjb4\"",
    "mtime": "2021-12-27T08:29:53.725Z",
    "path": "../public/_nuxt/assets/pc.27c747f4.png"
  },
  "/_nuxt/assets/python.e08fec7a.png": {
    "type": "image/png",
    "etag": "\"359eb-2Q5XTragfawXXQD7ON7zyXIx1Oo\"",
    "mtime": "2021-12-27T08:29:53.724Z",
    "path": "../public/_nuxt/assets/python.e08fec7a.png"
  },
  "/_nuxt/assets/ribbon-lg.eb452e64.svg": {
    "type": "image/svg+xml",
    "etag": "\"344-ExLQxJT0g+5ufKBGelZFJJU/OZM\"",
    "mtime": "2021-12-27T08:29:53.723Z",
    "path": "../public/_nuxt/assets/ribbon-lg.eb452e64.svg"
  },
  "/_nuxt/assets/ribbon-sm.7ea7e094.svg": {
    "type": "image/svg+xml",
    "etag": "\"4d2-ybkDShW1wF+qlyx3vKtknutZ+HE\"",
    "mtime": "2021-12-27T08:29:53.722Z",
    "path": "../public/_nuxt/assets/ribbon-sm.7ea7e094.svg"
  },
  "/_nuxt/assets/xcode.23c1e5db.png": {
    "type": "image/png",
    "etag": "\"7eaec-9PqYO1z6SN3Wg9b60MMog+dDaA4\"",
    "mtime": "2021-12-27T08:29:53.722Z",
    "path": "../public/_nuxt/assets/xcode.23c1e5db.png"
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
const STATIC_ASSETS_BASE = "/Users/shuteiei/Documents/Nuxt/comb-web/dist" + "/" + "1640593789";
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
