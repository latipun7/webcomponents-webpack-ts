if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,a,n)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const o={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return c;case"module":return o;default:return e(s)}}))).then((e=>{const s=n(...e);return c.default||(c.default=s),c}))})))}}define("./service-worker.js",["./workbox-772bf5fd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/webcomponents-webpack-ts/assets/a7e3e602-320.webp",revision:"26fb647130601f5af95f923827ff07ce"},{url:"/webcomponents-webpack-ts/assets/android-chrome-144x144.png",revision:"25d5ff5a16f8037ede38babe0d8eefda"},{url:"/webcomponents-webpack-ts/assets/android-chrome-192x192.png",revision:"7b35b855cd18b898de4390fd1c18854a"},{url:"/webcomponents-webpack-ts/assets/android-chrome-256x256.png",revision:"ddd9b3496d753af783543527ea16a3f2"},{url:"/webcomponents-webpack-ts/assets/android-chrome-36x36.png",revision:"c33d61e3b3eea1e7ea8a3ce49371b012"},{url:"/webcomponents-webpack-ts/assets/android-chrome-384x384.png",revision:"8c2a0c6e439ebda2987757df00e4012f"},{url:"/webcomponents-webpack-ts/assets/android-chrome-48x48.png",revision:"1597999f3fd507d1e9a1b41b4f2fa99d"},{url:"/webcomponents-webpack-ts/assets/android-chrome-512x512.png",revision:"b80ee3bbb44bbda1d5136adc234c80bd"},{url:"/webcomponents-webpack-ts/assets/android-chrome-72x72.png",revision:"082c4bcca291b0a0b402ae57fc53a421"},{url:"/webcomponents-webpack-ts/assets/android-chrome-96x96.png",revision:"4d72de7e6d6eee978e0477d3733f21fd"},{url:"/webcomponents-webpack-ts/assets/apple-touch-icon-1024x1024.png",revision:"b25e6e60100dfd99dd8b5eaf08f8a432"},{url:"/webcomponents-webpack-ts/assets/apple-touch-icon-114x114.png",revision:"ea11d1bd6b72953801b7446fd92531e4"},{url:"/webcomponents-webpack-ts/assets/apple-touch-icon-120x120.png",revision:"5de92aa6701461b63a8497b28c870c9b"},{url:"/webcomponents-webpack-ts/assets/apple-touch-icon-144x144.png",revision:"0d09abe2f015e6465c0c4f41d55c9843"},{url:"/webcomponents-webpack-ts/assets/apple-touch-icon-152x152.png",revision:"086562e0b9ceac66a03ed17bf6127bd9"},{url:"/webcomponents-webpack-ts/assets/apple-touch-icon-167x167.png",revision:"aba22fa91dcac4d3c1a80284229503a2"},{url:"/webcomponents-webpack-ts/assets/apple-touch-icon-180x180.png",revision:"f13b55d429c452755e968b5d8dd25719"},{url:"/webcomponents-webpack-ts/assets/apple-touch-icon-57x57.png",revision:"1b33826176ac884e336b1d73313fcd70"},{url:"/webcomponents-webpack-ts/assets/apple-touch-icon-60x60.png",revision:"af3a1057795e9889dc74eb241810a67b"},{url:"/webcomponents-webpack-ts/assets/apple-touch-icon-72x72.png",revision:"e1b63b2f659941eb95782dcce15798b5"},{url:"/webcomponents-webpack-ts/assets/apple-touch-icon-76x76.png",revision:"97b93c10199214c04715a50a6ed60f60"},{url:"/webcomponents-webpack-ts/assets/apple-touch-icon-precomposed.png",revision:"f13b55d429c452755e968b5d8dd25719"},{url:"/webcomponents-webpack-ts/assets/apple-touch-icon.png",revision:"f13b55d429c452755e968b5d8dd25719"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-1125x2436.png",revision:"0cdb6fc7a73753ab9a402791e181ad4d"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-1136x640.png",revision:"242453917e7dfe954c82e40aa13dd064"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-1242x2208.png",revision:"48e8c5e6deeb36126841ed80b9dba945"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-1242x2688.png",revision:"205f332cc38a80f7a3d9eb0bce7da7a5"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-1334x750.png",revision:"e2caa61639b012dd33684f6e4d76fdd8"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-1536x2048.png",revision:"a9b850fa522f727b710aefc1e0eb9953"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-1620x2160.png",revision:"09f63d21ebdd95bd8ce786f92c0a1be1"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-1668x2224.png",revision:"bcea2a644a9a862a34ceb9349b6892c1"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-1668x2388.png",revision:"c8e64f04b525edad189eb3c0a8e8d2dc"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-1792x828.png",revision:"477423781fe2ae817afb4ecfaa93aba7"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-2048x1536.png",revision:"e2ef03cfee33d75318da8a45ba50de07"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-2048x2732.png",revision:"24a7ece4bcbe58f57b65bb601716923f"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-2160x1620.png",revision:"c84d35ac7ac28f3ac7d15399f270b358"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-2208x1242.png",revision:"7138924374238329697985ec528adc0e"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-2224x1668.png",revision:"5f2c9db5e021dba0cd101609208a0c1a"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-2388x1668.png",revision:"3bb79d9c62239f3c922b0cff80d1c8cd"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-2436x1125.png",revision:"dc6d7ee9dbe4d37550e702bf313144a8"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-2688x1242.png",revision:"199e9511491843444242cb0d4182dcc8"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-2732x2048.png",revision:"34271ee69c5ec43e38ca5655d9ecd0f3"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-640x1136.png",revision:"67737bc6a41dfeb2c69193945d5e690c"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-750x1334.png",revision:"a54519efe4bc037696e182b745ca2395"},{url:"/webcomponents-webpack-ts/assets/apple-touch-startup-image-828x1792.png",revision:"3df121d990cdf934fde2d430d887b56e"},{url:"/webcomponents-webpack-ts/assets/browserconfig.xml",revision:"b680a78cad8607407d57a77342f600eb"},{url:"/webcomponents-webpack-ts/assets/coast-228x228.png",revision:"67cfa34560ee4153896935a604717ee0"},{url:"/webcomponents-webpack-ts/assets/favicon-16x16.png",revision:"f3f2c48d5535880f2fa90b92394e11a2"},{url:"/webcomponents-webpack-ts/assets/favicon-32x32.png",revision:"5d6eec1f8b7b61c2ce617189b748659c"},{url:"/webcomponents-webpack-ts/assets/favicon-48x48.png",revision:"1597999f3fd507d1e9a1b41b4f2fa99d"},{url:"/webcomponents-webpack-ts/assets/favicon.ico",revision:"a3c9f36b20b68b2eee820ccf320f4475"},{url:"/webcomponents-webpack-ts/assets/firefox_app_128x128.png",revision:"1c61e3deffbdeb2c65de8e32863dad05"},{url:"/webcomponents-webpack-ts/assets/firefox_app_512x512.png",revision:"17861b3faf66f299ebb72faa97b0b992"},{url:"/webcomponents-webpack-ts/assets/firefox_app_60x60.png",revision:"0ad5da9cbd3ad6fdf0055b2ce0124de9"},{url:"/webcomponents-webpack-ts/assets/manifest.json",revision:"48b3c6aa19ba43c0d3b9144e5c6db859"},{url:"/webcomponents-webpack-ts/assets/manifest.webapp",revision:"5cf796ee3daed1bea29cfeb57e9c1afc"},{url:"/webcomponents-webpack-ts/assets/maskable_icon.png",revision:"82075360789690827d65bc8109b12a3a"},{url:"/webcomponents-webpack-ts/assets/mstile-144x144.png",revision:"25d5ff5a16f8037ede38babe0d8eefda"},{url:"/webcomponents-webpack-ts/assets/mstile-150x150.png",revision:"cec47b9960ece4a2c0f448798bcd2a3f"},{url:"/webcomponents-webpack-ts/assets/mstile-310x150.png",revision:"f61764d442b1236d74c7cd2c745d95f7"},{url:"/webcomponents-webpack-ts/assets/mstile-310x310.png",revision:"cb3e4e6a6164a62ca71c13e8aad23115"},{url:"/webcomponents-webpack-ts/assets/mstile-70x70.png",revision:"822e0e1bdd6df9c38f7a51712db22c87"},{url:"/webcomponents-webpack-ts/assets/yandex-browser-50x50.png",revision:"35d5d9cd77e4ad50db252a4dd56c7c18"},{url:"/webcomponents-webpack-ts/assets/yandex-browser-manifest.json",revision:"8e700fa5b9080e43c420614b43ca09cc"},{url:"/webcomponents-webpack-ts/bundles/webcomponents-ce.js",revision:"d0b7236e28e7c298777befa66b18a070"},{url:"/webcomponents-webpack-ts/bundles/webcomponents-ce.js.LICENSE.txt",revision:"edfbec94c3d85957a30b133592929851"},{url:"/webcomponents-webpack-ts/bundles/webcomponents-pf_dom.js",revision:"a784ae30e6a824961a4451b34fff2e0c"},{url:"/webcomponents-webpack-ts/bundles/webcomponents-pf_dom.js.LICENSE.txt",revision:"edfbec94c3d85957a30b133592929851"},{url:"/webcomponents-webpack-ts/bundles/webcomponents-pf_js.js",revision:"7864abea8766e073c65bea84cdb271d9"},{url:"/webcomponents-webpack-ts/bundles/webcomponents-pf_js.js.LICENSE.txt",revision:"edfbec94c3d85957a30b133592929851"},{url:"/webcomponents-webpack-ts/bundles/webcomponents-sd-ce-pf.js",revision:"7e4d1c11f8d2acf989a673281222d2aa"},{url:"/webcomponents-webpack-ts/bundles/webcomponents-sd-ce-pf.js.LICENSE.txt",revision:"edfbec94c3d85957a30b133592929851"},{url:"/webcomponents-webpack-ts/bundles/webcomponents-sd-ce.js",revision:"8f8d17715aacd3fc8f8411ca4c9fa967"},{url:"/webcomponents-webpack-ts/bundles/webcomponents-sd-ce.js.LICENSE.txt",revision:"edfbec94c3d85957a30b133592929851"},{url:"/webcomponents-webpack-ts/bundles/webcomponents-sd.js",revision:"16d182e503e4416750d789ae86933b34"},{url:"/webcomponents-webpack-ts/bundles/webcomponents-sd.js.LICENSE.txt",revision:"edfbec94c3d85957a30b133592929851"},{url:"/webcomponents-webpack-ts/custom-elements-es5-adapter.js",revision:"3b6ff4c01a2d559446c2282d6dc9bbc0"},{url:"/webcomponents-webpack-ts/custom-elements-es5-adapter.js.LICENSE.txt",revision:"edfbec94c3d85957a30b133592929851"},{url:"/webcomponents-webpack-ts/index-7cfa7fbb.css",revision:null},{url:"/webcomponents-webpack-ts/index.html",revision:"1979360fac5aabf204c69215b50a2df1"},{url:"/webcomponents-webpack-ts/robots.txt",revision:"99292f3f055534ea2e2cb13eb4dab420"},{url:"/webcomponents-webpack-ts/scripts/94-5728982a.js",revision:null},{url:"/webcomponents-webpack-ts/scripts/index-1f06f9e4.js",revision:null},{url:"/webcomponents-webpack-ts/webcomponents-bundle.js",revision:"663a6a4ccd3edabbee8c19b0f4854d74"},{url:"/webcomponents-webpack-ts/webcomponents-bundle.js.LICENSE.txt",revision:"edfbec94c3d85957a30b133592929851"},{url:"/webcomponents-webpack-ts/webcomponents-loader.js",revision:"c7d9f55830713ddc982a9a67c539f51f"},{url:"/webcomponents-webpack-ts/webcomponents-loader.js.LICENSE.txt",revision:"3775172c83d28a0748bf5e682071bbc9"}],{}),e.registerRoute(/^https:\/\/fonts\.(gstatic|googleapis)\.com/i,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
