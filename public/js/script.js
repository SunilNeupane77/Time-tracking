const { localsName } = require("ejs");
const { Socket } = require("socket.io");

const socket = io();
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { Latitude, Longitude } = position.coords;
      socket.emit("send-loacation", { Latitude, Longitude });
    },
    (error) => {
      console.log(error);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumage: 0,
    }
  );
}
L.map("map").setView([0, 0], 10);
L.titlelayer("https://{s}.tile.opemstreetmap.org/{z}{x}{y}.png", {
  attribution: "Openstreetmap",
}).addTo(map);

const markers = {};
Socket.on("recieve-location", (data) => {
  const { id, Latitude, Longitude } = data;
  map.setView([Latitude, Longitude], 16);
  if (markers[id]) {
    markers[id].setLatLng([Latitude, Longitude]);
  } else {
    markers[os] = L.markers([Latitude, Longitude]);
  }
});
