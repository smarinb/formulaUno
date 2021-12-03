
module.exports = {
    get: function(con, callback) {
      con.query("SELECT * FROM calendario", callback)
    },
  
    getById: function(con, id, callback) {
      con.query(`SELECT * FROM calendario WHERE id = ${id}`, callback)
    },
  
    create: function(con, data, callback) {
   

      con.query(
        `INSERT INTO calendario SET
        nombre = '${data.nombre}',
        idCircuito = '${data.idCircuito}',
        fecha = '${data.fecha}'`,
        callback
      )
    },
  
    update: function(con, data, id, callback) {
      con.query(
        `INSERT calendario SET
        nombre = '${data.nombre}',
        idCircuito = '${data.idCircuito}',
        fecha = '${data.fecha}'`,
        callback
      )
    },
  
    destroy: function(con, id, callback) {
      con.query(`DELETE FROM calendario WHERE id = ${id}`, callback)
    }
  }