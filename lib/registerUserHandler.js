"use strict";

const User = require("./User");

module.exports = (io, socket) => {
  const onMessage = (msg) => {
    socket.broadcast.emit("message-broadcast", {
      message: msg,
      userName: User.getUserName(),
    });
  };

  const onDisconnect = (reason) => {
    User.removeUser(User.getUserName(), socket.id);
  };

  socket.on("message", onMessage);
  socket.on("disconnect", onDisconnect);
};
