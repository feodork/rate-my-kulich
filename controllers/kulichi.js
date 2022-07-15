const express = require("express")
const router = express.Router()

const upload = require("../middlewares/uploads")
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
    .populate("username")
    .exec()
    .then((kulichi) => {
      console.log(kulichi)
      res.render("index.ejs", {
        currentUser: req.session.currentUser,
        allKulichi: kulichi,
        baseUrl: req.baseUrl,
        tabTitle: "Home",
        controllerPrefix: ""
      })
    })
})

// NEW route
router.get("/new", (req, res) => {
  res.render("new.ejs", {
    currentUser: req.session.currentUser,
    baseUrl: req.baseUrl,
    tabTitle: "Add New Kulich"
  })
})

// POST route
router.post("/", upload.single("image"), (req, res) => {
  req.body.username = req.session.currentUser
  req.body.image = req.file.path

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
    .populate("username")
    .exec()
    .then((kulich) => {
      console.log(kulich)
      console.log(req.session.currentUser)
      res.render("show.ejs", {
        currentUser: req.session.currentUser,
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
router.get("/:id/edit", upload.single("image"), (req, res) => {
  Kulich.findById(req.params.id)
    .exec()
    .then((kulich) => {
      console.log(kulich)
      res.render("edit.ejs", {
        currentUser: req.session.currentUser,
        baseUrl: req.baseUrl,
        theKulich: kulich,
        tabTitle: "Update Kulich: " + kulich.name
      })
    })
}) 

// RATING route
router.get("/:id/rating", (req, res) => {
  console.log("rating received", req.query)
  Kulich.findById(req.params.id)
  .exec()
  .then((kulich) => {
      console.log(kulich.userRatings)
      // if it already has a value, leave as is, or if not set it to a new map object
      kulich.userRatings = kulich.userRatings || new Map()
      kulich.userRatings.set(
        req.session.currentUser._id, 
        parseInt(req.query.rating)
        )
    let sum = 0
    kulich.userRatings.forEach(rating => {
      sum += rating
    })
    let averageRating = sum / kulich.userRatings.size
    kulich.averageRating = Math.floor(averageRating)
    console.log(kulich)
    kulich.save()
    .then(() => {
        // sending back rendered single kulich
        res.render("partials/kulich.ejs", {
          currentUser: req.session.currentUser,
          kulich: kulich,
          baseUrl: req.baseUrl,
          controllerPrefix: ""
      })

    })
  })
})



module.exports = router