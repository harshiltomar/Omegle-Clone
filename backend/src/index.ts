import { Socket } from "socket.io";
import http from "http";
const express= require("express");
const { Server } = require("socket.io")

const app = express();
const server = http.createServer(http);
const PORT= 3000;

const io = new Server(server);

io.on('connection', (socket: Socket) => {
    console.log('A user is connected');
})

server.listen(PORT, ()=> {
    console.log(`Listening at PORT: ${PORT}`)
});