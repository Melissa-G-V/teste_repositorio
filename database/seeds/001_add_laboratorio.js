
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('laboratorio').del()
    .then(function () {
      // Inserts seed entries
      return knex('laboratorio').insert([
        {lab_nome: 'EMS'},
        {lab_nome: 'Medley'},
        {lab_nome: 'Teuto'},
        {lab_nome: 'BioLab'},
        {lab_nome: 'Novartis'},
        {lab_nome: 'Prati'},
        {lab_nome: 'Boehringer'}
      ]);
    });
};