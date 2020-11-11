//creo mi propias rutas para los personajes
// el clasico
var express = require('express');
const { param } = require('.');
var router = express.Router();

//vamos a usar mi controlador en mi sistema de rutas

const personajesController = require('../controllers/personajesController')

//aca hacemos un pedido get para la ruta aca por ejemplo como no agregue nada estoy basicamnete trayendo al /personajes
router.get('/', personajesController.index)

  //aca hacemos un pedido de personajes por id si le agregamos ? es que no son obligatorios
router.get('/:id', function(req, res, next) {
    let idpersonajes = req.params.id
    res.send('toma es personaje con id ' + idpersonajes);

  });






// el exxport clasic
module.exports = router;