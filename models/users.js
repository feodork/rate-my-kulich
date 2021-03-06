const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  profilePic: { type: String, default: "https://loremflickr.com/320/240/old-woman" },
  password: { type: String, required: true }
})

const User = mongoose.model("User", userSchema)

module.exports = User
