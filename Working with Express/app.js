// IMPORTS AND PACKAGES
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

// CREATE VARIABLE FOR EXPRESS
const app = express()

// IMPORT ROUTES
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// USE PACKAGES
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

// USE ROUTES
app.use('/admin', adminRoutes)
app.use(shopRoutes)

// 404 ERROR PAGE
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

// CREATE THE SERVER ON PORT 3000
app.listen(3000)