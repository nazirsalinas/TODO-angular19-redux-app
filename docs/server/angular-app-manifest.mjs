
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 899, hash: 'dc0785df141cf785827aa33b4a2b7e0775d4e5b7d3f26cc2a226e97c51e2d415', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1021, hash: 'c1cc85cef61800b4a408a5ed65b77011e32008ae6742c5efd7f2ff14d9fa5d11', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9858, hash: 'c861c09fcb1b0682f257291a745c2981f1f9a3616f3ec5092b435ab081faa5db', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PROXTS4M.css': {size: 5615, hash: 'i4/24Q4oo7g', text: () => import('./assets-chunks/styles-PROXTS4M_css.mjs').then(m => m.default)}
  },
};
