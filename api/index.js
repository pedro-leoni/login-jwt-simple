require('dotenv').config()
const server = require('./src/app');
const { conn } = require('./src/db');
const { PORT } = process.env;

// conexion definitiva entre server y postgre mediante sequelize 
conn.sync({ force: false }).then(() => {
    server.listen(process.env.PORT, () => {
        console.log(` $ Server: OK \n $ Puerto: ${PORT}`)
    })
})