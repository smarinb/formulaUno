

module.exports = {
    get: function(con, callback) {
      con.query("SELECT * FROM equipos", callback)
    },
  
    getById: function(con, id, callback) {
      con.query(`SELECT * FROM equipos WHERE id = ${id}`, callback)
    },
  
    create: function(con, data, callback) {
   

      con.query(
        `INSERT INTO equipos SET 
        nombre = '${data.nombre}',
        logo = '${data.logo}',
        twitter = '${data.twitter}',
        idUsuario = '${data.idUsuario}'`,
        callback
      )
    },
  
    update: function(con, data, id, callback) {
      con.query(
        `UPDATE equipos SET 
        nombre = '${data.nombre}',
        logo = '${data.logo}',
        twitter = '${data.twitter}',
        idUsuario = '${data.idUsuario}'`,
        callback
      )
    },
  
    destroy: function(con, id, callback) {
      con.query(`DELETE FROM equipos WHERE id = ${id}`, callback)
    }
  }