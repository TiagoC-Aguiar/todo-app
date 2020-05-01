const express = require('express')
const app = express()
// const cors = require('cors')

app.use(express.json())

const users = [
  {id: 1, name: 'Tiago', email: 'tiago@email.com', password: '1234'},
  {id: 2, name: 'Ana', email: 'ana@email.com', password: '1235'},
  {id: 3, name: 'Bruna', email: 'bruna@email.com', password: '1236'},
  {id: 4, name: 'Carlos', email: 'carlos@email.com', password: '1237'},
]

app.get('/users', (request, response) => {
  response.json(users)
})

app.post('/users', (request, response) => {
  users.push(request.body)
  return response.json({message: 'Dados adicionados com sucesso'})
})

app.put('/users/:id', (req, res) => {
  const { id } = req.params
  users.find((user, index) => {
    if(user.id == id) {
      users[index] = {...user, email: req.body.email}
    }
  })
  res.json({message: 'Atualizou'})
})

app.delete('/users', (req, res) => {
  const userId = users.find((user, index) => {
    if(user.id == req.body.id) {
      return index
    }
    return -1
  })
  users.splice(userId, 1)
  res.json({message: 'removido com sucesso!'})
})

app.listen(3333)
