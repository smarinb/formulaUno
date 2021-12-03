const usuarioController = require('../model/usuario');
const alert = require('alert');












module.exports = {

    index: function(req, res) {
        usuarioController.get(req.con, function(err, rows) {
          res.render("registro/index", { data: rows })
        })
      },

      create: function(req, res) {
        res.render("registro/create")
      },
    
      
    
      store: (req, res) => {
        usuarioController.create(req.con, req.body, function(err) {
          if(req.body.password.length<=4){
            alert("La contraseña debe tener una longitud de al menos 5");
            res.redirect("/registro");
          }
          alert("Alta exitosa");
          res.redirect("/")
        })
      },
    
      edit: function(req, res) {
        usuarioController.getById(req.con, req.params.id, function(err, rows) {
          res.render("registro/edit", { data: rows[0] })
        })
      },

      login: (req, res) =>{
        const password = req.body.password;
        const email = req.body.email;


        usuarioController.getByEmail(req.con, email, password, (err, rows) =>{
          console.log(err);
          console.log(rows[0]);
          if(rows.length == 0 || ( password!=rows[0].password)){
            alert("USUARIO O PASSWORD INCORRECTAS");
            res.redirect("/registro");
          }else{
            req.session.loggedin = true;
            req.session.name = rows[0].roll;
            req.session.idUsuario = rows[0].id;
            console.log("DATOS DE SESION: " + req.session);
            alert('LOGIN CORRECTO');
            console.log('LOGIN CORRECTO');
          
            res.redirect('/');
          }
          
        })
      },

    
      update: function(req, res) {
        console.log(req.params.id);
        usuarioController.update(req.con, req.body, req.params.id, function(err) {
          res.redirect("/registro")
        })
      },
    
      destroy: function(req, res) {
        req.session.destroy(()=>{
          res.redirect('/registro');
        });
       
      }
}




