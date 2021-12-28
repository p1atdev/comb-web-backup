import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"45b26-jsuoAjem+NJK9Cm3HfKEs7jeSEg\"",
    "mtime": "2021-12-28T05:10:30.683Z",
    "path": "../public/favicon.ico"
  },
  "/_nuxt/H2Title-5811c4f2.mjs": {
    "type": "application/javascript",
    "etag": "\"33e-+nTQqwngvxrOt7NpRoXU4w2VpKE\"",
    "mtime": "2021-12-28T05:10:30.719Z",
    "path": "../public/_nuxt/H2Title-5811c4f2.mjs"
  },
  "/_nuxt/IntroProgramming-577c5917.mjs": {
    "type": "application/javascript",
    "etag": "\"2e6c-jJFQRii2SmoMpAlIkdSRXn/X4Ws\"",
    "mtime": "2021-12-28T05:10:30.719Z",
    "path": "../public/_nuxt/IntroProgramming-577c5917.mjs"
  },
  "/_nuxt/NavBar-23fb25e5.mjs": {
    "type": "application/javascript",
    "etag": "\"3785-NODvdiJDuXC9ijg//uGqGVCAjQE\"",
    "mtime": "2021-12-28T05:10:30.718Z",
    "path": "../public/_nuxt/NavBar-23fb25e5.mjs"
  },
  "/_nuxt/NavBarCol-9ef547e9.mjs": {
    "type": "application/javascript",
    "etag": "\"2d4-Xl8LhZRMbZIN9A9/vcjJQhqgxrY\"",
    "mtime": "2021-12-28T05:10:30.717Z",
    "path": "../public/_nuxt/NavBarCol-9ef547e9.mjs"
  },
  "/_nuxt/NavBarItemRow-27bae768.mjs": {
    "type": "application/javascript",
    "etag": "\"25e-a920AsIPja1MWFUPf1J1zNSWuvQ\"",
    "mtime": "2021-12-28T05:10:30.717Z",
    "path": "../public/_nuxt/NavBarItemRow-27bae768.mjs"
  },
  "/_nuxt/NavBarItems-7f6bd2b0.mjs": {
    "type": "application/javascript",
    "etag": "\"4a0-0CWfe3Tzv2dhmyNLHfOmmsXYbaM\"",
    "mtime": "2021-12-28T05:10:30.716Z",
    "path": "../public/_nuxt/NavBarItems-7f6bd2b0.mjs"
  },
  "/_nuxt/Previewable-c0e56eee.mjs": {
    "type": "application/javascript",
    "etag": "\"2c9-w2jD7/BY6TfQyvkUyF6q+OsHSqE\"",
    "mtime": "2021-12-28T05:10:30.715Z",
    "path": "../public/_nuxt/Previewable-c0e56eee.mjs"
  },
  "/_nuxt/Welcome-65e003f5.mjs": {
    "type": "application/javascript",
    "etag": "\"2665-ebNguat5kexAdTxJunZuHrFW7Jo\"",
    "mtime": "2021-12-28T05:10:30.712Z",
    "path": "../public/_nuxt/Welcome-65e003f5.mjs"
  },
  "/_nuxt/about-1df4be34.mjs": {
    "type": "application/javascript",
    "etag": "\"a8-7lV1p24QMT2Rfib0YceS+L405DE\"",
    "mtime": "2021-12-28T05:10:30.711Z",
    "path": "../public/_nuxt/about-1df4be34.mjs"
  },
  "/_nuxt/bootstrap-e5702bc3.mjs": {
    "type": "application/javascript",
    "etag": "\"20b17-pkMQeucLigB0rx03cvE0K3Cuk+w\"",
    "mtime": "2021-12-28T05:10:30.692Z",
    "path": "../public/_nuxt/bootstrap-e5702bc3.mjs"
  },
  "/_nuxt/default-578b343c.mjs": {
    "type": "application/javascript",
    "etag": "\"1a4-CeoUYm2ExkUFUgVq/CqBCiEmg0w\"",
    "mtime": "2021-12-28T05:10:30.691Z",
    "path": "../public/_nuxt/default-578b343c.mjs"
  },
  "/_nuxt/entry-9b7ff38a.mjs": {
    "type": "application/javascript",
    "etag": "\"66-YapwLoiP98PvIsY95dU7scuzmAA\"",
    "mtime": "2021-12-28T05:10:30.690Z",
    "path": "../public/_nuxt/entry-9b7ff38a.mjs"
  },
  "/_nuxt/index-5b832ac2.mjs": {
    "type": "application/javascript",
    "etag": "\"11bc-M7w1NcRR858xTLuy1ZkSb2XHLm0\"",
    "mtime": "2021-12-28T05:10:30.690Z",
    "path": "../public/_nuxt/index-5b832ac2.mjs"
  },
  "/_nuxt/index-9029f7c7.mjs": {
    "type": "application/javascript",
    "etag": "\"6c3-bp/1rZFiND2P1rAld9XkfEReSLc\"",
    "mtime": "2021-12-28T05:10:30.689Z",
    "path": "../public/_nuxt/index-9029f7c7.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"129b-1/vT0Qr/uR6/xY+W2M4TuhRHXT0\"",
    "mtime": "2021-12-28T05:10:30.688Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/medium-b65a7ace.mjs": {
    "type": "application/javascript",
    "etag": "\"66-19LeL1VVXCP44btN/6EgisfSUjA\"",
    "mtime": "2021-12-28T05:10:30.687Z",
    "path": "../public/_nuxt/medium-b65a7ace.mjs"
  },
  "/_nuxt/nonavbar-dafaddf4.mjs": {
    "type": "application/javascript",
    "etag": "\"1e9-gYLFlHOUl1MRZeMWP4yJvGF6i2g\"",
    "mtime": "2021-12-28T05:10:30.686Z",
    "path": "../public/_nuxt/nonavbar-dafaddf4.mjs"
  },
  "/ogp/twitter.png": {
    "type": "image/png",
    "etag": "\"10cce-gS2RlaNVZ4Doh4tt9nyMaWLGazk\"",
    "mtime": "2021-12-28T05:10:30.679Z",
    "path": "../public/ogp/twitter.png"
  },
  "/_nuxt/assets/IntroProgramming.1b14f93b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"688-WkfDIpkI+Iaub6cAmZw6W6V3564\"",
    "mtime": "2021-12-28T05:10:30.710Z",
    "path": "../public/_nuxt/assets/IntroProgramming.1b14f93b.css"
  },
  "/_nuxt/assets/NavBarCol.2557b04c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-jf2UGUZXZcMrA7UDMfaY/Pfb5Uc\"",
    "mtime": "2021-12-28T05:10:30.709Z",
    "path": "../public/_nuxt/assets/NavBarCol.2557b04c.css"
  },
  "/_nuxt/assets/bootstrap.4456b833.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"271c-W1VTKQmMx63VrkSRMd/1+3GkRY0\"",
    "mtime": "2021-12-28T05:10:30.707Z",
    "path": "../public/_nuxt/assets/bootstrap.4456b833.css"
  },
  "/_nuxt/assets/full-type2.939c16a1.svg": {
    "type": "image/svg+xml",
    "etag": "\"9301-KrzXZZIBF84czgSDWNWpOPd2tkk\"",
    "mtime": "2021-12-28T05:10:30.706Z",
    "path": "../public/_nuxt/assets/full-type2.939c16a1.svg"
  },
  "/_nuxt/assets/js.e62a84f4.png": {
    "type": "image/png",
    "etag": "\"3f8ae-eNvPExg7izTzYbAhqCVpDQDOjuo\"",
    "mtime": "2021-12-28T05:10:30.705Z",
    "path": "../public/_nuxt/assets/js.e62a84f4.png"
  },
  "/_nuxt/assets/medium.479bb130.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d1c-ubEG64Qj3fGh2RCe6ckvzuRhZug\"",
    "mtime": "2021-12-28T05:10:30.702Z",
    "path": "../public/_nuxt/assets/medium.479bb130.svg"
  },
  "/_nuxt/assets/nuxt.a137bd3c.png": {
    "type": "image/png",
    "etag": "\"48416-YfjDbq5jSROL4UHmY7daqfhhFDc\"",
    "mtime": "2021-12-28T05:10:30.699Z",
    "path": "../public/_nuxt/assets/nuxt.a137bd3c.png"
  },
  "/_nuxt/assets/pc.27c747f4.png": {
    "type": "image/png",
    "etag": "\"2606c-//zpmD3IPECCBPGKbRez7DIbjb4\"",
    "mtime": "2021-12-28T05:10:30.698Z",
    "path": "../public/_nuxt/assets/pc.27c747f4.png"
  },
  "/_nuxt/assets/python.e08fec7a.png": {
    "type": "image/png",
    "etag": "\"359eb-2Q5XTragfawXXQD7ON7zyXIx1Oo\"",
    "mtime": "2021-12-28T05:10:30.697Z",
    "path": "../public/_nuxt/assets/python.e08fec7a.png"
  },
  "/_nuxt/assets/ribbon-lg.eb452e64.svg": {
    "type": "image/svg+xml",
    "etag": "\"344-ExLQxJT0g+5ufKBGelZFJJU/OZM\"",
    "mtime": "2021-12-28T05:10:30.696Z",
    "path": "../public/_nuxt/assets/ribbon-lg.eb452e64.svg"
  },
  "/_nuxt/assets/ribbon-sm.7ea7e094.svg": {
    "type": "image/svg+xml",
    "etag": "\"4d2-ybkDShW1wF+qlyx3vKtknutZ+HE\"",
    "mtime": "2021-12-28T05:10:30.695Z",
    "path": "../public/_nuxt/assets/ribbon-sm.7ea7e094.svg"
  },
  "/_nuxt/assets/xcode.23c1e5db.png": {
    "type": "image/png",
    "etag": "\"7eaec-9PqYO1z6SN3Wg9b60MMog+dDaA4\"",
    "mtime": "2021-12-28T05:10:30.695Z",
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
const STATIC_ASSETS_BASE = "/Users/shuteiei/Documents/Nuxt/comb-web/dist" + "/" + "1640668226";
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
