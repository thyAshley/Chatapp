import path from "path";
import http from "http";
import express from "express";
import { Socket } from "socket.io";

import {
  generateMessage,
  generateLocationMessage,
} from "./src/services/MessageServices";

const publicPath = path.join(__dirname, "public");
const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

app.use(express.static(publicPath));

io.on("connection", (socket: Socket) => {
  socket.emit("newMessage", generateMessage("Admin", "Welcome to the app"));

  socket.broadcast.emit(
    "newMessage",
    generateMessage("Admin", "A new user has join the chat")
  );

  socket.on(
    "createMessage",
    (message: { from: string; text: string }, callback) => {
      io.emit("newMessage", generateMessage(message.from, message.text));
      callback("This is the server");
    }
  );

  socket.on("createLocationMessage", (coords) => {
    io.emit("newLocationMessage", generateLocationMessage("Admin", coords));
  });

  socket.on("disconnect", () => {
    console.log("User was disconnected from server");
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
