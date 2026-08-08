/* PitchLedger service worker — offline cache, network-first for the app shell */
var CACHE = "pitchledger-v2";
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){
    return c.addAll(["./index.html", "./manifest.webmanifest"]);
  }).catch(function(){}));
  self.skipWaiting();
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }));
  self.clients.claim();
});
self.addEventListener("fetch", function(e){
  e.respondWith(
    fetch(e.request).then(function(res){
      var copy = res.clone();
      caches.open(CACHE).then(function(c){ c.put(e.request, copy); }).catch(function(){});
      return res;
    }).catch(function(){
      return caches.match(e.request).then(function(m){ return m || caches.match("./index.html"); });
    })
  );
});
