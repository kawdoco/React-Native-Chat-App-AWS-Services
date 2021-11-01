const blacklist = require("metro-config/src/defaults/exclusionList");

module.exports = {
  resolver: {
    blacklistRE: blacklist([/#current-cloud-backend\/.*/]),
  },
};