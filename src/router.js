require("dotenv").config({ path: "variables.env" });
const express = require("express");

const produtosController = require("./controllers/produtosController");

const router = express.Router();

router.get("/produtos", produtosController.all);
router.get("/produtos/:id", produtosController.one);
router.post("/produtos", produtosController.new);
router.put("/produtos/:id", produtosController.edit);
router.delete("/produtos/:id", produtosController.delete);

module.exports = router;
