const fs = require("fs/promises"); // for works with files
const { v4 } = require("uuid"); //for generate id
const contactsPath = require("./contactsPath");
const listContacts = require("./listContacts");

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = { id: v4(), ...body };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

module.exports = addContact;
