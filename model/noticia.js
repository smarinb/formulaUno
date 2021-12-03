

module.exports = {
    get: function(con, callback) {
      con.query("SELECT * FROM noticias", callback)
    },
  
    getById: function(con, id, callback) {
      con.query(`SELECT * FROM noticias WHERE id = ${id}`, callback)
    },
  
    create: function(con, data, callback) {
   

      con.query(
        `INSERT INTO noticias SET 
        imagen = '${data.imagen}',
        texto = '${data.texto}',
        titulo = '${data.titulo}',
        permalink = '${data.permalink}'`,
        callback
      )
    },
  
    update: function(con, data, id, callback) {
      con.query(
        `UPDATE noticias SET 
        permalink = '${data.permalink}', 
        imagen = '${data.imagen}',
        texto = '${data.texto}',
        titulo = '${data.titulo}'`,
        callback
      )
    },
  
    destroy: function(con, id, callback) {
      con.query(`DELETE FROM noticias WHERE id = ${id}`, callback)
    }
  }