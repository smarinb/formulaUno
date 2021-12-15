

module.exports = {
    get: function(con, callback) {
      con.query("SELECT * FROM pilotos", callback)
    },
  
    getById: function(con, id, callback) {
      con.query(`SELECT * FROM pilotos WHERE id = ${id}`, callback)
    },
  
    create: function(con, data, callback) {
   

      con.query(
        `INSERT INTO pilotos SET 
        nombre = '${data.nombre}',
        apellido = '${data.apellido}',
        siglas = '${data.siglas}',
        foto = '${data.foto}',
        idEquipo = '${data.idEquipo}'`,
        callback
      )
    },
  
    update: function(con, data, id, callback) {
      con.query(
        `UPDATE pilotos SET 
        nombre = '${data.nombre}',
        apellido = '${data.apellido}',
        siglas = '${data.siglas}',
        foto = '${data.foto}',
        idEquipo = '${data.idEquipo}'`,
        callback
      )
    },
  
    destroy: function(con, id, callback) {
      con.query(`DELETE FROM pilotos WHERE id = ${id}`, callback)
    }
  }