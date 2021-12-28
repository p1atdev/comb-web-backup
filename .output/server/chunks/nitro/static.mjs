import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"45b26-jsuoAjem+NJK9Cm3HfKEs7jeSEg\"",
    "mtime": "2021-12-27T19:19:47.327Z",
    "path": "../public/favicon.ico"
  },
  "/_nuxt/H2Title-2ab5b14c.mjs": {
    "type": "application/javascript",
    "etag": "\"2e3-EqYtTgJ+wLChRGHTGIpcH+iPSXk\"",
    "mtime": "2021-12-27T19:19:47.350Z",
    "path": "../public/_nuxt/H2Title-2ab5b14c.mjs"
  },
  "/_nuxt/IntroProgramming-433c4187.mjs": {
    "type": "application/javascript",
    "etag": "\"1510f-4KIlN+lb980w6PKu3LVBYysZxWs\"",
    "mtime": "2021-12-27T19:19:47.349Z",
    "path": "../public/_nuxt/IntroProgramming-433c4187.mjs"
  },
  "/_nuxt/ModalRoot-ca7c7d07.mjs": {
    "type": "application/javascript",
    "etag": "\"d1-uPsLKLhv31H6x/poO09xANGqvT8\"",
    "mtime": "2021-12-27T19:19:47.349Z",
    "path": "../public/_nuxt/ModalRoot-ca7c7d07.mjs"
  },
  "/_nuxt/NavBar-4c759168.mjs": {
    "type": "application/javascript",
    "etag": "\"b36-Wot7rIKRT9Vw7WvqztgfsKBXPkM\"",
    "mtime": "2021-12-27T19:19:47.348Z",
    "path": "../public/_nuxt/NavBar-4c759168.mjs"
  },
  "/_nuxt/NavBarCol-0a02109d.mjs": {
    "type": "application/javascript",
    "etag": "\"2d2-/K0nc5kM5oLh+1ALfQ+4Q3jdBt0\"",
    "mtime": "2021-12-27T19:19:47.347Z",
    "path": "../public/_nuxt/NavBarCol-0a02109d.mjs"
  },
  "/_nuxt/NavBarItemRow-03fdfdff.mjs": {
    "type": "application/javascript",
    "etag": "\"25c-nRtUe3ZWR786+qzhzZQVnrLV/C4\"",
    "mtime": "2021-12-27T19:19:47.347Z",
    "path": "../public/_nuxt/NavBarItemRow-03fdfdff.mjs"
  },
  "/_nuxt/NavBarItems-1d37c279.mjs": {
    "type": "application/javascript",
    "etag": "\"4a5-ufmm/iXsFt+B9Ci+4Aauk3o22qI\"",
    "mtime": "2021-12-27T19:19:47.346Z",
    "path": "../public/_nuxt/NavBarItems-1d37c279.mjs"
  },
  "/_nuxt/Previewable-be40deb0.mjs": {
    "type": "application/javascript",
    "etag": "\"526-6Wtd/dCovMvk6R5UUoReV3ZuLCY\"",
    "mtime": "2021-12-27T19:19:47.346Z",
    "path": "../public/_nuxt/Previewable-be40deb0.mjs"
  },
  "/_nuxt/Welcome-08d64715.mjs": {
    "type": "application/javascript",
    "etag": "\"2669-PZGL5s2NQOj686uUCHbql2FlAdQ\"",
    "mtime": "2021-12-27T19:19:47.345Z",
    "path": "../public/_nuxt/Welcome-08d64715.mjs"
  },
  "/_nuxt/about-83574749.mjs": {
    "type": "application/javascript",
    "etag": "\"a8-618ZYInbj0qZyi2tRRn1yr+3uAM\"",
    "mtime": "2021-12-27T19:19:47.345Z",
    "path": "../public/_nuxt/about-83574749.mjs"
  },
  "/_nuxt/bootstrap-08e2f092.mjs": {
    "type": "application/javascript",
    "etag": "\"20e22-ErZnOE3oACwjeW7Vreat4n1mWHE\"",
    "mtime": "2021-12-27T19:19:47.335Z",
    "path": "../public/_nuxt/bootstrap-08e2f092.mjs"
  },
  "/_nuxt/default-e64680d6.mjs": {
    "type": "application/javascript",
    "etag": "\"3e3-anoD39lFPGE1L4Ex/M7pfHF849s\"",
    "mtime": "2021-12-27T19:19:47.334Z",
    "path": "../public/_nuxt/default-e64680d6.mjs"
  },
  "/_nuxt/entry-b9dca245.mjs": {
    "type": "application/javascript",
    "etag": "\"66-sag2ypkmC3eP1uw08V0epNdtZ7Q\"",
    "mtime": "2021-12-27T19:19:47.334Z",
    "path": "../public/_nuxt/entry-b9dca245.mjs"
  },
  "/_nuxt/index-a865dec8.mjs": {
    "type": "application/javascript",
    "etag": "\"11bc-gsUtBGvIeYWEV+MPSckCtk6QWgI\"",
    "mtime": "2021-12-27T19:19:47.333Z",
    "path": "../public/_nuxt/index-a865dec8.mjs"
  },
  "/_nuxt/index-de335ad0.mjs": {
    "type": "application/javascript",
    "etag": "\"713-pkYuetXNJblybS6F+svuDDAztMg\"",
    "mtime": "2021-12-27T19:19:47.333Z",
    "path": "../public/_nuxt/index-de335ad0.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"181b-s2UDh33dHGS9ihmQ2m7SWS2cgXQ\"",
    "mtime": "2021-12-27T19:19:47.332Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/medium-b65a7ace.mjs": {
    "type": "application/javascript",
    "etag": "\"66-19LeL1VVXCP44btN/6EgisfSUjA\"",
    "mtime": "2021-12-27T19:19:47.332Z",
    "path": "../public/_nuxt/medium-b65a7ace.mjs"
  },
  "/_nuxt/nonavbar-dda2c2eb.mjs": {
    "type": "application/javascript",
    "etag": "\"41f-thxhpPcGytkp6jISjKYu7YbtqZM\"",
    "mtime": "2021-12-27T19:19:47.331Z",
    "path": "../public/_nuxt/nonavbar-dda2c2eb.mjs"
  },
  "/_nuxt/nuxt-e61edaff.mjs": {
    "type": "application/javascript",
    "etag": "\"38-ljydgkfSUyrAvoVGCKrKWHmDLxU\"",
    "mtime": "2021-12-27T19:19:47.331Z",
    "path": "../public/_nuxt/nuxt-e61edaff.mjs"
  },
  "/_nuxt/states-e86461d2.mjs": {
    "type": "application/javascript",
    "etag": "\"bc-WX6LlraTb2auybOXNqQU9BB3hqo\"",
    "mtime": "2021-12-27T19:19:47.330Z",
    "path": "../public/_nuxt/states-e86461d2.mjs"
  },
  "/_nuxt/test-55721cd2.mjs": {
    "type": "application/javascript",
    "etag": "\"17d-TPfQ9TQYGFnh07SRTYMNSuYiJfY\"",
    "mtime": "2021-12-27T19:19:47.329Z",
    "path": "../public/_nuxt/test-55721cd2.mjs"
  },
  "/_nuxt/transition.esm-c0d3d44a.mjs": {
    "type": "application/javascript",
    "etag": "\"2c92-DuGXW9Yd/H2hDYKTiUAiSPkkJBU\"",
    "mtime": "2021-12-27T19:19:47.329Z",
    "path": "../public/_nuxt/transition.esm-c0d3d44a.mjs"
  },
  "/ogp/twitter.png": {
    "type": "image/png",
    "etag": "\"10cce-gS2RlaNVZ4Doh4tt9nyMaWLGazk\"",
    "mtime": "2021-12-27T19:19:47.326Z",
    "path": "../public/ogp/twitter.png"
  },
  "/_nuxt/assets/IntroProgramming.186df0c1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1990-t/eH9sZ4XJ+M5VxryOTi+4Oi8Ak\"",
    "mtime": "2021-12-27T19:19:47.344Z",
    "path": "../public/_nuxt/assets/IntroProgramming.186df0c1.css"
  },
  "/_nuxt/assets/NavBarCol.2557b04c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-jf2UGUZXZcMrA7UDMfaY/Pfb5Uc\"",
    "mtime": "2021-12-27T19:19:47.344Z",
    "path": "../public/_nuxt/assets/NavBarCol.2557b04c.css"
  },
  "/_nuxt/assets/bootstrap.015a5a3d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"25ab-cUEu4NNPEhWZ97H2ZKPcroe0l8k\"",
    "mtime": "2021-12-27T19:19:47.343Z",
    "path": "../public/_nuxt/assets/bootstrap.015a5a3d.css"
  },
  "/_nuxt/assets/full-type2.939c16a1.svg": {
    "type": "image/svg+xml",
    "etag": "\"9301-KrzXZZIBF84czgSDWNWpOPd2tkk\"",
    "mtime": "2021-12-27T19:19:47.343Z",
    "path": "../public/_nuxt/assets/full-type2.939c16a1.svg"
  },
  "/_nuxt/assets/js.e62a84f4.png": {
    "type": "image/png",
    "etag": "\"3f8ae-eNvPExg7izTzYbAhqCVpDQDOjuo\"",
    "mtime": "2021-12-27T19:19:47.342Z",
    "path": "../public/_nuxt/assets/js.e62a84f4.png"
  },
  "/_nuxt/assets/medium.479bb130.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d1c-ubEG64Qj3fGh2RCe6ckvzuRhZug\"",
    "mtime": "2021-12-27T19:19:47.341Z",
    "path": "../public/_nuxt/assets/medium.479bb130.svg"
  },
  "/_nuxt/assets/nuxt.a137bd3c.png": {
    "type": "image/png",
    "etag": "\"48416-YfjDbq5jSROL4UHmY7daqfhhFDc\"",
    "mtime": "2021-12-27T19:19:47.341Z",
    "path": "../public/_nuxt/assets/nuxt.a137bd3c.png"
  },
  "/_nuxt/assets/pc.27c747f4.png": {
    "type": "image/png",
    "etag": "\"2606c-//zpmD3IPECCBPGKbRez7DIbjb4\"",
    "mtime": "2021-12-27T19:19:47.340Z",
    "path": "../public/_nuxt/assets/pc.27c747f4.png"
  },
  "/_nuxt/assets/python.e08fec7a.png": {
    "type": "image/png",
    "etag": "\"359eb-2Q5XTragfawXXQD7ON7zyXIx1Oo\"",
    "mtime": "2021-12-27T19:19:47.339Z",
    "path": "../public/_nuxt/assets/python.e08fec7a.png"
  },
  "/_nuxt/assets/ribbon-lg.eb452e64.svg": {
    "type": "image/svg+xml",
    "etag": "\"344-ExLQxJT0g+5ufKBGelZFJJU/OZM\"",
    "mtime": "2021-12-27T19:19:47.338Z",
    "path": "../public/_nuxt/assets/ribbon-lg.eb452e64.svg"
  },
  "/_nuxt/assets/ribbon-sm.7ea7e094.svg": {
    "type": "image/svg+xml",
    "etag": "\"4d2-ybkDShW1wF+qlyx3vKtknutZ+HE\"",
    "mtime": "2021-12-27T19:19:47.338Z",
    "path": "../public/_nuxt/assets/ribbon-sm.7ea7e094.svg"
  },
  "/_nuxt/assets/xcode.23c1e5db.png": {
    "type": "image/png",
    "etag": "\"7eaec-9PqYO1z6SN3Wg9b60MMog+dDaA4\"",
    "mtime": "2021-12-27T19:19:47.337Z",
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
const STATIC_ASSETS_BASE = "/Users/shuteiei/Documents/Nuxt/comb-web/dist" + "/" + "1640632783";
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
