const express = require('express')
const app = express()
const dotenv = require("dotenv")
const connectDB = require("./db.js")
const router = require("./router.js")

dotenv.config()

app.use(express.json())

app.use("/api", router)
app.listen(5000, () => {
    connectDB()
    console.log("Server connected")
})
