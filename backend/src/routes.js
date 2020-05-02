const express = require('express')
const routes = express.Router()
const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')
const ListController = require('./controllers/ListController')

routes.post('/sessions', SessionController.create)

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.get('/lists', ListController.index)
routes.post('/lists', ListController.create)
routes.put('/lists/:id', ListController.update)

routes.delete('/lists/:id', ListController.delete)

module.exports = routes
