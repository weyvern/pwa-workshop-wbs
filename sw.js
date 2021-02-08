// Install event
self.addEventListener('install', event => {
  console.log('Install event!');
});
// Activation event
self.addEventListener('activate', event => {
  console.log('Activate event!');
});
// Fetch event
self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for: ', event.request.url);
});
