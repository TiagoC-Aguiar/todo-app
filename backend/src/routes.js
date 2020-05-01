const express = require('express')
const routes = express.Router()
const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')

const connection = require('./database/connection')

routes.post('/sessions', SessionController.create)

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.get('/lists', async (request, response) => {
  const id = request.headers.authorization
  const lists = await connection('lists')
    .where('user_id', id)
    .select('*')     
  if(!lists) {
    return response.json({ message: 'Não encontrado' })
  }
  return response.json(lists)  
})


routes.post('/lists', async (request, response) => {
  const { title } = request.body
  const user_id = request.headers.authorization

  console.log(`***** aqui ===> ${title} e ${user_id}`)

  await connection('lists').insert({
    title, user_id
  })

  return response.json({ message: 'Lista cadastrada com sucesso' })
})

module.exports = routes
