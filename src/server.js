require("dotenv").config();
const express = require("express");
const { version } = require("./service/version");
const { listItemFunc, registerItemFunc } = require("./service/crud");
const cors = require("cors");
const { json, urlencoded } = require("body-parser");

const app = express();
//configuraciones de nuestro servicio
const port = process.env.API_PORT || 3000;
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

/*
TIPOS DE PETICIONES DEL PROTOCOLO HTTP:

PUT ACTULIZACION
POST INSERCION
DELETE ELIMINACION
GET ENLISTAR DATOS O OBTENER
OPTION CONFIGURAR

*/

app.get("/", version);
app.get("/item/list", listItemFunc);
app.post("/item", registerItemFunc);
console.log("{port}:", port);
app.listen(port);
