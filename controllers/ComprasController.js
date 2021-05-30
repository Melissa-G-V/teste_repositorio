const { raw } = require('express');
const knex = require('../database/dbConfig');
const { destroy } = require('./RemedioController');

module.exports = {
    
    //index: metodo de listagem
    //store/create: metodo inclusao de dados
    //update: metodo de alteração
    //destroy: metodo de exclusao

    async index(req,res){
        const compras = await knex
        .select(['compras.NFC_e','clientes.nome_cli as cliente_nome', 'remedios.nome as nome_remedio', 'remedios.preco as preco_do_remedio' ])                            
        .from('compras')
        .leftJoin(
        'clientes',
        "clientes.id", "=", "compras.id_cliente"
        )
        .from('compras')
        .leftJoin(
        'remedios',
        "remedios.id", "=", "compras.id_remedio"
        );
        res.status(200).json(compras);
    },


    async store (req,res){
        const {NFC_e, id_remedio, id_cliente} = req.body;

        if(!NFC_e|| !id_remedio|| !id_cliente){
            res.status(400).json({erro: "Faça certeza de adicionar corretamente os dados da compra"});
            return;
        };
        try{
            const novo = await knex('compras').insert({NFC_e, id_remedio, id_cliente});
            res.status(201).json({id: novo[0]});
        }catch(error){
            res.status(400).json({erro: error.message});
        }
    },


    async update (req,res){
    try {
        const {NFC_e, id_remedio, id_cliente} = req.body
        const {id} = req.params
        await knex('compras')
        .update({NFC_e, id_remedio, id_cliente})
        .where({id})
        res.status(200).json('ok! foi alterado');
        } catch (error) {
            res.status(400).json({erro: error.message});
        }
    },

    async estatistica (req,res){
        try {
        const compras = await knex
        .select(['remedios.preco'])                            
        .from('compras')
        .leftJoin(
        'remedios',
        "remedios.id", "=", "compras.id_remedio"
        )
        knex.select('preco',knex.raw('SUM(preco)')).from('remedios')
        res.status(201).json(compras);
        } catch (error) {
            res.status(400).json({erro: error.message});
        }

    }

};