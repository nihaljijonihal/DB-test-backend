// import mongoose from 'mongoose'
const mongoose = require('mongoose')


const mainSchema = new mongoose.Schema({
    name:String,
    lastname: String,
    address: String,
    email: String,
    gender: String,
    mobile: String,
    password: String,
    dob: String,
    course: String
})

const userModel = mongoose.model("users",mainSchema)
module.exports =  userModel