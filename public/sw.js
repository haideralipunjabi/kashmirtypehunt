if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.747b10aee5f0a3e6a6d1.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.747b10aee5f0a3e6a6d1.js.map",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/a9a7754c.596fa15f607fc8388350.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/a9a7754c.596fa15f607fc8388350.js.map",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/cb1608f2.f2ce72658c976991c585.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/cb1608f2.f2ce72658c976991c585.js.map",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/commons.88f56d421c6a031cbb8e.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/commons.88f56d421c6a031cbb8e.js.map",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.aed317d9a1d9dcaeaf6a.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.aed317d9a1d9dcaeaf6a.js.map",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/framework.2d0daf90a2fa7e03281a.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/framework.2d0daf90a2fa7e03281a.js.map",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/main-bcadfaf446cc2a0bbc80.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/main-bcadfaf446cc2a0bbc80.js.map",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/pages/_app-64bbf10f20e625805eb9.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/pages/_app-64bbf10f20e625805eb9.js.map",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/pages/_error-c6026dd7f81bd63b12be.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/pages/_error-c6026dd7f81bd63b12be.js.map",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/pages/index-82ac0b3bd4e01d8f274b.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/pages/index-82ac0b3bd4e01d8f274b.js.map",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/polyfills-88dcbd1e90ad4b1a5d14.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/polyfills-88dcbd1e90ad4b1a5d14.js.map",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/webpack-245f049e565ebf942e09.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/chunks/webpack-245f049e565ebf942e09.js.map",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/css/bba571506a0bde3e9d5e.css",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/css/bba571506a0bde3e9d5e.css.map",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/vBrg_FmoqQBSNl_xTmewF/_buildManifest.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/_next/static/vBrg_FmoqQBSNl_xTmewF/_ssgManifest.js",revision:"vBrg_FmoqQBSNl_xTmewF"},{url:"/favicons/android-chrome-192x192.png",revision:"86a2f379fe3dc3b653ee8b85dba41948"},{url:"/favicons/android-chrome-512x512.png",revision:"7009741bfe3852050e1803c56bccbaeb"},{url:"/favicons/apple-touch-icon.png",revision:"971ece69d9d672d9ad6fc1b4d7a55b5e"},{url:"/favicons/browserconfig.xml",revision:"e93da9c54ff6042979af674f7c761160"},{url:"/favicons/favicon-16x16.png",revision:"2d1c36ad307758282d6033e3e2969b8c"},{url:"/favicons/favicon-32x32.png",revision:"2708861d3c74632ad80adf0cc7a70fa6"},{url:"/favicons/favicon.ico",revision:"63f095968033ad9691e1b769755777e4"},{url:"/favicons/mstile-144x144.png",revision:"89e83edaca361d4dd05dcb40b399c928"},{url:"/favicons/mstile-150x150.png",revision:"3205af844a71440a9764024144b5a1a6"},{url:"/favicons/mstile-310x150.png",revision:"6abfb1b43d8a6d7ebd35077c1102c36f"},{url:"/favicons/mstile-310x310.png",revision:"f23db877ffd329cfeaea96a7bbfb9ea6"},{url:"/favicons/mstile-70x70.png",revision:"d3d4e252968b743d3727a5a37956de76"},{url:"/favicons/safari-pinned-tab.svg",revision:"29c07e49d59f079cc89c23f7bd1c9534"},{url:"/favicons/site.webmanifest",revision:"ac67f759ca435435d397c60c29a9ac98"},{url:"/images/0.jpg",revision:"91400ac67447d00b6fad5c94bb4e3f02"},{url:"/images/1.jpg",revision:"3e4a95f22c2b8558936afe4dd71e4462"},{url:"/images/10.jpg",revision:"9dc52530eb4f155b355500c2fe37dc73"},{url:"/images/11.jpg",revision:"bb600e0e87e05ebb0891de0067964683"},{url:"/images/12.jpg",revision:"2b0bf076cbdf09b73dca9a84613ecf4a"},{url:"/images/13.jpg",revision:"d5ce90989815ca621ea98d86d414eab0"},{url:"/images/14.jpg",revision:"e29857960e529c813722f99f857cf7fc"},{url:"/images/15.jpg",revision:"efd6b1121520d291d6db7ca3d32a3c44"},{url:"/images/16.jpg",revision:"724108ec8bfeb82dd59e80a715c53b7e"},{url:"/images/17.jpg",revision:"028da6a4f77feb950d5afffc91a6a013"},{url:"/images/18.jpg",revision:"4ed7139b28717db2490889b9c321c51b"},{url:"/images/19.jpg",revision:"e128234cc9c0d1f779c09a8974ae2349"},{url:"/images/2.jpg",revision:"99e8981f50b1f4d5224cc43b3441f1c8"},{url:"/images/20.jpg",revision:"819d8568678d6389c08d82e0611e8eb4"},{url:"/images/21.jpg",revision:"ad7c3a34fe3120237b20dcbe664aaa2f"},{url:"/images/22.jpg",revision:"5d471f4ec84230507544af8e7630dfe5"},{url:"/images/23.jpg",revision:"4b5417028093559bffe36835321b18cd"},{url:"/images/24.jpg",revision:"4f3550147cb6bd5c0f7f51020e202d4d"},{url:"/images/3.jpg",revision:"3c9dd7005b55b4694ae558761215ceeb"},{url:"/images/4.jpg",revision:"229748be3c5cf090ea0c842fcfc59e0a"},{url:"/images/5.jpg",revision:"8c1cf925d25bcda60922a920c924b2be"},{url:"/images/6.jpg",revision:"d7a12288825fcfc1d434e983c8351544"},{url:"/images/7.jpg",revision:"f1d907ad86550a22ddd31085ae9f70f1"},{url:"/images/8.jpg",revision:"c1f9dc1372e833c224617cfcf1fc82f5"},{url:"/images/9.jpg",revision:"f42d4c0825e290129f984104009fe2f5"},{url:"/logo.svg",revision:"7fdb822f928d95970720848639c38693"},{url:"/manifest.json",revision:"48fb6006e07019bfa578440d2a7d07bc"},{url:"/og.png",revision:"157e53949f873261b69376e2a82bc36f"},{url:"/og.svg",revision:"49069b7eb524d248441e27ec19343c35"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
