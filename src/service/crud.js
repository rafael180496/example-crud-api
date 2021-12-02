const { listItems, registerItem } = require("../model/crudModal");
const { request, response } = require("express");
const { validateJSON } = require("../util/schemaValid");

const SchemaInsert = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "integer" },
  },
  required: ["name", "age"],
};

//Listado de items
const listItemFunc = (req = request, res = response) => {
  const items = listItems();
  if (items && items.length) {
    res.status(200).json({
      status: 200,
      data: items,
    });
  } else {
    res.status(200).json({
      status: 200,
      msg: "items empty",
    });
  }
};

const registerItemFunc = (req = request, res = response) => {
  const { body } = req;
  const respValid = validateJSON(SchemaInsert, body);
  if (respValid.valid) {
    const respModal = registerItem(respValid.data);
    res.status(200).json({
      status: 200,
      data: respModal,
    });
  } else {
    res.status(402).json({
      status: 402,
      error: respValid.err,
    });
  }
};

module.exports = { listItemFunc, registerItemFunc };
