const mongoose = require('mongoose');
const Planet = mongoose.model('Planet');

exports.get = (req, res, next) => {
    Planet.find({})
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getBySlug = (req, res, next) => {
    Planet.findOne({
            slug: req.params.slug,
        }, "name slug climate terrain films")
        .then(data => {
            if (data){
                res.status(200).send(data);
            }else{
                res.status(200).send({message: `Nenhum planeta encontrado com a SLUG: ${req.params.slug}`});
            }
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getByName = (req, res, next) => {
    Planet.find({
            name: req.params.name,
        }, "name slug climate terrain films")
        .then(data => {
            if (data){
                res.status(200).send(data);
            }else{
                res.status(200).send({message: `Nenhum planeta encontrado com o NOME: ${req.params.slug}`});
            }
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getById = (req, res, next) => {
    Planet.findById(req.params.id)
        .then(data => {
            if (data){
                res.status(200).send(data);
            }else{
                res.status(200).send({message: `Nenhum planeta encontrado com o ID: ${req.params.id}`});
            }
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    var planet = new Planet(req.body);
    planet
        .save().then(x => {
            res.status(201).send({
                message: "Planeta inserido com sucesso!"
            });
        }).catch(e => {
            res.status(400).send({
                message: "Ocorreu um erro ao inserir o Planeta!",
                error: e
            })
        });
};

exports.delete = (req, res, next) => {
    Planet.
    findOneAndRemove(req.params.id)
        .then(x => {
            res.status(200).send({
                message: "Planeta removido com sucesso!"
            });
        }).catch(e => {
            res.status(400).send({
                menssage: "Nenhum planeta encontrado!",
                data: e
            });
        });
};