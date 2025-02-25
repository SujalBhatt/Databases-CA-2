const express = require("express")
const router = express.Router()
const {post, get, put, deletef} = require("./controller.js")
router.get("/movie", get)
router.post("/movie", post)
router.put("/movie/:id", put)
router.delete("/movie/:id", deletef)
console.log(put)
module.exports = router
