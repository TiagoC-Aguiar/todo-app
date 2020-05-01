const express = require('express')
const app = express()
// const cors = require('cors')
const routes = require('./routes')

app.use(express.json())
app.use(routes)
app.use((request, response, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
  response.json({ error: error.message })
})

app.listen(3333)

module.exports = app

