
exports.up = function(knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary()
    table.string('text').notNullable()
    table.boolean('completed').defaultTo(false)
    table.timestamp('completed_at')

    table.integer('list_id').notNullable()
    table.foreign('list_id').references('id').inTable('lists')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
