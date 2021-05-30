const express = require('express');
const routes = express.Router();

const RemController = require('./controllers/RemedioController')
const CliController = require('./controllers/ClienteController')
const CompController = require('./controllers/ComprasController')
const login =require('./middleware/login')

routes.get("/remedios", login,RemController.index)
      .post("/remedios", RemController.store)
      .put("/update/:id",RemController.update)
      .delete("/delete/:id",RemController.destroy)
      .get("/filtro/:palavra",RemController.filtro)
      .put("/destacar/:id",RemController.destacar)
      .get("/destacados/:destaque",RemController.destacados);

routes.get("/clientes", CliController.index)
      .post("/clientes", CliController.store)
      .post("/login", CliController.login);

routes.get("/compras", CompController.index)
      .post("/compras", CompController.store)
      .put("/compras/update/:id",CompController.update)
      .get("/estatistica/compras", CompController.estatistica);




module.exports = routes;