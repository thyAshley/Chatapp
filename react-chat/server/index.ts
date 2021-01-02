import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";

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
  console.log("User is connected");
  socket.on("disconnect", () => {
    console.log("User is disconnected");
  });
  socket.on("join", (data, callback) => {
    console.log(data);
  });
});

app.use("/", appRouter);

server.listen(PORT, () => {
  console.log(`✔ Server start on port ${PORT}`);
});
