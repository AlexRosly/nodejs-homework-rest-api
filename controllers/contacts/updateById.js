const { Contacts } = require("../../models");
const { NotFound } = require("http-errors");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contacts.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw new NotFound("Not found");
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: result,
    },
  });
};

module.exports = updateById;
