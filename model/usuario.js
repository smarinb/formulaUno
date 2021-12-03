




module.exports = {
    get: function(con, callback) {
      con.query("SELECT * FROM usuarios", callback)
    },
  
    getById: function(con, id, callback) {
      con.query(`SELECT * FROM usuarios WHERE id = ${id}`, callback)
    },
    getByEmail: function(con, email, password, callback) {
        con.query(`SELECT * FROM usuarios WHERE email = ?`,[email], callback)
    },
  
    create: async(con, data, callback) => {
        
       
      



      con.query(
        `INSERT INTO usuarios SET 
        usuario = '${data.usuario}',
        email = '${data.email}',
        password = '${data.password}',
        roll = '${data.roll}'`,
        callback
      )
    },
  
    update: function(con, data, id, callback) {

        

      con.query(
        `UPDATE usuarios SET 
        usuario = '${data.usuario}',
        email = '${data.email}',
        password = '${data.password}',
        roll = '${data.roll}'`,
        callback
      )
    },
  
    destroy: function(con, id, callback) {
      con.query(`DELETE FROM usuarios WHERE id = ${id}`, callback)
    }
  }