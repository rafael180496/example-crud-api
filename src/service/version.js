/*
request es lo recibis
response es la respuesta del servidor
*/
const { request, response } = require("express");

const version = (req = request, res = response) => {
  res.status(200).json({
    msg: process.env.API_VERSION,
  });
};

module.exports = { version };
