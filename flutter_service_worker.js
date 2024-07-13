'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e50581b7004c4715fba587b1b131c548",
"assets/AssetManifest.bin.json": "15d4754d7dc01577ed5591f10540f6a3",
"assets/AssetManifest.json": "547da34fe1ac586b7cf87ec276423f3f",
"assets/assets/images/ic_facebook.svg": "bc421d3aa129737f370faf0b7d3979ce",
"assets/assets/images/ic_instagram.svg": "f5042b2b22a5b38a5e69ab158ce7ca54",
"assets/assets/images/ic_linkedin.svg": "a928007ef66d8fbfb1153d2ed3366e68",
"assets/assets/images/ic_twitter.svg": "0e2c90398563ec46cb92cd35762e88b2",
"assets/assets/images/ic_youtube.svg": "adff940384f2385b67941a8287c002d8",
"assets/assets/images/img_home1.png": "fc26712e26bc0644fbc9c5b03b82435c",
"assets/assets/images/img_home2.png": "a2a065f23d00620818559e4fbbf66f60",
"assets/assets/images/img_ph1.png": "3671f1073cb6e16f409a52a0ad062f55",
"assets/assets/images/img_ph2.png": "457804bd59da923842b37a9a1f596538",
"assets/assets/images/img_ph3.png": "cc3b4da8110184072185875d526da947",
"assets/assets/images/img_ph4.png": "18e6b9718529a6eb76b9162a0c736f30",
"assets/assets/images/img_ph5.png": "47e99106b77b746390f1f5f926758444",
"assets/assets/images/img_ph6.png": "19632663b0ea2e9f835812e452706dc5",
"assets/assets/images/img_ph7.png": "1fbc7e2b8e63f2c2c9d44419edb380f6",
"assets/assets/images/img_strutkur_organisasi.png": "35823f386cc8539ba68b5ed34ccd2f68",
"assets/assets/images/info1.png": "fdfe65d812d3fb9bce0b3c939a722896",
"assets/assets/images/info2.png": "904a2015f19ffe7d153cd5282f629365",
"assets/assets/images/info3.png": "bfc5eb0f08b84176eb16437ccb133855",
"assets/assets/images/logo.png": "ff5a43d683df59c917b16ff150bfe36d",
"assets/assets/images/logo_hima.png": "4aed8c9f60d15fbb4e20644bddaadb4d",
"assets/assets/images/logo_hima_white.png": "da2f671d5a5cc25cc8f2c12477d8830f",
"assets/assets/images/logo_white.png": "41dc94820e34420257c3dc7b021265ca",
"assets/assets/images/moon.svg": "421322ad9b4b539545397822ed6e03bc",
"assets/assets/images/section2-1.png": "dcc66dcfdbf423b66e0133b00711364b",
"assets/assets/images/section2-2.png": "64558474a076a137e48f9049f17a01c0",
"assets/assets/images/section2-3.png": "d5c079a185e2da70a30c11b1123c2b85",
"assets/assets/images/sun.svg": "7146a98e58d573555f13a85201610819",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a097a07700e3e358bc12667c0f6665d6",
"assets/loading.gif": "4dd25025b5bdea3cab9f73983204bba2",
"assets/NOTICES": "f6b50d58798659cc6bb381405928716e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"flutter_bootstrap.js": "a4d08c52a29694680f96ad3201c11111",
"icons/android-chrome-192x192.png": "8a81ebadedde711561da3e3bc5e18bf5",
"icons/android-chrome-512x512.png": "c5a5087fa1add0a20dde2dbe94a5f69b",
"icons/apple-touch-icon.png": "589451096fc25f25011766997f8cf215",
"index.html": "5e237971faa0faeeb41ae72d649204cc",
"/": "5e237971faa0faeeb41ae72d649204cc",
"logo.png": "25f43e86070774ed71ea39130db19446",
"main.dart.js": "d708c4b9391c9ff466fb1802b44d266d",
"manifest.json": "351c5fbb690e2906fcc5a3fa4c35124a",
"version.json": "314d20ea4c42e5a7124cbce51decad0b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
