
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('compras').del()
    .then(function () {
      // Inserts seed entries
      return knex('compras').insert([
        {nota_fiscal: 'NFC_e n° 6687', remedios_id: 1, clientes_id: 1},
        {nota_fiscal: 'NFC_e n° 6688', remedios_id: 3, clientes_id: 1},
        {nota_fiscal: 'NFC_e n° 3222', remedios_id: 2, clientes_id: 2},
        {nota_fiscal: 'NFC_e n° 1322', remedios_id: 2, clientes_id: 3},
        {nota_fiscal: 'NFC_e n° 0923', remedios_id: 1, clientes_id: 7}
      ]);
    });
};
