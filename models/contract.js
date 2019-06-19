'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ContractSchema = Schema({
    type: String,
    contractor: String,
    premium: Number,
    category: { type: String, enum:['Autos','Gastos Médicos','Vida']}
})

module.exports =mongoose.model('Contract',ContractSchema)

