
const express  = require('express');
const app = express();

// const http = require('http');
//  const path = require('path');
//  app.use(express.static(path.resolve("./")));
// app.get('/', (req, res) => {
//     return res.sendFile("/index.html");
// });
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(5000,() => {
  console.log('Server is running on port 5000');
});



//2

// const http = require('http');

// const express = require('express');
// const{ Server } = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const path = require('path');
// app.use(express.static(path.resolve("./src")));
// app.get('/', (req, res) => {
//     return res.sendFile("/index.html");
// });

// const io = new Server(server);
// //const io = require('socket.io')(server);
// io.on('connection', (socket) => {
//   console.log('User connected');

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// const port = 5000;
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



//3

// const express = require("express");

// const app = express();

// const http = require("http");

// const { Server } = require("socket.io");

// const cors = require("cors");

// app.use(cors());

// const server = http.createServer(app);
// const path = require("path");
// app.use(express.static(path.resolve("./client")));
// app.get('/', (req, res) => {
//     return res.sendFile("/index.html");
// });

// const io = new Server(server,{
//     cors: {
//       origin: "http://localhost:3000",
//       methods: ["GET", "POST"],
//     },
// });


// io.on('connection', (socket) => {
//   console.log('User connected');

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });