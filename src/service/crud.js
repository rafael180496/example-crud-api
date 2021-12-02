const { listItems } = require("../model/crudModal");
const { request, response } = require("express");

/*
--LIST
--REGISTER
--GET ID
--DELETE
--UPDATE

*/
/*
{
    "id":"",
    "name":"",
    "age":0,
    "deleted":true||false,
    "created":utc|| fecha
}

*/

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

module.exports = { listItemFunc };
