require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Use middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => res.json({msg: "Server is OK"}))
app.use('/links', require('./routes/link'))

// Connect database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

//Start     
app.listen(3000, () => console.log('server started'))