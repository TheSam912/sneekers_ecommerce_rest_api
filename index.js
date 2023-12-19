const express = require("express")
const app = express()
const dotenv = require('dotenv')
const port = 3000
const mongoose = require("mongoose");
dotenv.config()
mongoose
    .connect("mongodb+srv://thesamnolan1998:Sobhan@3393@clustersam.sjoijhb.mongodb.net/sneekers")
    .then(() => {
        console.log("connected to DB !!!!!");
    })
    .catch(() => {
        console.log("catch");
    });
