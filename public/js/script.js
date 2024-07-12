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
