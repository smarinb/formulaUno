const express =  require('express');
const app = express();
var methodOverride = require("method-override");
const path = require("path");
const con = require("./config/db");
const session = require('express-session');

// include router
const noticiaRouter = require("./routes/noticiaRouter");
const circuitoRouter = require("./routes/circuitoRouter");
const calendarioRouter = require("./routes/calendarioRouter");
const usuarioRouter = require("./routes/usuarioRouter");
const equipoRouter = require("./routes/equipoRouter");

//sesion

app.use(session({
    secret  : 'secret',
    resave: true,
    saveUninitialized:true

  }));

  app.use(function(req, res, next){
    res.locals.session = req.session;
    next();
});


// Using ejs template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//BD connection
con.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + con.threadId);
});

// connecting route to database
app.use(function(req, res, next) {
    req.con = con
    next()
  });

// parsing body request
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));




// routing


  app.get("/", (req, res) =>{
    if(req.session.loggedin){
      res.render('index',{
          login:true,
          roll: req.session.name,
          id: req.session.idUsuario
      });
  }else{
      res.render('index',{
          login:false,
          roll:'Debe iniciar sesión y no tiene roles asignados'
      })
  }
  });
  
app.use("/noticia", noticiaRouter);
app.use("/circuito",circuitoRouter);
app.use("/calendario",calendarioRouter);
app.use("/registro",usuarioRouter);
app.use("/equipo",equipoRouter);









app.set('port', 4000);

app.listen(app.get('port'),()=>{
    console.log('Server on port 4000');
});



