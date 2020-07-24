function donotify() {
  Notification.requestPermission().then(function (result) {
    var myNotification = new Notification("SpotfyLike test", {
      body: "Voce favoritou uma música",
      icon:
        "https://cdn130.picsart.com/273220664000211.png?type=webp&to=min&r=640",
    });
  });
}
