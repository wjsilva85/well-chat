"use strict";

const userList = new Map();
let userName;

module.exports = {
  setUserName: (name) => {
    userName = name;
  },

  getUserName: () => {
    return userName || null;
  },

  addUser: (userName, id) => {
    if (!userList.has(userName)) userList.set(userName, new Set(id));

    userList.get(userName).add(id);
  },

  getUserList: () => {
    return userList;
  },

  removeUser: (userName, id) => {
    if (!userList.has(userName)) return;

    userList.get(userName).delete(id);

    if (userList.get(userName).size === 0) userList.delete(userName);
  },
};
