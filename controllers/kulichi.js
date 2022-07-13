const express = require("express")
const router = express.Router()

const Kulich = require("../models/kulichi")

const isLoggedIn = (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/login')
  }
  next()
}

router.use(isLoggedIn)

// INDEX route
router.get("/", (req, res) => {
  Kulich.find()
    .exec()
    .then((kulichi) => {
      res.render("index.ejs", {
        allKulichi: kulichi,
        baseUrl: req.baseUrl,
        tabTitle: "Home"
      })
    })
})

// NEW route
router.get("/new", (req, res) => {
  res.render("new.ejs", {
    baseUrl: req.baseUrl,
    tabTitle: "Add New Kulich"
  })
})

// POST route
router.post("/", (req, res) => {
  req.body.imageURL = req.file.path
  // CREATE route
  Kulich.create(req.body)
    .then((newKulich) => {
      console.log("Created kulich:", newKulich)
      res.redirect(req.baseUrl)
    })
})

// SHOW route
router.get("/:id", (req, res) => {
  Kulich.findById(req.params.id)
    .exec()
    .then((kulich) => {
      res.render("show.ejs", {
        baseUrl: req.baseUrl,
        theKulich: kulich,
        tabTitle: kulich.name
      })
    })
})

// DELETE route
router.delete("/:id", (req, res) => {
  Kulich.findByIdAndDelete(req.params.id)
    .exec()
    .then((kulich) => {
      console.log("Deleted kulich:", kulich)
      res.redirect(req.baseUrl)
    })
})

router.put("/:id", (req, res) => {
  Kulich.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then((kulich) => {
      console.log("Updated kulich:", kulich)
      res.redirect(req.baseUrl)
    })
})

// EDIT route
router.get("/:id/edit", (req, res) => {
  Kulich.findById(req.params.id)
    .exec()
    .then((kulich) => {
      res.render("edit.ejs", {
        baseUrl: req.baseUrl,
        theKulich: kulich,
        tabTitle: "Update Kulikch: " + kulich.name
      })
    })
}) 


module.exports = router