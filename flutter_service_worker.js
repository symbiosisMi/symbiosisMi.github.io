'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e3b71f2f4aa01487c4a78d036c0d85d5",
"assets/FontManifest.json": "d361802a5321bd8e686db48f1146c864",
"assets/fonts/AcuminVariableConcept.otf": "f96253aa198755e2134bba52090204f3",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/images/aulastudio.png": "1cc69d4669d528d08d55216946c68bdb",
"assets/images/avatar.png": "6ba35bf82af496ffece2674420f6b576",
"assets/images/bar.png": "45a0416e5f8c9561f102cf7d659be6bd",
"assets/images/bike.png": "7d244734a5a71e16a3a08261ea07837f",
"assets/images/bus.png": "e896ce55b8df7fc80f24ba8d374bd935",
"assets/images/fede.png": "8d61051a4ecc919a4328794d6de9b8bd",
"assets/images/fragole.png": "449a4eec3ceafb091452ab6eeebf3b8d",
"assets/images/giova.png": "67a74dae8e31166ef75ee8c79f6462a8",
"assets/images/impl.png": "7a08b781475c9a12fd84b0f9ef84402b",
"assets/images/melanzane.png": "119bb8fb910adbdb9cdabf326b9e3ed3",
"assets/images/palestra.png": "6c9a4627d4305c03e191317ec8326434",
"assets/images/patate.png": "c9cae5c14771868d98cb93dbcc48f66c",
"assets/images/vitto.png": "289c779a87c92bd1d0a25d1fd838956c",
"assets/images/zucchine.png": "3e7e23b239119b644bd5369f5ee7fceb",
"assets/NOTICES": "bc448a64c3faf97674e3278c40a84c7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "0daa7122ef5cee64e7d088f3f7d2ed45",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/android-icon-144x144.png": "859b4c2d9a77d1bd38db080800fefe4e",
"icons/android-icon-192x192.png": "ccdc1d780a3d7db21b2884f5d07b02f2",
"icons/android-icon-36x36.png": "d92f8e4f4fa0f4ea555b1ee8e1edf65a",
"icons/android-icon-48x48.png": "2987d6a837c54d99edd655da04542989",
"icons/android-icon-72x72.png": "eed3e054d8395403e33cd1af61b71dcd",
"icons/android-icon-96x96.png": "7ee279b83c042bbc0f72f1a8fd384097",
"icons/apple-icon-114x114.png": "0e3a066522176d49f707dc96cff674da",
"icons/apple-icon-120x120.png": "c7b395bf2bbb729066d407ad89a300af",
"icons/apple-icon-144x144.png": "859b4c2d9a77d1bd38db080800fefe4e",
"icons/apple-icon-152x152.png": "0f3e546e10c609e2f06ed2e07ebc92d7",
"icons/apple-icon-180x180.png": "3f9abfd92fc97b3e05a45193444eca25",
"icons/apple-icon-57x57.png": "ff1b6c27a5597218b113191a67ebeb9c",
"icons/apple-icon-60x60.png": "8773f899cf66b7e74b286718fb3c2414",
"icons/apple-icon-72x72.png": "eed3e054d8395403e33cd1af61b71dcd",
"icons/apple-icon-76x76.png": "520e13ea8f9a49fcf067c990e4a201f7",
"icons/apple-icon-precomposed.png": "59b20c6f3e3af4a9e2cb0a48ecd79f16",
"icons/apple-icon.png": "59b20c6f3e3af4a9e2cb0a48ecd79f16",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "e86a41bfedffb265fb3813b62bd862c2",
"icons/favicon-32x32.png": "1ecd2545cdcbe2ebd367dae23e20bac4",
"icons/favicon-96x96.png": "7ee279b83c042bbc0f72f1a8fd384097",
"icons/ms-icon-144x144.png": "859b4c2d9a77d1bd38db080800fefe4e",
"icons/ms-icon-150x150.png": "1b5e58d3750ce3b06ab2dd0e844b77d8",
"icons/ms-icon-310x310.png": "c6b0b1763525ef6ce4af864d27743d80",
"icons/ms-icon-70x70.png": "c35c0bfe023da9d7c42b61e7a45dce7f",
"index.html": "e5743c1ba90fd9372bf5af2897ae4c85",
"/": "e5743c1ba90fd9372bf5af2897ae4c85",
"main.dart.js": "a0122ee337c731fda3b3bf02b9aeda5a",
"manifest.json": "607e18ae83a18e1b266a06eb35033e75",
"version.json": "29d8a204de817c07188797ea189d3ba4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
