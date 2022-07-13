require("dotenv").config()

const mongoose = require("mongoose")

const Kulich = require("../models/kulichi")
const dummyKulichi = require("./dummy-kulichi")

const dbURL = 'mongodb://localhost:27017/kulichi'

mongoose.connect(dbURL, () => {
  console.log("Connected to kulichi db")
  console.log("Resetting Kulich collection")
  Kulich.collection.drop()
    .then(() => {
      console.log("Kulich collection dropped")
      console.log("Inserting seed data")
      return Kulich.insertMany(dummyKulichi)
    })
    .then((insertedKulichi) => {
      console.log("Dummy kulichi inserted")
      console.log(insertedKulichi)
      mongoose.connection.close()
    })
})