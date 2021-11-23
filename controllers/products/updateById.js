const contactsOperation = require("../../model");
const { NotFound } = require("http-errors");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperation.updateById(contactId, req.body);
  if (!result) {
    throw new NotFound("Not found");
  }
  res.json({
    status: "succes",
    code: 200,
    data: {
      result: result,
    },
  });
};

module.exports = updateById;
