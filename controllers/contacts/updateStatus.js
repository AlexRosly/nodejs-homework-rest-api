const { Contacts } = require("../../models");
const { NotFound } = require("http-errors");

const updateStatus = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await Contacts.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );
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

module.exports = updateStatus;
