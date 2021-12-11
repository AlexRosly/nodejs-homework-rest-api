const validation = require("./validation");
const ctrlWrapper = require("./ctrlWrapper");
const auth = require("./auth");
const upload = require("./upload");
const avatarHandler = require("./jimp");

module.exports = {
  validation,
  ctrlWrapper,
  auth,
  upload,
  avatarHandler,
};
