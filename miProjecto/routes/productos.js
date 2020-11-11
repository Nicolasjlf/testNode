//creo mi propias rutas para los personajes
// el clasico
var express = require('express');
const { param } = require('.');
var router = express.Router();

//vamos a usar mi controlador en mi sistema de rutas

const productController = require('../controllers/productController')

//aca hacemos un pedido get para la ruta aca por ejemplo como no agregue nada estoy basicamnete trayendo al /personajes
router.get('/', productController.index)

  //aca hacemos un pedido de personajes por id si le agregamos ? es que no son obligatorios
router.get('/marca/:marca', productController.marca)



  module.exports = router;