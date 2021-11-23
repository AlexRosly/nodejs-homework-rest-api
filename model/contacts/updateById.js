const listContacts = require("./listContacts");
const updateContact = require("./updateContacts");

const updateById = async (id, data) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { id, ...data };
  await updateContact(contacts);
  return contacts[idx];
};

module.exports = updateById;
