exports.up = (knex) => {
    return knex.schema.createTable('laboratorio', function (table) {
        table.increments();
        table.string('lab_nome',60).notNullable();
      })
};

exports.down = knex => knex.schema.dropTable('laboratorio');