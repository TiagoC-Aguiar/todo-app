const connection = require('../database/connection')

module.exports = {
  async create(request, response) {
    const { email, password } = request.body

    const user = await connection('users')
      .where({email, password})
      .select('id', 'name', 'email')
      .first()

    if(!user) {
      return response.status(400).json({ error: 'User not found'})
    }

    return response.json(user)
  }
}
