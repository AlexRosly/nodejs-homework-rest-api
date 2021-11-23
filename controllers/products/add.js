const contactsOperation = require("../../model");

const add = async (req, res) => {
  const result = await contactsOperation.addContact(req.body);
  res.status(201).json({
    message: "succes",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
