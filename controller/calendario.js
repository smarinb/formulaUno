const calendarioController = require('../model/calendario');
const alert = require('alert');



module.exports = {

    index: function(req, res) {
        calendarioController.get(req.con, function(err, rows) {
          res.render("calendario/index", { data: rows,
            logado: req.session.loggedin,
            roll:req.session.name })
        })
      },

      create: function(req, res) {
        res.render("calendario/create")
      },
    
      
    
      store: (req, res) => {
        calendarioController.create(req.con, req.body, function(err) {
          console.log(err);
          if(err){
            alert("Se ha producido un error al guardar la carrera en el calendario. Revise que el circuito que quiere añadir haya sido de alta en el sistema, que se haya dejado algún campo sin rellenar o que algún campo no este duplicado");

          }
          res.redirect("/calendario")
        })
      },
    
      edit: function(req, res) {
        calendarioController.getById(req.con, req.params.id, function(err, rows) {
          res.render("calendario/edit", { data: rows[0] })
        })
      },
    
      update: function(req, res) {
        console.log(req.params.id);
        calendarioController.update(req.con, req.body, req.params.id, function(err) {
          res.redirect("/calendario")
        })
      },
    
      destroy: function(req, res) {
        console.log(req.params.id);
        calendarioController.destroy(req.con, req.params.id, function(err) {
          res.redirect("/calendario")
        })
      }
}