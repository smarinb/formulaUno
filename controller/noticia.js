const noticiaController = require('../model/noticia');



module.exports = {

    index: function(req, res) {
        noticiaController.get(req.con, function(err, rows) {
          res.render("noticia/index", { data: rows,
            logado: req.session.loggedin,
            roll:req.session.name })
        })
      },

      create: function(req, res) {
        res.render("noticia/create")
      },
    
      
    
      store: (req, res) => {
        noticiaController.create(req.con, req.body, function(err) {
          console.log(err);
          res.redirect("/noticia")
        })
      },
    
      edit: function(req, res) {
        noticiaController.getById(req.con, req.params.id, function(err, rows) {
          res.render("noticia/edit", { data: rows[0] })
        })
      },
    
      update: function(req, res) {
        console.log(req.params.id);
        noticiaController.update(req.con, req.body, req.params.id, function(err) {
          res.redirect("/noticia")
        })
      },
    
      destroy: function(req, res) {
        console.log(req.params.id);
        noticiaController.destroy(req.con, req.params.id, function(err) {
          res.redirect("/noticia")
        })
      }
}