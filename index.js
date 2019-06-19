'use strict'

const express = require('express')
const bodyParser = require('body-parser')


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




app.listen(port, ()=>{
    console.log(`Start Simple API Rest App in port: ${port}`)
})
