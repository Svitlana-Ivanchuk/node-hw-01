const contacts = require("./contacts");
const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contacts
        .listContacts()
        .then((data) => console.table(data))
        .catch((err) => console.error(err));
      break;

    case "get":
      contacts
        .getContactById("AeHIrLTr6JkxGE6SN-0Rw")
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
