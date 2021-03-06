const static_uCentral = "uCentral-site-v1.1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/js/ui.js",
  "/js/notify.js",
  "/images/logo.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(static_uCentral).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
