import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";

import * as UserService from "./src/services/users";

import appRouter from "./src/routes/appRoutes";

const PORT = process.env.PORT || 5000;

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  socket.on("disconnect", () => {
    const user = UserService.removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left`,
      });
    }
  });
  socket.on("join", (data: { name: string; room: string }, callback) => {
    const { error, user } = UserService.addUser({
      id: socket.id,
      name: data.name,
      room: data.room,
    });
    if (error) return callback(error);
    if (user) {
      socket.emit("message", {
        user: "admin",
        text: `${user.name}, welcome to the ${user.room} room`,
      });
      socket.broadcast
        .to(user.room)
        .emit("message", { user: "admin", text: `${user.name} has join room` });
      socket.join(user.room);
    }
  });

  socket.on("sendMessage", (message: string, callback) => {
    const user = UserService.getUser(socket.id);
    if (!user) return callback("error");
    io.to(user.room).emit("message", { user: user.name, text: message });
    callback();
  });
});

app.use("/", appRouter);

server.listen(PORT, () => {
  console.log(`✔ Server start on port ${PORT}`);
});
