const listContacts = require("./contacts/listContacts");
const getContactById = require("./contacts/getContactById");
const addContact = require("./contacts/addContact");
const removeContact = require("./contacts/removeContact");
const updateById = require("./contacts/updateById");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateById,
};
