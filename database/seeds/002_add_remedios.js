
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('remedios').del()
    .then(function () {
      // Inserts seed entries
      return knex('remedios').insert([
        {nome: "Buscopan",preco: 17.95 , laboratorio_id: 2, descricao: "Alivio de dor e colica na regiao da barriga" ,foto: "https://cdn.ultrafarma.com.br/static/produtos/3020/large-637115015721893302-3020_3.png"},
        {nome: "Dipirona",preco: 2.95 , laboratorio_id: 3, descricao: "Alivio de dor e febre" ,foto: "https://cdn.awsli.com.br/600x450/1577/1577193/produto/70130336/05cb49b248.jpg"},
        {nome: "Captopril",preco: 20.95 , laboratorio_id: 6, descricao: "Para controlar pressao" ,foto: "http://www.drogarianebrasca.com.br/BACKOFFICE/Uploads/Produto/Normal/7898148290550-60727.jpg"}
      ]);
    });
};