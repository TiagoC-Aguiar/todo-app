
exports.up = function(knex) {
  return knex.schema.createTable('lists', (table) => {
    table.increments('id').primary()
    table.string('title').notNullable()

    table.integer('user_id').notNullable()
    table.foreign('user_id').references('id').inTable('users')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('lists')
};
