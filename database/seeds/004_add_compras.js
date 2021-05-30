
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('compras').del()
    .then(function () {
      // Inserts seed entries
      return knex('compras').insert([
        {NFC_e: 'NFC_e n° 6687', id_remedio: 1,id_cliente: 1}
      ]);
    });
};
