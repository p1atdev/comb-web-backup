import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"45b26-jsuoAjem+NJK9Cm3HfKEs7jeSEg\"",
    "mtime": "2021-12-30T07:21:19.789Z",
    "path": "../public/favicon.ico"
  },
  "/_nuxt/Col-52005bfc.mjs": {
    "type": "application/javascript",
    "etag": "\"2d3-jT/KL/3lqxhVLg13eIEweAiFtFY\"",
    "mtime": "2021-12-30T07:21:19.812Z",
    "path": "../public/_nuxt/Col-52005bfc.mjs"
  },
  "/_nuxt/H2-d922525e.mjs": {
    "type": "application/javascript",
    "etag": "\"388-hKbcH5RKkkzKfLnCfZr5ZJQddBM\"",
    "mtime": "2021-12-30T07:21:19.812Z",
    "path": "../public/_nuxt/H2-d922525e.mjs"
  },
  "/_nuxt/IntroProgramming-16071c0c.mjs": {
    "type": "application/javascript",
    "etag": "\"2f16-KVppr4BLk7fHyUTvMkcKhxlLUUw\"",
    "mtime": "2021-12-30T07:21:19.812Z",
    "path": "../public/_nuxt/IntroProgramming-16071c0c.mjs"
  },
  "/_nuxt/ItemRow-bd5cfb8e.mjs": {
    "type": "application/javascript",
    "etag": "\"25c-A9tlG8V5j9b1D4i5WFMAu0ny4lE\"",
    "mtime": "2021-12-30T07:21:19.811Z",
    "path": "../public/_nuxt/ItemRow-bd5cfb8e.mjs"
  },
  "/_nuxt/Items-ecd03541.mjs": {
    "type": "application/javascript",
    "etag": "\"4a0-frJAbcxwRCE/jzzqvyzL5NEAkBQ\"",
    "mtime": "2021-12-30T07:21:19.811Z",
    "path": "../public/_nuxt/Items-ecd03541.mjs"
  },
  "/_nuxt/LanguagesList-c64b7264.mjs": {
    "type": "application/javascript",
    "etag": "\"124c-qO05rYtIFg8S+7rwoB/2wRVLIZE\"",
    "mtime": "2021-12-30T07:21:19.811Z",
    "path": "../public/_nuxt/LanguagesList-c64b7264.mjs"
  },
  "/_nuxt/NavBar-29dd24bc.mjs": {
    "type": "application/javascript",
    "etag": "\"376c-mvJICSJL5r5KLyL7T2Wano43onE\"",
    "mtime": "2021-12-30T07:21:19.810Z",
    "path": "../public/_nuxt/NavBar-29dd24bc.mjs"
  },
  "/_nuxt/Previewable-e545bc30.mjs": {
    "type": "application/javascript",
    "etag": "\"2cc-e+A2z2rMMwdjVgo/RdD1nxEgl0k\"",
    "mtime": "2021-12-30T07:21:19.810Z",
    "path": "../public/_nuxt/Previewable-e545bc30.mjs"
  },
  "/_nuxt/Welcome-49fea975.mjs": {
    "type": "application/javascript",
    "etag": "\"26df-MK8Y7iwPU9sdyGU/7E1DCYQHLgQ\"",
    "mtime": "2021-12-30T07:21:19.810Z",
    "path": "../public/_nuxt/Welcome-49fea975.mjs"
  },
  "/_nuxt/about-f928bd60.mjs": {
    "type": "application/javascript",
    "etag": "\"ad-p1+kNyLAj3S5iZBGETOFOVAAEr0\"",
    "mtime": "2021-12-30T07:21:19.809Z",
    "path": "../public/_nuxt/about-f928bd60.mjs"
  },
  "/_nuxt/bootstrap-e5cdfae7.mjs": {
    "type": "application/javascript",
    "etag": "\"20c10-UEWP77XGunSa8s8PoO1K3I0//C8\"",
    "mtime": "2021-12-30T07:21:19.796Z",
    "path": "../public/_nuxt/bootstrap-e5cdfae7.mjs"
  },
  "/_nuxt/default-2e1cd56d.mjs": {
    "type": "application/javascript",
    "etag": "\"18c-3wfzKYAlrg9UUgBswyBF2jheJPM\"",
    "mtime": "2021-12-30T07:21:19.794Z",
    "path": "../public/_nuxt/default-2e1cd56d.mjs"
  },
  "/_nuxt/entry-77bb83ca.mjs": {
    "type": "application/javascript",
    "etag": "\"66-FSz1zsuQnSQ9jMTKd/syd/w/juE\"",
    "mtime": "2021-12-30T07:21:19.794Z",
    "path": "../public/_nuxt/entry-77bb83ca.mjs"
  },
  "/_nuxt/index-3a0a0aa5.mjs": {
    "type": "application/javascript",
    "etag": "\"707-NvxmkUHe22SUKgz+3HE1uwcrWSk\"",
    "mtime": "2021-12-30T07:21:19.793Z",
    "path": "../public/_nuxt/index-3a0a0aa5.mjs"
  },
  "/_nuxt/index-74dd738b.mjs": {
    "type": "application/javascript",
    "etag": "\"11c6-Q21eIvU9/DIzZMnzMRbeiMUTk1U\"",
    "mtime": "2021-12-30T07:21:19.792Z",
    "path": "../public/_nuxt/index-74dd738b.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"14ec-B9LIFVaj/EzU70NV2fMzT5oMieI\"",
    "mtime": "2021-12-30T07:21:19.792Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/medium-b65a7ace.mjs": {
    "type": "application/javascript",
    "etag": "\"66-19LeL1VVXCP44btN/6EgisfSUjA\"",
    "mtime": "2021-12-30T07:21:19.792Z",
    "path": "../public/_nuxt/medium-b65a7ace.mjs"
  },
  "/_nuxt/nonavbar-33a84db2.mjs": {
    "type": "application/javascript",
    "etag": "\"1e6-3EQc0u+5Sy0YlAVaAjOtoR/knLQ\"",
    "mtime": "2021-12-30T07:21:19.791Z",
    "path": "../public/_nuxt/nonavbar-33a84db2.mjs"
  },
  "/icon/Xcode.png": {
    "type": "image/png",
    "etag": "\"147cb-LDaZ7z7zNPdvAfmQ6S+eJAgLTAE\"",
    "mtime": "2021-12-30T07:21:19.789Z",
    "path": "../public/icon/Xcode.png"
  },
  "/icon/studio.png": {
    "type": "image/png",
    "etag": "\"62c2e-74h3UxoRtv8Oo1c6EzAdiMdluKk\"",
    "mtime": "2021-12-30T07:21:19.788Z",
    "path": "../public/icon/studio.png"
  },
  "/ogp/twitter.png": {
    "type": "image/png",
    "etag": "\"10cce-gS2RlaNVZ4Doh4tt9nyMaWLGazk\"",
    "mtime": "2021-12-30T07:21:19.787Z",
    "path": "../public/ogp/twitter.png"
  },
  "/_nuxt/assets/Col.34029456.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-TcHuuZRZJ0zqLchZscc52cW4TA0\"",
    "mtime": "2021-12-30T07:21:19.809Z",
    "path": "../public/_nuxt/assets/Col.34029456.css"
  },
  "/_nuxt/assets/IntroProgramming.2ba4faac.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c85-amAiu5ATIVhmMxberzsbGKM6JTs\"",
    "mtime": "2021-12-30T07:21:19.809Z",
    "path": "../public/_nuxt/assets/IntroProgramming.2ba4faac.css"
  },
  "/_nuxt/assets/LanguagesList.69998b51.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"171-X+DXJkzIU5aBd3YPm5xmG2Jna94\"",
    "mtime": "2021-12-30T07:21:19.808Z",
    "path": "../public/_nuxt/assets/LanguagesList.69998b51.css"
  },
  "/_nuxt/assets/Welcome.1ea7a807.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6b7-+m/s319G9qZQLuTiqBSHJLaBht4\"",
    "mtime": "2021-12-30T07:21:19.808Z",
    "path": "../public/_nuxt/assets/Welcome.1ea7a807.css"
  },
  "/_nuxt/assets/bootstrap.176c9d25.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d40-cZ5HBDRIU/JZ4IyVhAAEVyyovuI\"",
    "mtime": "2021-12-30T07:21:19.808Z",
    "path": "../public/_nuxt/assets/bootstrap.176c9d25.css"
  },
  "/_nuxt/assets/carousel.238db1ff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"688-WkfDIpkI+Iaub6cAmZw6W6V3564\"",
    "mtime": "2021-12-30T07:21:19.807Z",
    "path": "../public/_nuxt/assets/carousel.238db1ff.css"
  },
  "/_nuxt/assets/full-type2.939c16a1.svg": {
    "type": "image/svg+xml",
    "etag": "\"9301-KrzXZZIBF84czgSDWNWpOPd2tkk\"",
    "mtime": "2021-12-30T07:21:19.807Z",
    "path": "../public/_nuxt/assets/full-type2.939c16a1.svg"
  },
  "/_nuxt/assets/js.e62a84f4.png": {
    "type": "image/png",
    "etag": "\"3f8ae-eNvPExg7izTzYbAhqCVpDQDOjuo\"",
    "mtime": "2021-12-30T07:21:19.807Z",
    "path": "../public/_nuxt/assets/js.e62a84f4.png"
  },
  "/_nuxt/assets/medium.479bb130.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d1c-ubEG64Qj3fGh2RCe6ckvzuRhZug\"",
    "mtime": "2021-12-30T07:21:19.806Z",
    "path": "../public/_nuxt/assets/medium.479bb130.svg"
  },
  "/_nuxt/assets/nuxt.a137bd3c.png": {
    "type": "image/png",
    "etag": "\"48416-YfjDbq5jSROL4UHmY7daqfhhFDc\"",
    "mtime": "2021-12-30T07:21:19.805Z",
    "path": "../public/_nuxt/assets/nuxt.a137bd3c.png"
  },
  "/_nuxt/assets/pc.27c747f4.png": {
    "type": "image/png",
    "etag": "\"2606c-//zpmD3IPECCBPGKbRez7DIbjb4\"",
    "mtime": "2021-12-30T07:21:19.804Z",
    "path": "../public/_nuxt/assets/pc.27c747f4.png"
  },
  "/_nuxt/assets/python.e08fec7a.png": {
    "type": "image/png",
    "etag": "\"359eb-2Q5XTragfawXXQD7ON7zyXIx1Oo\"",
    "mtime": "2021-12-30T07:21:19.804Z",
    "path": "../public/_nuxt/assets/python.e08fec7a.png"
  },
  "/_nuxt/assets/ribbon-lg.eb452e64.svg": {
    "type": "image/svg+xml",
    "etag": "\"344-ExLQxJT0g+5ufKBGelZFJJU/OZM\"",
    "mtime": "2021-12-30T07:21:19.803Z",
    "path": "../public/_nuxt/assets/ribbon-lg.eb452e64.svg"
  },
  "/_nuxt/assets/ribbon-sm.7ea7e094.svg": {
    "type": "image/svg+xml",
    "etag": "\"4d2-ybkDShW1wF+qlyx3vKtknutZ+HE\"",
    "mtime": "2021-12-30T07:21:19.803Z",
    "path": "../public/_nuxt/assets/ribbon-sm.7ea7e094.svg"
  },
  "/_nuxt/assets/xcode.23c1e5db.png": {
    "type": "image/png",
    "etag": "\"7eaec-9PqYO1z6SN3Wg9b60MMog+dDaA4\"",
    "mtime": "2021-12-30T07:21:19.802Z",
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
const STATIC_ASSETS_BASE = "/Users/shuteiei/Documents/Nuxt/comb-web/dist" + "/" + "1640848875";
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
