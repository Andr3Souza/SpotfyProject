function donotify() {
  Notification.requestPermission().then(function (result) {
    var myNotification = new Notification("SpotfyLike test", {
      body: "Voce favoritou uma música",
    });
  });
}
