// Service worker: guarda o app no aparelho para funcionar sem internet.
// Ao publicar uma versão nova, mude o número abaixo.
const CACHE = 'gcp-campo-v1';
const ARQUIVOS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-192.png', './icon-maskable-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== self.location.origin) return; // relevo (Open-Meteo) vai direto à rede
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(r => r || fetch(e.request).then(resp => {
    const copia = resp.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return resp;
  }).catch(() => caches.match('./index.html'))));
});
