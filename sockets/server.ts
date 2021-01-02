import path from "path";
import http from "http";
import express from "express";
import { Socket } from "socket.io";

const publicPath = path.join(__dirname, "public");
const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

app.use(express.static(publicPath));

io.on("connection", (socket: Socket) => {
  socket.emit("newMessage", {
    from: "Admin",
    text: "Welcome to the chat App",
    createdAt: new Date().getTime(),
  });

  socket.broadcast.emit("newMessage", {
    from: "Admin",
    text: "A new user has join the chat",
    createdAt: new Date().getTime(),
  });

  socket.on("createMessage", (message: { from: string; text: string }) => {
    console.log(message);
    socket.emit("newMessage", {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime(),
    });
  });

  socket.on("disconnect", () => {
    console.log("User was disconnected from server");
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
