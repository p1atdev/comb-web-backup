const client_manifest = {
  "../node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-9b7ff38a.mjs",
    "src": "../node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-e5702bc3.mjs"
    ]
  },
  "_bootstrap-e5702bc3.mjs": {
    "file": "bootstrap-e5702bc3.mjs",
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
      "components/Previewable.vue",
      "components/Welcome.vue"
    ],
    "css": [
      "assets/bootstrap.4456b833.css"
    ]
  },
  "components/H2Title.vue": {
    "file": "H2Title-5811c4f2.mjs",
    "src": "components/H2Title.vue",
    "isDynamicEntry": true,
    "imports": [
      "_index-5b832ac2.mjs",
      "_bootstrap-e5702bc3.mjs"
    ]
  },
  "_index-5b832ac2.mjs": {
    "file": "index-5b832ac2.mjs",
    "imports": [
      "_bootstrap-e5702bc3.mjs"
    ]
  },
  "components/IntroProgramming.vue": {
    "file": "IntroProgramming-577c5917.mjs",
    "src": "components/IntroProgramming.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/H2Title.vue",
      "components/Previewable.vue",
      "_bootstrap-e5702bc3.mjs",
      "_index-5b832ac2.mjs"
    ],
    "css": [
      "assets/IntroProgramming.1b14f93b.css"
    ],
    "assets": [
      "assets/nuxt.a137bd3c.png",
      "assets/xcode.23c1e5db.png",
      "assets/js.e62a84f4.png",
      "assets/python.e08fec7a.png"
    ]
  },
  "components/Previewable.vue": {
    "file": "Previewable-c0e56eee.mjs",
    "src": "components/Previewable.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-e5702bc3.mjs"
    ]
  },
  "components/NavBar.vue": {
    "file": "NavBar-23fb25e5.mjs",
    "src": "components/NavBar.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/NavBarItems.vue",
      "components/NavBarCol.vue",
      "_medium-b65a7ace.mjs",
      "_bootstrap-e5702bc3.mjs",
      "components/NavBarItemRow.vue",
      "_index-5b832ac2.mjs"
    ]
  },
  "components/NavBarItems.vue": {
    "file": "NavBarItems-7f6bd2b0.mjs",
    "src": "components/NavBarItems.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/NavBarItemRow.vue",
      "_index-5b832ac2.mjs",
      "_bootstrap-e5702bc3.mjs"
    ]
  },
  "components/NavBarCol.vue": {
    "file": "NavBarCol-9ef547e9.mjs",
    "src": "components/NavBarCol.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-e5702bc3.mjs"
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
    "file": "NavBarItemRow-27bae768.mjs",
    "src": "components/NavBarItemRow.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-e5702bc3.mjs"
    ]
  },
  "components/Welcome.vue": {
    "file": "Welcome-65e003f5.mjs",
    "src": "components/Welcome.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/NavBarItems.vue",
      "_bootstrap-e5702bc3.mjs",
      "components/NavBarItemRow.vue",
      "_index-5b832ac2.mjs"
    ],
    "assets": [
      "assets/ribbon-sm.7ea7e094.svg",
      "assets/ribbon-lg.eb452e64.svg",
      "assets/pc.27c747f4.png"
    ]
  },
  "pages/about.vue": {
    "file": "about-1df4be34.mjs",
    "src": "pages/about.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-e5702bc3.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-9029f7c7.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-e5702bc3.mjs",
      "components/Welcome.vue",
      "components/IntroProgramming.vue",
      "components/H2Title.vue",
      "components/NavBarItems.vue",
      "components/NavBarItemRow.vue",
      "_index-5b832ac2.mjs",
      "components/Previewable.vue"
    ]
  },
  "layouts/default.vue": {
    "file": "default-578b343c.mjs",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/NavBar.vue",
      "_bootstrap-e5702bc3.mjs",
      "components/NavBarItems.vue",
      "components/NavBarItemRow.vue",
      "_index-5b832ac2.mjs",
      "components/NavBarCol.vue",
      "_medium-b65a7ace.mjs"
    ]
  },
  "layouts/nonavbar.vue": {
    "file": "nonavbar-dafaddf4.mjs",
    "src": "layouts/nonavbar.vue",
    "isDynamicEntry": true,
    "imports": [
      "_medium-b65a7ace.mjs",
      "_bootstrap-e5702bc3.mjs"
    ]
  }
};

export { client_manifest as default };
