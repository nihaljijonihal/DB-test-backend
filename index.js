// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"
// import userModel from "./mainModel"

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./mainModel");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/dbTest").then((res)=>{
//     console.log("connected to MDB");
// }).catch((err)=>console.log("Connection to MDB failed ",err))

mongoose
  .connect(
    "mongodb+srv://nihal:nihal@cluster0.1ifakiz.mongodb.net/myTestDB?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((res) => {
    console.log("connected to MDB");
  })
  .catch((err) => console.log("Connection to MDB failed ", err));

// app.post('/jj',(req,res)=>{

//     res.send("req.body")

// })
app.post("/register", (req, res) => {
 
  console.log(req.body);
  const {
    name,
    lastname,
    address,
    email,
    gender,
    mobile,
    password,
    dob,
    course,
  } = req.body;



  console.log("Req received",req.body)
  // res.send("user" )
  userModel.create({
    name,
    lastname,
    address,
    email,
    gender,
    mobile,
    password,
    dob,
    course,
  })
  .then(()=>{
    console.log("Created success")
    res.send("User created ");
})
  .catch((err)=>{
   
   res.send("Failed to create user",err )

})
});

app.get("/view",(req,res)=>{
  console.log("YOO REQ CAME");
  userModel.find().then((result)=>{
    console.log("Request resolved")
    res.status(201).json(result)
  }).catch(err=>{
    console.log(err)
  })
 
  
})

app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`);
});
