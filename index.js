'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended :false}))
app.use(bodyParser.json())

app.get('/api/contracts',(req, res) =>{
    res.status(200).send({contracts:[]})
})

app.get('/api/contracts/:contractId',(req, res) =>{
    
})

app.post('/api/contract',(req, res) =>{
    console.log(req.body)
    res.status(200).send({message:'El contrato se ha registrado'})
    
})

app.put('/api/contracts/:contractId',(req, res) =>{
    
})

app.delete('/api/contracts/:contractId',(req, res) =>{
    
})

mongoose.connect('mongodb://testuser:test123@ds343895.mlab.com:43895/technicaltest',(err,res)=>{
    if(err) throw err
    console.log("Conexión establecida con Mongo")
    app.listen(port, ()=>{
        console.log(`Start Simple API Rest App in port: ${port}`)
    })
})


