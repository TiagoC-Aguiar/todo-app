
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'admin', email: 'admin@email.com.br', password: 'admin' },
        { name: 'teste', email: 'teste@email.com.br', password: 'teste' },
      ]);
    });
};
