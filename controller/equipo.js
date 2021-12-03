const equipoController = require('../model/equipo');



module.exports = {

    index: function(req, res) {
        equipoController.get(req.con, function(err, rows) {
          res.render("equipo/index", { data: rows,
            logado: req.session.loggedin,
            roll:req.session.name,
            idSesion: req.session.idUsuario })
        })
      },

      create: function(req, res) {
        res.render("equipo/create")
      },
    
      
    
      store: (req, res) => {
        equipoController.create(req.con, req.body, function(err) {
          console.log(err);
          res.redirect("/equipo")
        })
      },
    
      edit: function(req, res) {
        equipoController.getById(req.con, req.params.id, function(err, rows) {
          res.render("equipo/edit", { data: rows[0] })
        })
      },
    
      update: function(req, res) {
        console.log(req.params.id);
        equipoController.update(req.con, req.body, req.params.id, function(err) {
          res.redirect("/equipo")
        })
      },
    
      destroy: function(req, res) {
        console.log(req.params.id);
        equipoController.destroy(req.con, req.params.id, function(err) {
          res.redirect("/equipo")
        })
      }
}