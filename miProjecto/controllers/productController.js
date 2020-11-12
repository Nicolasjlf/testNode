const { porMarca } = require('../autos/autos');
var autos = require('../autos/autos');
//busco mi database sequalize
var db = require('../database/models')
const controller = {
index: (req,res) => {
    res.send(autos.lista)
},
marca: (req,res) =>{
    var marcaBuscada = req.params.marca
    // aca tengo que hacer el metodo que basicamnte te filtra la lista
    var filteredList = autos.lista.filter(function (unAuto) {
        return unAuto.marca == marcaBuscada
      });
   // res.send(filteredList)

   // res.render(autos, { autos: filteredList});
   res.render('autos', { autos:  filteredList, title:'autos' });

},

};
module.exports = controller