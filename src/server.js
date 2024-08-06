//const express = require('express')
//import e from 'express'
import express from 'express'

const app = express()

app.get('/',(req, res) => {
    res.json(
        {
            message: "olá Mundo Express!",
            success: "Sucesso ao executar API"
        }
    )
})

app.listen(3000,() => {
    console.log('servidor rodando em http://localhost:3000')
})