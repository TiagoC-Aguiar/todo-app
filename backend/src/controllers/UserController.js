const connection = require('../database/connection')

module.exports = {
  
  async index(request, response) {
    await connection('users').then(results => {
      return response.json(results)
    })
  },

  async create(request, response) {
    const { name, email, password} = request.body
    try {
      await connection('users').insert({
        name, email, password
      })
      
      return response.json({message: 'Dados adicionados com sucesso'})
    } catch(err) {
      console.log(`Erro ao cadastrar usuário: ${err}`)
    }
  }, 

  async update(request, response) {
    const { id } = request.params
    const { name, email, password } = request.body
    await connection('users').update({
      name, email, password, updated_at: connection.fn.now()
    }).where({ id })
    response.json({ message: 'Atualizado com sucesso'})
  },

  async delete(request, response) {
    const { id } = request.params
    await await connection('users').where({id}).del()
    response.json({message: 'removido com sucesso!'})
  },

}
