'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "47e3a0600847c96b9dc17c4b38d67a54",
"assets/AssetManifest.bin.json": "ccc789d085daffc360bfa3c767a7bedc",
"assets/AssetManifest.json": "3fd1f46d8c70f8f79de3510d1e0152a7",
"assets/assets/illustration/option_illustration.png": "45a478094445362f05f5018494bea367",
"assets/assets/illustration/Otp.png": "7dc3f2d434b06aecaface6696920416a",
"assets/assets/illustration/signin.png": "4d35dc6137b938b92523abcc27298c3a",
"assets/assets/illustration/Signup.png": "eeeaaa0ea006a645856593c29428f3cc",
"assets/assets/images/google_icon.png": "ffeafbc8024c0c18e25e648d8bafc3f5",
"assets/assets/images/logowith%2520ladscape.png": "164f3a5c29a053782adf72f69c1ffad3",
"assets/assets/images/profile.png": "87170c7a02166610e29d4b9290e55a97",
"assets/assets/images/shopsphere.png": "0b52fad3a1c8f4b8c783cfb3ae068980",
"assets/assets/lottie/Emptybox.json": "95f7ecb904ae6ab0d00b82e2b4231772",
"assets/assets/lottie/loading%2520animation.json": "e5946958568db209ac578b2506b76782",
"assets/assets/r.json": "e47802788447fe2153ac21f3ce3ee4e1",
"assets/FontManifest.json": "d90e8cbba78e38ff581f06684d83c41c",
"assets/fonts/MaterialIcons-Regular.otf": "2158749c4fbe8bda30ca46eecbab9920",
"assets/NOTICES": "a2e5f561dbb98f15fff5c5a4c9c79364",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4c547ada6c164a77a3cfce8b7feee86d",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "1c9584831b5b2c91f0f13e60677211de",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "58875d41f6bf07790532f5d9be6612a6",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "6c63d0c1ccd5ae46d2311b6585494b95",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "d63e715be33c8141f93b9f903ec1d115",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "bf9520425b5a3c38255797ba578b3638",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "a7939ddb6ad4fa70e221fd2fec09eb6a",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "ee7b0f7221dcb59b5a356e73e7285d83",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "049d1cf3fee4f855274fc55184c44f73",
"assets/packages/wechat_assets_picker/assets/icon/indicator-live-photos.png": "a96d2373c82eb49440e29d2fcbd21d37",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "e6ffe32ff790907289f4c184cbb46b5a",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "bdd894b506b40452e213cca41524268a",
"icons/Icon-192.png": "8f1d2171ed11e91fddec04a68bb08275",
"icons/Icon-512.png": "49b6a50e220c1da66dc74fd4d4aafa8d",
"icons/Icon-maskable-192.png": "8f1d2171ed11e91fddec04a68bb08275",
"icons/Icon-maskable-512.png": "49b6a50e220c1da66dc74fd4d4aafa8d",
"index.html": "31681931c01e1a1f53de07a203c3ec96",
"/": "31681931c01e1a1f53de07a203c3ec96",
"main.dart.js": "058c78eaa9fad6ee94ba6fc501096f32",
"manifest.json": "12494a2451d038322e4de3bb20f62cc1",
"version.json": "de7fe1a727af698bc6c7c9fa837f36c3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
