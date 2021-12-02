const R = require("ramda");
const { v4: uuidv4 } = require("uuid");

let Items = [];

const listItems = () => {
  if (Items && Items.length) {
    return R.filter((item) => {
      return !item.deleted;
    }, Items);
  } else {
    return [];
  }
};

const registerItem = (data) => {
  let dataEnd = data;
  dataEnd.created = new Date().toUTCString();
  dataEnd.deleted = false;
  dataEnd.id = uuidv4();
  Items.push(dataEnd);
  return dataEnd;
};

module.exports = {
  listItems,
  registerItem,
};
