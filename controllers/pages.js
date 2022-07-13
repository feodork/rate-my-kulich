const express = require('express')

const pagesRouter = express.Router()

// localhost:3000/
pagesRouter.get('/', (req, res) => {
  res.render('pages/home.ejs', {
    currentUser: req.session.currentUser,
    baseUrl: req.baseUrl,
    tabTitle: 'Kulich App'
  })
})

module.exports = pagesRouter
