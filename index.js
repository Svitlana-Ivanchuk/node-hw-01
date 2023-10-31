const { listContacts, getContactById } = require("./contacts");

//listContacts()
//  .then((data) => console.log(data))
//  .catch((err) => console.error(err));

getContactById("AeHIrLTr6JkxGE6SN-0Rw")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
