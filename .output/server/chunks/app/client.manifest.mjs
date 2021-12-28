const client_manifest = {
  "../node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-b9dca245.mjs",
    "src": "../node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-08e2f092.mjs"
    ]
  },
  "_bootstrap-08e2f092.mjs": {
    "file": "bootstrap-08e2f092.mjs",
    "isDynamicEntry": true,
    "dynamicImports": [
      "layouts/default.vue",
      "layouts/nonavbar.vue",
      "pages/about.vue",
      "pages/index.vue",
      "pages/test.vue",
      "components/H2Title.vue",
      "components/IntroProgramming.vue",
      "components/ModalRoot.vue",
      "components/NavBar.vue",
      "components/NavBarCol.vue",
      "components/NavBarItemRow.vue",
      "components/NavBarItems.vue",
      "components/Previewable.vue",
      "components/Welcome.vue"
    ],
    "css": [
      "assets/bootstrap.015a5a3d.css"
    ]
  },
  "components/H2Title.vue": {
    "file": "H2Title-2ab5b14c.mjs",
    "src": "components/H2Title.vue",
    "isDynamicEntry": true,
    "imports": [
      "_index-a865dec8.mjs",
      "_bootstrap-08e2f092.mjs"
    ]
  },
  "_index-a865dec8.mjs": {
    "file": "index-a865dec8.mjs",
    "imports": [
      "_bootstrap-08e2f092.mjs"
    ]
  },
  "components/IntroProgramming.vue": {
    "file": "IntroProgramming-433c4187.mjs",
    "src": "components/IntroProgramming.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/H2Title.vue",
      "components/Previewable.vue",
      "_bootstrap-08e2f092.mjs",
      "_nuxt-e61edaff.mjs",
      "_index-a865dec8.mjs",
      "_states-e86461d2.mjs",
      "_transition.esm-c0d3d44a.mjs"
    ],
    "css": [
      "assets/IntroProgramming.186df0c1.css"
    ],
    "assets": [
      "assets/xcode.23c1e5db.png",
      "assets/js.e62a84f4.png",
      "assets/python.e08fec7a.png"
    ]
  },
  "components/Previewable.vue": {
    "file": "Previewable-be40deb0.mjs",
    "src": "components/Previewable.vue",
    "isDynamicEntry": true,
    "imports": [
      "_states-e86461d2.mjs",
      "_bootstrap-08e2f092.mjs",
      "_transition.esm-c0d3d44a.mjs"
    ]
  },
  "_nuxt-e61edaff.mjs": {
    "file": "nuxt-e61edaff.mjs",
    "assets": [
      "assets/nuxt.a137bd3c.png"
    ]
  },
  "_states-e86461d2.mjs": {
    "file": "states-e86461d2.mjs",
    "imports": [
      "_bootstrap-08e2f092.mjs"
    ]
  },
  "_transition.esm-c0d3d44a.mjs": {
    "file": "transition.esm-c0d3d44a.mjs",
    "imports": [
      "_bootstrap-08e2f092.mjs"
    ]
  },
  "components/ModalRoot.vue": {
    "file": "ModalRoot-ca7c7d07.mjs",
    "src": "components/ModalRoot.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-08e2f092.mjs"
    ]
  },
  "components/NavBar.vue": {
    "file": "NavBar-4c759168.mjs",
    "src": "components/NavBar.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/NavBarItems.vue",
      "components/NavBarCol.vue",
      "_medium-b65a7ace.mjs",
      "_bootstrap-08e2f092.mjs",
      "_transition.esm-c0d3d44a.mjs",
      "components/NavBarItemRow.vue",
      "_index-a865dec8.mjs"
    ]
  },
  "components/NavBarItems.vue": {
    "file": "NavBarItems-1d37c279.mjs",
    "src": "components/NavBarItems.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/NavBarItemRow.vue",
      "_index-a865dec8.mjs",
      "_bootstrap-08e2f092.mjs"
    ]
  },
  "components/NavBarCol.vue": {
    "file": "NavBarCol-0a02109d.mjs",
    "src": "components/NavBarCol.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-08e2f092.mjs"
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
    "file": "NavBarItemRow-03fdfdff.mjs",
    "src": "components/NavBarItemRow.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-08e2f092.mjs"
    ]
  },
  "components/Welcome.vue": {
    "file": "Welcome-08d64715.mjs",
    "src": "components/Welcome.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/NavBarItems.vue",
      "_bootstrap-08e2f092.mjs",
      "components/NavBarItemRow.vue",
      "_index-a865dec8.mjs"
    ],
    "assets": [
      "assets/ribbon-sm.7ea7e094.svg",
      "assets/ribbon-lg.eb452e64.svg",
      "assets/pc.27c747f4.png"
    ]
  },
  "pages/about.vue": {
    "file": "about-83574749.mjs",
    "src": "pages/about.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-08e2f092.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-de335ad0.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-08e2f092.mjs",
      "components/Welcome.vue",
      "components/IntroProgramming.vue",
      "components/H2Title.vue",
      "components/NavBarItems.vue",
      "components/NavBarItemRow.vue",
      "_index-a865dec8.mjs",
      "components/Previewable.vue",
      "_states-e86461d2.mjs",
      "_transition.esm-c0d3d44a.mjs",
      "_nuxt-e61edaff.mjs"
    ]
  },
  "pages/test.vue": {
    "file": "test-55721cd2.mjs",
    "src": "pages/test.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/Previewable.vue",
      "_nuxt-e61edaff.mjs",
      "_bootstrap-08e2f092.mjs",
      "_states-e86461d2.mjs",
      "_transition.esm-c0d3d44a.mjs"
    ]
  },
  "layouts/default.vue": {
    "file": "default-e64680d6.mjs",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "_states-e86461d2.mjs",
      "components/NavBar.vue",
      "components/ModalRoot.vue",
      "_bootstrap-08e2f092.mjs",
      "_transition.esm-c0d3d44a.mjs",
      "components/NavBarItems.vue",
      "components/NavBarItemRow.vue",
      "_index-a865dec8.mjs",
      "components/NavBarCol.vue",
      "_medium-b65a7ace.mjs"
    ]
  },
  "layouts/nonavbar.vue": {
    "file": "nonavbar-dda2c2eb.mjs",
    "src": "layouts/nonavbar.vue",
    "isDynamicEntry": true,
    "imports": [
      "_states-e86461d2.mjs",
      "components/ModalRoot.vue",
      "_medium-b65a7ace.mjs",
      "_bootstrap-08e2f092.mjs",
      "_transition.esm-c0d3d44a.mjs"
    ]
  }
};

export { client_manifest as default };
