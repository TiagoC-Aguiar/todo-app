const connection = require('../database/connection')

module.exports = {

  async index(request, response) {
    try {
      const id = request.headers.authorization
      const lists = await connection('lists')
        .where('user_id', id)
        .select('*')     
      if(lists.length === 0) {
        response.status(204)
      }     

      return response.json(lists) 
    } catch(err) {
      response.status(401)
      return response.json({ message: 'Usuário não autenticado' })
    }
  },

  async create(request, response) {
    const { title } = request.body
    const user_id = request.headers.authorization

    try {
      await connection('lists').insert({
        title, user_id
      })
      
      return response.json({message: 'Dados adicionados com sucesso'})
    } catch(err) {
      console.log(`Erro ao cadastrar lista: ${err}`)
      return
    }
  }, 

  async update(request, response) {

    const { title } = request.body
    const { id } = request.params
    await connection('lists').update({
      title, updated_at: connection.fn.now()
    }).where({ id })
  
    return response.json({ message: 'Atualizado com sucesso!' })

  },

  async delete(request, response) {
    const { id } = request.params
    await connection('lists').where({ id }).del()
    return response.json({ message: 'Excluído com sucesso!'})
  }

}

