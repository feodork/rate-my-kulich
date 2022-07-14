const mongoose = require("mongoose")
const Schema = mongoose.Schema

const kulichSchema = new Schema({
  username: { type: 
    Schema.Types.ObjectID,
    ref: "User", 
    required: true }, // can i have this auto populate from log in details?
  image: { type: String, required: true },
  ratings: [{
    rating: Number,
    userID: String
  }],
  averageRating: Number
},
{timestamps: true}
)

const Kulich = mongoose.model("Kulich", kulichSchema)

module.exports = Kulich
