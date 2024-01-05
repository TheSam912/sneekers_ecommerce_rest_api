const express = require("express")
const app = express()
const port = 3000
const mongoose = require("mongoose");
const productRouter = require("./routes/products")
const authRouter = require("./routes/auth")

app.use(express.json({limit: '10mb'}))
app.use(express.urlencoded({limit: '10mb', extended: true}))
app.use('/api/products', productRouter)
app.use("/api/", authRouter)
mongoose
    .connect("mongodb+srv://admin:33931376@samuser.ivixmzg.mongodb.net/ecommerce")
    .then(() => {
        console.log("connected to DB !!!!!");
        app.listen(port, () => {
            console.log("connected to port 3000");
        });
    })
    .catch(() => {
        console.log("catch");
    });
