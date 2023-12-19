const express = require("express")
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://thesamnolan1998:Sobhan@3393@clustersam.sjoijhb.mongodb.net/sneekers?retryWrites=true&w=majority").then(() => console.log("db connect!!!")).catch((err) => console.log(err))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

