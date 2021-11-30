const circuitoController = require('../model/circuito');
const alert = require('alert');



module.exports = {

    index: function(req, res) {
        circuitoController.get(req.con, function(err, rows) {
          res.render("circuito/index", { data: rows,
            logado: req.session.loggedin,
            roll:req.session.name })
        })
      },

      create: function(req, res) {
        res.render("circuito/create")
      },
    
      
    
      store: (req, res) => {
        circuitoController.create(req.con, req.body, function(err) {
          console.log(err);
        
          res.redirect("/circuito")
        })
      },
    
      edit: function(req, res) {
        circuitoController.getById(req.con, req.params.id, function(err, rows) {
          res.render("circuito/edit", { data: rows[0] })
        })
      },
    
      update: function(req, res) {
        console.log(req.params.id);
        circuitoController.update(req.con, req.body, req.params.id, function(err) {
          res.redirect("/circuito")
        })
      },
    
      destroy: function(req, res) {
        console.log(req.params.id);
        circuitoController.destroy(req.con, req.params.id, function(err) {
            if(err){
                alert("No puede eliminar este circuito porque esta añadido al calendario. Tiene que darlo de baja del calendario primero");
            }
          res.redirect("/circuito")
        })
      }
}