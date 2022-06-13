"user strict";

let io;
const User = require("./lib/User");

const onConnection = (socket) => {
  const registerUserHandler = require("./lib/registerUserHandler")(io, socket);

  socket.broadcast.emit("user-list", [...User.getUserList().keys()]);

  console.log("new client connected", socket.id);
};

module.exports = {
  init: (server, options = {}) => {
    if (process.env.NODE_ENV === "DEV")
      options.cors = {
        origin: "*",
      };

    io = require("socket.io")(server, options);

    io.on("connection", onConnection);
  },

  getIo: () => {
    if (!io) throw new Error("Socket.io not initialized");
    return io;
  },
};
