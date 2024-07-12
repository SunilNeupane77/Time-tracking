const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));
io.on("connection", (socket) => {
  console.log("Connection Successfully");
});

const port = 3000;

app.get("/", (req, res) => res.render("index"));
server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
