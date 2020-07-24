const { BrowserWindow } = require("electron");
const path = require("path");

function donotify() {
  Notification.requestPermission().then(function (result) {
    var myNotification = new Notification("SpotfyLike test", {
      body: "Voce favoritou uma música",
      icon:
        "https://cdn130.picsart.com/273220664000211.png?type=webp&to=min&r=640",
    });
  });
}

function openWindow() {
  let top = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    alwaysOnTop: true,
    visibleOnAllWorkspaces: true,
    hasShadow: false,
  });
  top.show();
}
