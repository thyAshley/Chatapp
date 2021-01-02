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
  console.log("A new user is connected");

  socket.on("createMessage", (message: { from: string; text: string }) => {
    console.log(message);
    io.emit("newMessage", {
      from: message.from,
      text: message.text,
    });
  });

  socket.emit("newMessage", {
    from: "Backend",
    text: "reply from backend",
  });

  socket.on("disconnect", () => {
    console.log("User was disconnected from server");
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
