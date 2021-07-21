require("dotenv").config({ path: "variables.env" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./router");

const server = express();
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use("/api", routes);

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta:${process.env.PORT}`);
});
