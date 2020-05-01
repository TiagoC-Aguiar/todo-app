const express = require('express')
const routes = express.Router()
const connection = require('./database/connection')

routes.get('/users', async (request, response) => {
  await connection('users').then(results => {
    return response.json(results)
  })
})

routes.post('/users', async (request, response) => {
  // console.log(request.body)
  const { name, email, password} = request.body
  try {
    await connection('users').insert({
      name, email, password
    })
    
    return response.json({message: 'Dados adicionados com sucesso'})
  } catch(err) {
    console.log(`Erro ao cadastrar usuário: ${err}`)
  }
})

routes.put('/users/:id', async (request, response) => {
  const { id } = request.params
  const { name, email, password } = request.body
  await connection('users').update({
    name, email, password
  }).where({ id })
  response.json({ message: 'Atualizado com sucesso'})
})

routes.delete('/users/:id', async (request, response) => {
  const { id } = request.params
  await await connection('users').where({id}).del()
  response.json({message: 'removido com sucesso!'})
})

module.exports = routes
