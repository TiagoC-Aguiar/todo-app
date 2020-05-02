const connection = require('../database/connection')

module.exports = {

  async index(request, response) {
    const { list_id } = request.params
    await connection('tasks').where({ list_id }).then(results => {
      return response.json(results)
    })
  },

  async create(request, response) {
    const { text } = request.body
    const { list_id } = request.params
    await connection('tasks').insert({
      text, list_id
    })
    return response.json({ message: 'Tarefa criada com sucesso!'})
  },

  async update(request, response) {
    const { id } = request.params
    const { text, completed } = request.body
    let completed_at = null
    if(completed) {
      completed_at = connection.fn.now()
    }
    await connection('tasks').update({
      text, completed, completed_at
    }).where({ id })
    return response.json({ message: 'Tarefa atualizada com sucesso!'})
  },

  async delete(request, response) {
    const { id } = request.params
    await connection('tasks').where({ id }).del()
    return response.json({ message: 'Tarefa excluída com sucesso!'})
  },
}
