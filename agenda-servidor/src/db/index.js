const mysql = require('mysql');
const {promisify} = require('util');

const {ConfigDB}=require('../config');

const pool = mysql.createConnection(ConfigDB.database);



// pool.getConnection((err,conec)=> {
//     if(err){
//         if(err.code === 'PROTOCOL_CONNECTION_LOST'){
//             console.error('Database conneciom cerrada')
//         }

//         if(err.code == "ER_CON_COUNT_ERROR"){
//             console.error("La base de datos tiene muchas conexiones.")
//     }

//          if(err.code === 'ECONNREFUSED'){
//         console.error('Se rechazó la conexión a la base de datos')
//     }
//         }
//     if(conec) conec.release();
//     console.log('BD Conectado');
//      return;

// });


pool.query = promisify(pool.query);

module.exports = pool; 