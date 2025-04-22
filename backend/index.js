const {Server} = require('socket.io');
const express = require('express');
const app = express();
const http  = require('http')
const cors = require('cors');
const server = http.createServer(app);
const io = new Server(server,{
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET"]
  }
});
app.use('/', (req, res)=>{
  
  res.send('hello');
})
io.on("connection",(socket) => {
  socket.join("room1")  
  socket.emit('hello', "welcome to room1");
  socket.on('hello', (msg) => {
    console.log("Client says:", msg);
    const data = `this message from ${socket.id}: ${msg}`
    socket.to("room1").emit("hel", data);
  });
  socket.on("disconnect", () => {
    console.log(socket.rooms.size)
  });
 });

server.listen(3000);
