// Register the service worker and cache the single HTML file
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('line-memorization-cache').then(function(cache) {
      return cache.addAll([
        '/LMA/index.html',  // Cache the index.html file correctly
      ]);
    })
  );
});

// Intercept fetch requests and serve from the cache if available
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Return cached file or fetch from network if not in cache
      return response || fetch(event.request);
    })
  );
});