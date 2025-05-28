const CACHE_NAME = 'wallpapers-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/admin.html',
  '/login.html',
  '/register.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/assets/icons/icon-192x192.png',
  '/assets/icons/icon-512x512.png',
  // Add other assets here
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
