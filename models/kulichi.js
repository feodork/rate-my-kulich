const mongoose = require("mongoose")
const Schema = mongoose.Schema

const kulichSchema = new Schema({
  username: { type: String, required: true }, // can i have this auto populate from log in details?
  image: { type: String, required: true }
},
{timestamps: true}
)


const Kulich = mongoose.model("Kulich", kulichSchema)

module.exports = Kulich
