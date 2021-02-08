// Caching
const cacheName = 'random-posts-cache';
// Resources we want to cache
const resourcesToPreCache = ['/', '/index.html', 'app.js'];
// Install event
self.addEventListener('install', async event => {
  try {
    const cache = await caches.open(cacheName);
    cache.addAll(resourcesToPreCache);
    console.log('Success, resources were cached!');
  } catch (error) {
    console.log('Error while caching: ', error);
  }
});
// Activation event
self.addEventListener('activate', event => {
  console.log('Activate event!');
});
// Fetch event
self.addEventListener('fetch', async event => {
  const cachedResponse = await event.respondWith(caches.match(event.request));
  return cachedResponse || fetch(event.request);
});
