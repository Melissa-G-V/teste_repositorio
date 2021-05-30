exports.up = (knex) => {
    return knex.schema.createTable('compras', function (table) {
        table.increments();
        table.string('NFC_e',60).notNullable();
        table.integer('id_remedio',10).notNullable().unsigned();
        table.foreign('id_remedio')
             .references('remedios.id')
             .onDelete("restrict")
             .onUpdate("cascade")
        table.integer('id_cliente',10).notNullable().unsigned();
        table.foreign('id_cliente')
        .references('clientes.id')
        .onDelete("restrict")
        .onUpdate("cascade")
    })
      
  };
  
  exports.down = knex => knex.schema.dropTable('compras');
