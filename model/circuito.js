

module.exports = {
    get: function(con, callback) {
      con.query("SELECT * FROM circuitos", callback)
    },
  
    getById: function(con, id, callback) {
      con.query(`SELECT * FROM circuitos WHERE id = ${id}`, callback)
    },
  
    create: function(con, data, callback) {
   

      con.query(
        `INSERT INTO circuitos SET 
        ciudad = '${data.ciudad}',
        pais = '${data.pais}',
        trazado = '${data.trazado}',
        numVueltas = '${data.numVueltas}',
        longitud = '${data.longitud}',
        curvasLentas = '${data.curvasLentas}',
        curvasMedias = '${data.curvasMedias}',
        curvasRapidas = '${data.curvasRapidas}',
        nombre = '${data.nombre}'`,
        callback
      )
    },
  
    update: function(con, data, id, callback) {
      con.query(
        `UPDATE circuitos SET 
        ciudad = '${data.ciudad}',
        pais = '${data.pais}',
        trazado = '${data.trazado}',
        numVueltas = '${data.numVueltas}',
        longitud = '${data.longitud}',
        curvasLentas = '${data.curvasLentas}',
        curvasMedias = '${data.curvasMedias}',
        curvasRapidas = '${data.curvasRapidas}',
        nombre = '${data.nombre}'`,
        callback
      )
    },
  
    destroy: function(con, id, callback) {
      con.query(`DELETE FROM circuitos WHERE id = ${id}`, callback)
    }
  }