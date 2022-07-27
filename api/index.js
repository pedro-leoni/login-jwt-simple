require('dotenv').config()
const server = require('./src/app');
const { conn } = require('./src/db');
const { SERVER_PORT } = process.env;

// conexion definitiva entre server y postgre mediante sequelize 
conn.sync({ force: false }).then(() => {
    server.listen(SERVER_PORT, () => {
        console.log(` $ Server: OK \n $ Puerto: ${SERVER_PORT}`)
    })
})