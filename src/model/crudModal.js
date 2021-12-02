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

const updateItem = (data, id) => {
  Items = Items.map((item) => {
    if (item.id === id) {
      item.name = data.name;
      item.age = data.age;
      return item;
    } else {
      return item;
    }
  });
  return data;
};

const deletedItem = (id) => {
  Items = Items.map((item) => {
    if (item.id === id) {
      item.deleted = true;
      return item;
    } else {
      return item;
    }
  });
  return "ok";
};
const findItem = (id) => {
  const itemFilter = R.filter((item) => {
    return item.id === id;
  }, Items);

  return itemFilter.length < 0 ? null : itemFilter[0];
};

module.exports = {
  listItems,
  registerItem,
  updateItem,
  findItem,
  deletedItem,
};
