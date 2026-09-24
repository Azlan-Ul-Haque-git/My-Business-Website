/* ============================================
   AZIS DIGITAL HUB — Service Worker
   Offline-first caching strategy
   ============================================ */

const CACHE_NAME = 'azis-v2-firestore';

const STATIC_ASSETS = [
  '/index.html',
  '/catalogue.html',
  '/portfolio.html',
  '/contact.html',
  '/templates.html',
  '/service.html',
  '/css/style.css',
  '/js/main.js',
  '/js/firebase-config.js',
  '/js/db.js',
  '/js/firestore-data.js',
  '/js/cookie-consent.js',
  '/js/form.js'
];

/* ── INSTALL: cache core assets ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

/* ── ACTIVATE: clear old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ── FETCH: cache-first for static, network-first for API ── */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin requests
  if (request.method !== 'GET' || url.origin !== location.origin) return;

  // Network-first for HTML pages (always fresh content)
  if (request.headers.get('Accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first for CSS/JS/assets
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
