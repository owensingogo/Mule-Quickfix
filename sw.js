const CACHE_NAME = "mule-quickfix-v1";

const APP_FILES = [
  "./",
  "./index.html",
  "./login.html",
  "./register.html",
  "./manifest.json",
  "./firebase.js",

  "./customer/dashboard.html",
  "./customer/request-service.html",

  "./technician/register.html",
  "./technician/dashboard.html",

  "./ceo/dashboard.html",

  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(APP_FILES);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});