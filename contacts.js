const { nanoid } = require("nanoid");
const fs = require("node:fs/promises");
const path = require("node:path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function writeContacts(contacts) {
  return fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function listContacts() {
  const data = await fs.readFile(contactsPath, { encoding: "utf-8" });
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const contacts = await listContacts();

  const result = contacts.find((item) => item.id === contactId);
  return result || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();

  const indexContact = contacts.findIndex((item) => item.id === contactId);
  if (indexContact === -1) {
    return null;
  }
  const [result] = contacts.splice(indexContact, 1);

  await writeContacts(contacts);
  return result;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();

  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);

  await writeContacts(contacts);
  return newContact || null;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
