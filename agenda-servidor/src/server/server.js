const express = require('express');
const cors = require('cors');
const {PORT} = require('../config');
const morgan = require('morgan');

class Servidor {
    constructor(){
        this.app = express();
        this.port = PORT;
        this.rutas = {
            agenda : '/api/agenda'
        }
        this.Middleware();
        this.Rutas();
    }       

    Middleware(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan('dev'))
    }

    Rutas(){
        this.app.use(this.rutas.agenda,require('../routes/agenda.routes'))
    }
    
    Start(){
        this.app.listen(this.port,()=>{
            console.log("Servidor andando en el puerto ",this.port)
        })
    }
}

module.exports = new Servidor;