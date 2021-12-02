const { Contacts } = require("../../models");
const { NotFound } = require("http-errors");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contacts.findByIdAndRemove(contactId);
  if (!result) {
    throw new NotFound("Not found");
  }
  res.json({
    status: "succes",
    code: 200,
    message: "contact deleted",
    data: {
      result,
    },
  });
};

module.exports = removeById;
