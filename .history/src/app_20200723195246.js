function donotify() {
  Notification.requestPermission().then(function (result) {
    var myNotification = new Notification("SpotfyLike test", {
      body: "Voce favoritou uma música",
      icon:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fbilugalatico&psig=AOvVaw1vBmzw3f5-Pyg9FRYFlKAq&ust=1595630684926000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODu_9O55OoCFQAAAAAdAAAAABAD",
    });
  });
}
