exports.up = (knex) => {
    return knex.schema.createTable('clientes', function (table) {
        table.increments();
        table.string('nome_cli',60).notNullable();
        table.string('email',120).unique().notNullable();
        table.string('senha',60).notNullable();

        table.timestamps(true,true);
      })
};

exports.down = knex => knex.schema.dropTable('usuarios');