// sw.js
//const VERSION = "<%= hash %>";
const ORIGIN = location.protocol + '//' + location.hostname;

//const STATIC_CACHE_KEY = 'static-' + VERSION;
const STATIC_CACHE_KEY = '0.9.7.1';
const STATIC_FILES = [
  ORIGIN + '/',
  ORIGIN + '/favicon/android-chrome-128x128.png',
  ORIGIN + '/favicon/android-chrome-144x144.png',
  ORIGIN + '/favicon/android-chrome-152x152.png',
  ORIGIN + '/favicon/android-chrome-192x192.png',
  ORIGIN + '/favicon/android-chrome-256x256.png',
  ORIGIN + '/favicon/android-chrome-36x36.png',
  ORIGIN + '/favicon/android-chrome-384x384.png',
  ORIGIN + '/favicon/android-chrome-48x48.png',
  ORIGIN + '/favicon/android-chrome-512x512.png',
  ORIGIN + '/favicon/android-chrome-72x72.png',
  ORIGIN + '/favicon/android-chrome-96x96.png',
  ORIGIN + '/favicon/apple-touch-icon-114x114-precomposed.png',
  ORIGIN + '/favicon/apple-touch-icon-114x114.png',
  ORIGIN + '/favicon/apple-touch-icon-120x120-precomposed.png',
  ORIGIN + '/favicon/apple-touch-icon-120x120.png',
  ORIGIN + '/favicon/apple-touch-icon-144x144-precomposed.png',
  ORIGIN + '/favicon/apple-touch-icon-144x144.png',
  ORIGIN + '/favicon/apple-touch-icon-152x152-precomposed.png',
  ORIGIN + '/favicon/apple-touch-icon-152x152.png',
  ORIGIN + '/favicon/apple-touch-icon-180x180-precomposed.png',
  ORIGIN + '/favicon/apple-touch-icon-180x180.png',
  ORIGIN + '/favicon/apple-touch-icon-57x57-precomposed.png',
  ORIGIN + '/favicon/apple-touch-icon-57x57.png',
  ORIGIN + '/favicon/apple-touch-icon-60x60-precomposed.png',
  ORIGIN + '/favicon/apple-touch-icon-60x60.png',
  ORIGIN + '/favicon/apple-touch-icon-72x72-precomposed.png',
  ORIGIN + '/favicon/apple-touch-icon-72x72.png',
  ORIGIN + '/favicon/apple-touch-icon-76x76-precomposed.png',
  ORIGIN + '/favicon/apple-touch-icon-76x76.png',
  ORIGIN + '/favicon/apple-touch-icon-precomposed.png',
  ORIGIN + '/favicon/apple-touch-icon.png',
  ORIGIN + '/favicon/favicon.ico',
  ORIGIN + '/favicon/icon-128x128.png',
  ORIGIN + '/favicon/icon-144x144.png',
  ORIGIN + '/favicon/icon-152x152.png',
  ORIGIN + '/favicon/icon-160x160.png',
  ORIGIN + '/favicon/icon-16x16.png',
  ORIGIN + '/favicon/icon-192x192.png',
  ORIGIN + '/favicon/icon-196x196.png',
  ORIGIN + '/favicon/icon-24x24.png',
  ORIGIN + '/favicon/icon-256x256.png',
  ORIGIN + '/favicon/icon-32x32.png',
  ORIGIN + '/favicon/icon-36x36.png',
  ORIGIN + '/favicon/icon-384x384.png',
  ORIGIN + '/favicon/icon-48x48.png',
  ORIGIN + '/favicon/icon-512x512.png',
  ORIGIN + '/favicon/icon-72x72.png',
  ORIGIN + '/favicon/icon-96x96.png',
  ORIGIN + '/favicon/mstile-144x144.png',
  ORIGIN + '/favicon/mstile-150x150.png',
  ORIGIN + '/favicon/mstile-144x144.png',
  ORIGIN + '/favicon/mstile-144x144.png',
  ORIGIN + '/favicon/mstile-144x144.png',
  ORIGIN + '/majiang/autoplay.html',
  ORIGIN + '/majiang/hule.html',
  ORIGIN + '/majiang/icon.png',
  ORIGIN + '/majiang/index.html',
  ORIGIN + '/majiang/paiga.html',
  ORIGIN + '/majiang/paili.html',
  ORIGIN + '/majiang/paipu.html',
  ORIGIN + '/majiang/audio/chii.wav',
  ORIGIN + '/majiang/audio/dahai11.wav',
  ORIGIN + '/majiang/audio/kan.wav',
  ORIGIN + '/majiang/audio/pon.wav',
  ORIGIN + '/majiang/audio/richi.wav',
  ORIGIN + '/majiang/audio/ron.wav',
  ORIGIN + '/majiang/audio/tsumo.wav',
  ORIGIN + '/majiang/css/desktop.css',
  ORIGIN + '/majiang/css/file.css',
  ORIGIN + '/majiang/css/smartphone.css',
  ORIGIN + '/majiang/css/style.css',
  ORIGIN + '/majiang/css/tablet.css',
  ORIGIN + '/majiang/img/100.gif',
  ORIGIN + '/majiang/img/1000.gif',
  ORIGIN + '/majiang/img/10000.gif',
  ORIGIN + '/majiang/img/5000.gif',
  ORIGIN + '/majiang/img/logo.png',
  ORIGIN + '/majiang/img/m0.gif',
  ORIGIN + '/majiang/img/m1.gif',
  ORIGIN + '/majiang/img/m2.gif',
  ORIGIN + '/majiang/img/m3.gif',
  ORIGIN + '/majiang/img/m4.gif',
  ORIGIN + '/majiang/img/m5.gif',
  ORIGIN + '/majiang/img/m6.gif',
  ORIGIN + '/majiang/img/m7.gif',
  ORIGIN + '/majiang/img/m8.gif',
  ORIGIN + '/majiang/img/m9.gif',
  ORIGIN + '/majiang/img/p0.gif',
  ORIGIN + '/majiang/img/p1.gif',
  ORIGIN + '/majiang/img/p2.gif',
  ORIGIN + '/majiang/img/p3.gif',
  ORIGIN + '/majiang/img/p4.gif',
  ORIGIN + '/majiang/img/p5.gif',
  ORIGIN + '/majiang/img/p6.gif',
  ORIGIN + '/majiang/img/p7.gif',
  ORIGIN + '/majiang/img/p8.gif',
  ORIGIN + '/majiang/img/p9.gif',
  ORIGIN + '/majiang/img/pai.gif',
  ORIGIN + '/majiang/img/pai2.gif',
  ORIGIN + '/majiang/img/s0.gif',
  ORIGIN + '/majiang/img/s1.gif',
  ORIGIN + '/majiang/img/s2.gif',
  ORIGIN + '/majiang/img/s3.gif',
  ORIGIN + '/majiang/img/s4.gif',
  ORIGIN + '/majiang/img/s5.gif',
  ORIGIN + '/majiang/img/s6.gif',
  ORIGIN + '/majiang/img/s7.gif',
  ORIGIN + '/majiang/img/s8.gif',
  ORIGIN + '/majiang/img/s9.gif',
  ORIGIN + '/majiang/img/z1.gif',
  ORIGIN + '/majiang/img/z2.gif',
  ORIGIN + '/majiang/img/z3.gif',
  ORIGIN + '/majiang/img/z4.gif',
  ORIGIN + '/majiang/img/z5.gif',
  ORIGIN + '/majiang/img/z6.gif',
  ORIGIN + '/majiang/img/z7.gif',
  ORIGIN + '/majiang/js/file.js',
  ORIGIN + '/majiang/js/game.js',
  ORIGIN + '/majiang/js/hule.js',
  ORIGIN + '/majiang/js/jquery-2.1.4.min.js',
  ORIGIN + '/majiang/js/majiang.js',
  ORIGIN + '/majiang/js/model.js',
  ORIGIN + '/majiang/js/paili.js',
  ORIGIN + '/majiang/js/paipu.js',
  ORIGIN + '/majiang/js/player.js',
  ORIGIN + '/majiang/js/suanpai.js',
  ORIGIN + '/majiang/js/ui.js',
  ORIGIN + '/majiang/js/view.js',
  ORIGIN + '/majiang/js/xiangting.js',
];

const CACHE_KEYS = [
  STATIC_CACHE_KEY
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE_KEY).then(cache => {
      return Promise.all(
        STATIC_FILES.map(url => {
          return fetch(new Request(url, { cache: 'no-cache', mode: 'no-cors' })).then(response => {
            return cache.put(url, response);
          });
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => {
          return !CACHE_KEYS.includes(key);
        }).map(key => {
          return caches.delete(key);
        })
      );
    })
  );
});