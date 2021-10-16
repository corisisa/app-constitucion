const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
        conn.query("SELECT * FROM articulos", (err, rows) => {
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.get('/:cod_art', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
        conn.query("SELECT * FROM articulos where cod_art = ?", [req.params.cod_art], (err, rows) => {
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

module.exports = routes