// IMPORTS AND PACKAGES
const express = require('express')
const bodyParser = require('body-parser')

// CREATE VARIABLE FOR EXPRESS
const app = express()

// IMPORT ROUTES
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// USE PACKAGES
app.use(bodyParser.urlencoded({extended: false}))

// USE ROUTES
app.use(adminRoutes)
app.use(shopRoutes)

// CREATE THE SERVER ON PORT 3000
app.listen(3000)