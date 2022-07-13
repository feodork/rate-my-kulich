const mongoose = require("mongoose")
const Schema = mongoose.Schema

const kulichSchema = new Schema({
  name: { type: String, required: true }, // can i have this auto populate from log in details?
  img: { type: String, required: true },
},
{timestamps: true}
)


const Kulich = mongoose.model("Kulich", kulichSchema)

module.exports = Kulich
