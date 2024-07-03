import { Socket } from "socket.io";
import http from "http";
import express from "express";
import { Server } from "socket.io"
import { UserManager } from "./managers/UserManager";

const app = express();
const server = http.createServer(http);
const PORT= 3000;

const userManager= new UserManager();

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket: Socket) => {
    console.log('A user is connected');
    userManager.addUser("user", socket);
    socket.on("disconnect", ()=> {
        userManager.removeUser(socket.id);
    })
});

server.listen(PORT, ()=> {
    console.log(`Listening at PORT: ${PORT}`)
});