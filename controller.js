const User = require("./model.js")
console.log(User)
const post = async (req, res) => {
    try {
        const {title, director, genre, releaseYear, availableCopies} = req.body
        console.log(req.body)
        if (!title || !director || !genre || !availableCopies) {
            console.log(req.body)
            return res.status(400).send("Missing required fields:")

        }

        const newUser = new User({
            title,
            director,
            genre,
            releaseYear,
            availableCopies
        })

        await newUser.save()
        
        return res.status(200).send(newUser)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const get = async (req, res) => {
    try {
        const user = await User.find()
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const put = async (req, res) => {
    try {
        // const id = req.params.id
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!user) {
            return res.status(404).send("Invalid movie or user ID")
        }

        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deletef = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).send("Invalid movie or user ID")
        }

        return res.status(200).send("Deleted")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {post, get, put, deletef}