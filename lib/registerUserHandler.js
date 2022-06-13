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

  const onSetUserName = (userName) => {
    User.setUserName(userName);
    User.addUser(userName, socket.id);
    console.log("name", User.getUserName(), "list", User.getUserList());

    io.emit("user-list", User.getUserList());
  };

  socket.on("message", onMessage);
  socket.on("disconnect", onDisconnect);
  socket.on("set-user-name", onSetUserName);
};
