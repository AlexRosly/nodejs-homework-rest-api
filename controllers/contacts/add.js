const { Contacts } = require("../../models");

const add = async (req, res) => {
  const result = await Contacts.create(req.body);
  res.status(201).json({
    message: "succes",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
