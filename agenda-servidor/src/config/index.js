if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}


module.exports = {
    ConfigDB : require('../db/key'),
    PORT : process.env.PORT
}