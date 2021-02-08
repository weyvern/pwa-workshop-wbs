// Caching
const cacheName = 'random-posts-cache';
// Resources we want to cache
const resourcesToPreCache = [
  '/',
  '/index.html',
  'app.js',
  '/assets/200.gif',
  'https://bootswatch.com/4/flatly/bootstrap.min.css',
  'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap',
  'https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXg.woff2'
];
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
