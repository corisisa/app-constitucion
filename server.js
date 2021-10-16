//Configuracion
const express = require('express')
const routes = require('./routes')
const app = express()
const mysql = require('mysql')
const coneccion = require('express-myconnection')
const credencialesBD = {
    host: 'bwsbo1m8t8xdmhpi5f49-mysql.services.clever-cloud.com',
    port: 20956,
    user: 'u8ieynakiiyecloy',
    password: 'lFUHoYX083f6CFGXBuX',
    database: 'bwsbo1m8t8xdmhpi5f49'
}
app.set('port', process.env.PORT || 8080)

//Middlewares
app.use(coneccion(mysql, credencialesBD, 'single'))

//Rutas
app.use('/api', routes)

//Escuchar servicio
app.listen(app.get('port'), ()=>{
    console.log('Servicio corriendo en el puerto: ', app.get('port'))
})