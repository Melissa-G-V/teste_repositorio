exports.up = (knex) => {
    return knex.schema.createTable('remedios', function (table) {
        table.increments();
        table.string('nome',60).notNullable();
        table.string('foto').notNullable();
        table.string('descricao',150).notNullable();
        table.decimal('preco',9.2).notNullable();
        table.boolean('destaque').notNullable().defaultTo(false);
        table.integer('laboratorio_id',10).notNullable().unsigned();
        table.foreign('laboratorio_id')
             .references('laboratorio.id')
             .onDelete("restrict")
             .onUpdate("cascade")
        table.timestamps(true,true)
    })
      
};

exports.down = knex => knex.schema.dropTable('remedios');