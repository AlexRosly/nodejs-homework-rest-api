const Jimp = require("jimp");

const avatarHandler = async (tempUploadth) => {
  const img = await Jimp.read(tempUploadth);
  await img
    .autocrop()
    .cover(250, 250, Jimp.HORIZONTAL_ALIGN_CENTER || Jimp.VERTICAL_ALIGN_MIDDLE)
    .quality(75)
    .writeAsync(tempUploadth);
};

module.exports = avatarHandler;
