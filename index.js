require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const userReoutes = require('./src/routes/users')

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.get('/', (req, res) => {
  res.send('api')
})

app.use('/users',userReoutes)
// app.use((err, req, res, next) => {
//   const data = err.data
//   response.validate(data, res)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})