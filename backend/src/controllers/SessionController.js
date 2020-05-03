const connection = require('../database/connection')

module.exports = {
  async create(request, response) {
    const { email, password } = request.body

    const user = await connection('users')
      .where({email, password})
      .select('id', 'name', 'email')
      .first()

    if(!user) {
      return response.status(401).json({ error: 'User not found'})
    }

    const inbox = await connection('lists')
      .where({ user_id: user.id })
      .select('id')
      .orderBy('id', 'asc')
      .first()

    return response.json([user, inbox])
  }
}
