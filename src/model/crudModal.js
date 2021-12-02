const R = require("ramda");

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

module.exports = {
  listItems,
};
