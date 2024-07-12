const express = require("express");
const http = require("http");
const path = require("path");
const socket = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socket(server);
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));
io.on("connection", (socket) => {
  socket.on("send-location", (data) => {
    io.emit("recieve-location", { id: socketio.id, ...data });
  });
  console.log("Connection Successfully");
});

const port = 3000;

app.get("/", (req, res) => {
  res.render("index");
});
server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
