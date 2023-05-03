const register = require("./auth");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSubscriptionUser = require("./updateSubscriptionUser");
const updateAvatar = require("./updateAvatar");
const sizeAvatar = require("./sizeAvatar");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateSubscriptionUser,
  updateAvatar,
  sizeAvatar,
};
