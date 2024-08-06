//const express = require('express')
//import e from 'express'
import express from 'express'

const app = express()

app.post('/auth/singup',(req, res) => {
    res.json({ message: "rota de POST auth/singup!",})
})
app.post('/auth/login',(req, res) => {
    res.json({ message: "rota de POST auth/login!",})
})
app.post('/auth/logout',(req, res) => {
    res.json({ message: "rota de POST auth/logout!",})
})

app.post('/account',(req, res) => {
    res.json({ message: "teste metodo POST account!",})
})

app.get('/account/list',(req, res) => {
    res.json({ message: "teste metodo GET account/list!",})
})

app.get('/account/id',(req, res) => {
    res.json({ message: "teste metodo GET account ID!",})
})
app.put('/account/id',(req, res) => {
    res.json({ message: "teste metodo PUT account!",})
})

app.delete('/account/id',(req, res) => {
    res.json({ message: "teste metodo DELETE account!",})
})



app.listen(3000,() => {
    console.log('servidor rodando em http://localhost:3000')
})