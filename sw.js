self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("static")
      .then((cache) => {
        return cache.addAll([
          "./",
          "./assets/index.1d5058d9.css",
          "./assets/Bushido.f8b7c078.png",
          "./assets/inventory.2b29f2de.png",
          "./assets/nswitch.fd9ee3c4.png",
          "./assets/ps5.270df83a.png",
          "./assets/secure.139687f0.png",
          "./assets/shop.cfcf8e14.png",
          "./assets/steam.180e404d.png",
          "./assets/utch.817ae100.png",
          "./assets/xbox.738da36a.png",
          "./assets/bg.5458cc8a.jpg",
          "./assets/landscape.ba94889a.jpg",
          "./assets/Road_Rage.45d908c5.otf",
        ]);
      })
      .catch((e) => console.log(e))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
