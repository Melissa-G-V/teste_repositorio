const knex = require('../database/dbConfig');

module.exports = {
    
    //index: metodo de listagem
    //store/create: metodo inclusao de dados
    //update: metodo de alteração
    //destroy: metodo de exclusao

    async index(req,res){
        const remedios = await knex('remedios').join("laboratorio", "remedios.laboratorio_id", "=", "laboratorio.id")
        .orderBy("remedios.id", "asc");
        res.status(200).json(remedios);

    },

    async store(req,res){
        const { nome,
            foto,
            descricao,
            preco,
            laboratorio_id} = req.body;
            console.log(req.body);
        if(!nome|| !foto|| !descricao|| !preco|| !laboratorio_id){
            res.status(400).json({erro: "Enviar nome,foto,descricao,preco do remedio"});
            return;
        };
        try{
            const novo = await knex('remedios').insert({nome,
                foto,
                descricao,
                preco,
                laboratorio_id});
            res.status(201).json({id: novo[0]});
        }catch(error){
            res.status(400).json({erro: error.message});
        }
    },

    async update(req,res){

        try {
        const {nome, foto, preco, descricao} = req.body //requisitar body
        const {id} = req.params //requisitar o parametro para o router
        await knex('remedios')
        .update({nome, foto, preco, descricao})
        .where({id})
        res.status(200).json('ok! foi alterado');
        } catch (error) {
            res.status(400).json({erro: error.message});
        }
    },


    async destroy(req,res){
    
        try {
        const {id} = req.params //requisitar o parametro para o router
        await knex('remedios')
        .where({id})
        .del()
        res.status(200).json('ok! foi deletado');
        } catch (error) {
        res.status(400).json({erro: error.message});
        }
    },

    async filtro(req,res){

        try {
        const {palavra} = req.params
        const remedio = await knex('remedios').select().from('remedios').having('id', '=', palavra)
        res.status(200).json(remedio);
        } catch(error) {
            res.status(400).json({erro: error.message});
        }

    },

    async destacar(req,res){
            const {id} = req.params 
            const valor = await knex('remedios').where({id})
        try{
            if(valor[0].destaque == 1){
                await knex('remedios').where({id}).update({destaque:0})
                res.status(200).json('ok! destaque foi removido');
                return;
                }else{
                    await knex('remedios').where({id}).update({destaque:1})
                    res.status(200).json('ok! destaque foi colocado');
                }
        }catch(error){
            res.status(400).json({erro: error.message});
        }

    },

    async destacados(req,res){
    
        try {
        const {destaque} = req.params //requisitar o parametro para o router
        const remedio = await knex('remedios').select().from('remedios').having('destaque', '=', destaque)
        res.status(200).json(remedio);
        } catch (error) {
        res.status(400).json({erro: error.message});
        }
    },



};