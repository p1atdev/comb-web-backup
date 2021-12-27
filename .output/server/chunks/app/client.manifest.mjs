const client_manifest = {
  "../node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-db4b1ae1.mjs",
    "src": "../node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-52b67f9d.mjs"
    ]
  },
  "_bootstrap-52b67f9d.mjs": {
    "file": "bootstrap-52b67f9d.mjs",
    "isDynamicEntry": true,
    "dynamicImports": [
      "layouts/default.vue",
      "layouts/nonavbar.vue",
      "pages/about.vue",
      "pages/index.vue",
      "components/H2Title.vue",
      "components/IntroProgramming.vue",
      "components/NavBar.vue",
      "components/NavBarCol.vue",
      "components/NavBarItemRow.vue",
      "components/NavBarItems.vue",
      "components/Welcome.vue"
    ],
    "css": [
      "assets/bootstrap.a482ea76.css"
    ]
  },
  "components/H2Title.vue": {
    "file": "H2Title-b8d02d26.mjs",
    "src": "components/H2Title.vue",
    "isDynamicEntry": true,
    "imports": [
      "_index-994bb298.mjs",
      "_bootstrap-52b67f9d.mjs"
    ]
  },
  "_index-994bb298.mjs": {
    "file": "index-994bb298.mjs",
    "imports": [
      "_bootstrap-52b67f9d.mjs"
    ]
  },
  "components/IntroProgramming.vue": {
    "file": "IntroProgramming-2ef44623.mjs",
    "src": "components/IntroProgramming.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/H2Title.vue",
      "_bootstrap-52b67f9d.mjs",
      "_index-994bb298.mjs"
    ],
    "css": [
      "assets/IntroProgramming.0f69183c.css"
    ],
    "assets": [
      "assets/nuxt.a137bd3c.png",
      "assets/xcode.23c1e5db.png",
      "assets/js.e62a84f4.png",
      "assets/python.e08fec7a.png"
    ]
  },
  "components/NavBar.vue": {
    "file": "NavBar-89f26577.mjs",
    "src": "components/NavBar.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/NavBarItems.vue",
      "components/NavBarCol.vue",
      "_medium-b65a7ace.mjs",
      "_bootstrap-52b67f9d.mjs",
      "components/NavBarItemRow.vue",
      "_index-994bb298.mjs"
    ]
  },
  "components/NavBarItems.vue": {
    "file": "NavBarItems-40d1331e.mjs",
    "src": "components/NavBarItems.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/NavBarItemRow.vue",
      "_index-994bb298.mjs",
      "_bootstrap-52b67f9d.mjs"
    ]
  },
  "components/NavBarCol.vue": {
    "file": "NavBarCol-21a842dc.mjs",
    "src": "components/NavBarCol.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-52b67f9d.mjs"
    ],
    "css": [
      "assets/NavBarCol.2557b04c.css"
    ]
  },
  "_medium-b65a7ace.mjs": {
    "file": "medium-b65a7ace.mjs",
    "assets": [
      "assets/full-type2.939c16a1.svg",
      "assets/medium.479bb130.svg"
    ]
  },
  "components/NavBarItemRow.vue": {
    "file": "NavBarItemRow-1212df7f.mjs",
    "src": "components/NavBarItemRow.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-52b67f9d.mjs"
    ]
  },
  "components/Welcome.vue": {
    "file": "Welcome-44e01d55.mjs",
    "src": "components/Welcome.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/NavBarItems.vue",
      "_bootstrap-52b67f9d.mjs",
      "components/NavBarItemRow.vue",
      "_index-994bb298.mjs"
    ],
    "assets": [
      "assets/ribbon-sm.7ea7e094.svg",
      "assets/ribbon-lg.eb452e64.svg",
      "assets/pc.27c747f4.png"
    ]
  },
  "pages/about.vue": {
    "file": "about-d33be171.mjs",
    "src": "pages/about.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-52b67f9d.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-0cc2f158.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-52b67f9d.mjs",
      "components/Welcome.vue",
      "components/IntroProgramming.vue",
      "components/NavBarItems.vue",
      "components/NavBarItemRow.vue",
      "_index-994bb298.mjs",
      "components/H2Title.vue"
    ]
  },
  "layouts/default.vue": {
    "file": "default-bd240d61.mjs",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/NavBar.vue",
      "_bootstrap-52b67f9d.mjs",
      "components/NavBarItems.vue",
      "components/NavBarItemRow.vue",
      "_index-994bb298.mjs",
      "components/NavBarCol.vue",
      "_medium-b65a7ace.mjs"
    ]
  },
  "layouts/nonavbar.vue": {
    "file": "nonavbar-0a05411a.mjs",
    "src": "layouts/nonavbar.vue",
    "isDynamicEntry": true,
    "imports": [
      "_medium-b65a7ace.mjs",
      "_bootstrap-52b67f9d.mjs"
    ]
  }
};

export { client_manifest as default };
